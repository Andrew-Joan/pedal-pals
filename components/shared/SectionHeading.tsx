import React from "react";
import { cn } from "@/lib/utils";
import { BrushUnderline } from "@/components/shared/BrushUnderline";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  color?: "ink" | "cream" | "amber";
  className?: string;
}

const underlineColor = {
  ink: "text-ink",
  cream: "text-cream",
  amber: "text-brand-amber",
} as const;

export function SectionHeading({
  title,
  subtitle,
  centered = false,
  color = "amber",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-8 sm:mb-12", centered && "text-center", className)}>
      <h2 className="font-heading text-4xl font-bold uppercase tracking-wide sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 font-sans text-base opacity-80 sm:text-lg">
          {subtitle}
        </p>
      )}
      <BrushUnderline
        variant={2}
        className={cn(
          "mt-3 h-3 w-40 sm:w-56",
          centered && "mx-auto",
          underlineColor[color],
        )}
      />
    </div>
  );
}
