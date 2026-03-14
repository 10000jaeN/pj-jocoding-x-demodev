import React from "react";

interface ChipProps {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

export default function Chip({ variant = "primary", children }: ChipProps) {
  return (
    <span
      className={`${
        variant === "primary"
          ? "bg-gradient-to-l from-[#0B2959] to-[#7017BF] text-[32px] shadow-[0_8px_4px_0_rgba(0,0,0,0.2)]"
          : "bg-[#EAEAEA] text-[20px] text-[#979797]"
      } rounded-[20px] px-10 py-[10px] font-bold`}
    >
      {children}
    </span>
  );
}
