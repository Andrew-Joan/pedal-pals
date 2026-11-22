import React from "react";
import { cn } from "cn";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  color?: "ink" | "cream" | "amber";
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  centered = false,
  color = "amber",
  className,
}: SectionHeadingProps) {
  const underlineColor =
    color === "cream"
      ? "text-cream"
      : color === "ink"
        ? "text-ink"
        : "text-brand-amber";

  return (
    <div className={cn("mb-8 sm:mb-12", centered && "text-center", className)}>
      <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wide">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-base sm:text-lg opacity-80 font-sans">
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "mt-2 inline-block",
          centered && "mx-auto",
          underlineColor,
        )}
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 200 12"
          fill="none"
          className="w-32 sm:w-44 h-3"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 9C50 3 150 11 198 4C150 10 50 2 2 9Z"
            fill="currentColor"
            opacity="0.85"
          />
        </svg>
      </div>
    </div>
  );
}
