'use client';

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { UseFormRegisterReturn, FieldError } from "react-hook-form";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  type?: string;
  placeholder?: string;
  register?: UseFormRegisterReturn;
  required?: boolean;
  error?: FieldError | null;
  className?: string;
  prefixIcon?: React.ElementType;
}

export const Input: React.FC<InputProps> = ({
  label,
  name,
  type = "text",
  placeholder = "",
  register,
  required = false,
  error = null,
  className = "",
  prefixIcon: PrefixIcon,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordField = type === "password";

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

      <div className="relative flex items-center">
        {PrefixIcon && (
          <span className="absolute left-3 text-[#9CA3AF]">
            <PrefixIcon size={18} />
          </span>
        )}

        <input
          id={name}
          name={name}
          type={isPasswordField && showPassword ? "text" : type}
          placeholder={placeholder}
          className={`
            w-full p-2 ${PrefixIcon ? "pl-10" : "pl-2"} text-[#1A1A1A] pr-10 bg-[#F5F5F5] text-base font-montserrat  h-[64px]
            rounded-[4px] focus:outline-none focus:ring-1 placeholder:text-[#1A1A1A] transition-all duration-300 focus:ring-[#6B7280] 
            ${className}
          `}
          {...register}
          {...rest}
        />

        {isPasswordField && (
          <span
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 cursor-pointer"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </span>
        )}
      </div>

      {error && (
        <p className="text-red-500 text-xs mt-1">
          {error.message || "This field is required"}
        </p>
      )}
    </div>
  );
};
