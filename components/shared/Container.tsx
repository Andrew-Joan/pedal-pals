import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

// Wider on big screens, so the layout matches the mockups (which fill ~80% of the width).
export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-300 px-4 sm:px-6 lg:px-8 xl:max-w-360 2xl:max-w-450",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
