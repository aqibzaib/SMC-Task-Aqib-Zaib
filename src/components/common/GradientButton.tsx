import React from "react";

interface GradientButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const GradientButton: React.FC<GradientButtonProps> = ({
  href,
  children,
  className = "",
}) => {
  return (
    <a
      href={href}
      className={`inline-block w-[243px] rounded-[12px] px-[25px] py-[12px] text-center text-[15px] font-bold uppercase leading-[1em] tracking-[0.1em] text-white shadow-[0_0_10px_rgba(255,255,255,0.5)] ${className}`}
      style={{
        backgroundImage: "linear-gradient(139deg, #3A97A4 0%, #2366CD 91%)",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {children}
    </a>
  );
};

export default GradientButton;
