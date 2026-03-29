import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

type ContactPayload = {
  name: string;
  email: string;
  message: string;
  grecaptcha: string;
};

const EMAIL_PATTERN = /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/;
const NAME_PATTERN = /^[a-zA-Z\s]{2,50}$/;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const UPSTREAM_TIMEOUT_MS = 30000;

const ipHits = new Map<string, number[]>();

function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0]?.trim() || 'unknown';
  }
  return req.headers.get('x-real-ip') || 'unknown';
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const hits = ipHits.get(ip) ?? [];
  const recentHits = hits.filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS);

  if (recentHits.length >= RATE_LIMIT_MAX) {
    ipHits.set(ip, recentHits);
    return true;
  }

  recentHits.push(now);
  ipHits.set(ip, recentHits);
  return false;
}

function parsePayload(input: unknown): ContactPayload | null {
  if (!input || typeof input !== 'object') {
    return null;
  }

  const obj = input as Record<string, unknown>;
  const name = typeof obj.name === 'string' ? obj.name.trim() : '';
  const email = typeof obj.email === 'string' ? obj.email.trim() : '';
  const message = typeof obj.message === 'string' ? obj.message.trim() : '';
  const grecaptcha = typeof obj.grecaptcha === 'string' ? obj.grecaptcha.trim() : '';

  if (!NAME_PATTERN.test(name)) {
    return null;
  }

  if (!EMAIL_PATTERN.test(email)) {
    return null;
  }

  if (message.length < 10 || message.length > 2000) {
    return null;
  }

  if (!grecaptcha) {
    return null;
  }

  return { name, email, message, grecaptcha };
}

async function verifyRecaptcha(token: string, remoteIp: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    console.error('Missing RECAPTCHA_SECRET_KEY environment variable');
    return false;
  }

  const body = new URLSearchParams({
    secret,
    response: token,
    remoteip: remoteIp,
  });

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body,
      cache: 'no-store',
    });

    if (!response.ok) {
      return false;
    }

    const data = (await response.json()) as { success?: boolean };
    return Boolean(data.success);
  } catch (error) {
    console.error('reCAPTCHA verify request failed:', error);
    return false;
  }
}

export async function POST(req: NextRequest) {
  const ip = getClientIp(req);

  if (isRateLimited(ip)) {
    return NextResponse.json({ success: false, message: 'Too many requests' }, { status: 429 });
  }

  const payload = parsePayload(await req.json().catch(() => null));
  if (!payload) {
    return NextResponse.json({ success: false, message: 'Invalid input' }, { status: 400 });
  }

  try {
    const recaptchaOk = await verifyRecaptcha(payload.grecaptcha, ip);
    if (!recaptchaOk) {
      return NextResponse.json({ success: false, message: 'Captcha verification failed' }, { status: 400 });
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), UPSTREAM_TIMEOUT_MS);

    let scriptResponse: Response;
    try {
      scriptResponse = await fetch(
        'https://script.google.com/macros/s/AKfycbxlIjwPb2HhtZyNJLOiNh0XHqkSpo8GvqxDO96U6JMJJlj9M-xV-ap2wDijsVh5IxwkTw/exec',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: payload.name,
            email: payload.email,
            message: payload.message,
            grecaptcha: payload.grecaptcha,
          }),
          signal: controller.signal,
        },
      );
    } catch (error) {
      clearTimeout(timeoutId);
      console.error('Contact upstream request failed:', error);
      const err = error as Error & { cause?: unknown };
      const isTimeout = err?.name === 'AbortError';
      const diagnostic = isTimeout ? 'APPSCRIPT_TIMEOUT' : 'APPSCRIPT_NETWORK_ERROR';
      return NextResponse.json(
        {
          success: false,
          message: 'Contact service unavailable',
          diagnostic,
          detail: process.env.NODE_ENV !== 'production' ? String(err?.message || err) : undefined,
        },
        { status: 502 },
      );
    }

    clearTimeout(timeoutId);

    const responseData = (await scriptResponse.json().catch(() => ({}))) as {
      success?: boolean;
    };

    if (!scriptResponse.ok || !responseData.success) {
      return NextResponse.json({ success: false }, { status: 502 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error('Email send error:', err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
