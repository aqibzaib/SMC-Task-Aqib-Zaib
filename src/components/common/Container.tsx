import React from "react";

export default function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`${className} max-w-[1250px] mx-auto`}>
      {children}
    </section>
  );
}
