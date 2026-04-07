import Navbar from "../navbar";
import { Revenue } from "./revenue";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
    return (
        <>
            <div
                className="relative min-h-[100vh] bg-cover bg-center overflow-hidden"
                style={{ backgroundImage: `url('/assets/images/png/landing-hero.png')` }}
            >
                <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(1,17,58,0.82)_0%,rgba(4,53,156,0.66)_45%,rgba(4,53,156,0.34)_100%)] z-0" />
                <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-[#fdd028]/25 blur-3xl z-0" />
                <div className="absolute -bottom-32 left-10 w-[380px] h-[380px] rounded-full bg-[#7ca8ff]/25 blur-3xl z-0" />

                <div className="relative z-10 min-h-[100vh] flex flex-col">
                    <Navbar />
                    <div className="flex flex-1 items-center">
                        <div className="w-[90%] lg:w-[80%] mx-auto">
                            <div className="md:max-w-[82%] mt-16 md:mt-6">
                                <p className="inline-flex items-center gap-2 text-[#fdd028] border border-[#fdd028]/40 bg-[#fdd028]/10 rounded-full px-4 py-2 font-montserrat text-xs md:text-sm tracking-wide uppercase fade-up">
                                    Precision. Safety. Delivery.
                                </p>
                                <h1 className="text-white md:text-[56px] xl:text-[84px] leading-[1.04] text-[34px] font-bold font-raleway mt-5 fade-up-delay-1">
                                    Revolutionizing the Engineering Services Industry
                                </h1>
                                <p className="text-[#e8efff] md:mt-4 mt-6 font-montserrat md:text-[1.25rem] max-w-[780px] fade-up-delay-2">
                                    We are your trusted partner in helping your operations stay ahead with dependable engineering delivery, safer systems, and durable outcomes.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 mt-8 fade-up-delay-3">
                                    <Link
                                        href="/contact"
                                        className="btn-lift hero-glow bg-[#fdd028] text-[#042157] font-bold font-montserrat rounded-full px-7 py-4 inline-flex items-center gap-2 w-fit"
                                    >
                                        Start a Project
                                        <ArrowRight size={18} />
                                    </Link>
                                    <Link
                                        href="/projects"
                                        className="btn-lift border border-white/50 text-white font-semibold font-montserrat rounded-full px-7 py-4 inline-flex items-center gap-2 w-fit bg-white/10 backdrop-blur-sm"
                                    >
                                        View Projects
                                        <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Revenue />
        </>
    );
};
