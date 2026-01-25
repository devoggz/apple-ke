"use client";

import { ReactNode, MouseEventHandler } from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>; // ✅ supports (e) => void
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
  className?: string;
  disabled?: boolean;
}

export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  disabled = false,
}: ButtonProps) {
  const baseClasses =
    "px-5 py-2 rounded-lg font-medium text-sm transition-all duration-200 flex items-center justify-center";

  const variantsClasses = {
    primary: "bg-black text-white hover:bg-gray-900",
    secondary: "bg-white text-black border border-gray-300 hover:bg-gray-100",
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variantsClasses[variant]} ${className} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {children}
    </motion.button>
  );
}
