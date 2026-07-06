"use client";

import { useRef } from "react";

export default function TiltCard({
  children,
  className = "",
  innerClassName = "",
  strength = 10,
}: {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  strength?: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !innerRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    innerRef.current.style.transform = `rotateY(${x * strength}deg) rotateX(${
      -y * strength
    }deg) translateY(-4px) translateZ(0)`;
  };

  const handleMouseLeave = () => {
    if (!innerRef.current) return;
    innerRef.current.style.transform = "rotateY(0deg) rotateX(0deg) translateY(0px)";
  };

  return (
    <div
      className={`course-card ${className}`}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={innerRef} className={`tilt-card ${innerClassName}`}>
        {children}
      </div>
    </div>
  );
}
