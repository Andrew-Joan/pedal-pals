import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 cursor-pointer select-none disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-brand-amber",
  {
    variants: {
      variant: {
        ink: "bg-ink text-cream hover:bg-ink/90 shadow-sm",
        cream: "bg-cream text-ink hover:bg-cream/90 shadow-sm",
        outline:
          "bg-transparent border border-current text-inherit hover:bg-current/10",
        amber:
          "bg-brand-amber text-ink font-bold hover:bg-brand-amber/90 shadow-sm",
      },
      size: {
        default: "px-6 py-3 text-sm",
        sm: "px-4 py-2 text-xs",
        lg: "px-8 py-4 text-base",
      },
    },
    defaultVariants: {
      variant: "ink",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({
  className,
  variant,
  size,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  );
}
