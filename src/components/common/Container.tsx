import React from "react";

export default function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`${className} mx-auto max-w-[1250px]`}>
      {children}
    </section>
  );
}
