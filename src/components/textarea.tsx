'use client';

import React from "react";
import { UseFormRegisterReturn, FieldError } from "react-hook-form";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  name: string;
  placeholder?: string;
  register?: UseFormRegisterReturn;
  required?: boolean;
  error?: FieldError | null;
  className?: string;
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  name,
  placeholder = "",
  register,
  required = false,
  error = null,
  className = "",
  ...rest
}) => {
  return (
    <div className="mt-4">
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-montserrat text-[#808080] mb-1"
        >
          {label}
        </label>
      )}

      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        className={`
          w-full min-h-[140px] p-2 text-[#1A1A1A] bg-[#F5F5F5] text-base font-montserrat 
          rounded-[4px] focus:outline-none focus:ring-1 placeholder:text-[#1A1A1A] 
          transition-all duration-300 focus:ring-[#6B7280] ${className}
        `}
        {...register}
        {...rest}
      />

      {error && (
        <p className="text-red-500 text-xs">
          {error.message || "This field is required"}
        </p>
      )}
    </div>
  );
};
