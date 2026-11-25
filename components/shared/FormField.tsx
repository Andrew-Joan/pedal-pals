import type { InputHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  hint?: string;
  /** Optional control rendered inside the field on the right, e.g. a password toggle. */
  trailing?: ReactNode;
}

export function FormField({
  id,
  label,
  hint,
  trailing,
  className,
  ...props
}: FormFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block font-sans text-sm font-semibold text-ink"
      >
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          className={cn(
            "w-full rounded-md border border-ink/20 bg-paper px-4 py-3 font-sans text-sm text-ink placeholder:text-ink/40 focus:border-brand-amber focus:outline-none focus:ring-2 focus:ring-brand-amber/30",
            trailing && "pr-12",
            className,
          )}
          {...props}
        />
        {trailing && (
          <span className="absolute inset-y-0 right-1 flex items-center">
            {trailing}
          </span>
        )}
      </div>
      {hint && <p className="mt-1.5 font-sans text-xs text-ink/50">{hint}</p>}
    </div>
  );
}
