import React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 cursor-pointer select-none disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-brand-amber",
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
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  );
}

export interface ButtonLinkProps
  extends
    Omit<React.ComponentProps<typeof Link>, "className">,
    VariantProps<typeof buttonVariants> {
  className?: string;
}

/** A link that looks like a Button. Use this instead of putting a Button inside a Link. */
export function ButtonLink({
  className,
  variant,
  size,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </Link>
  );
}
