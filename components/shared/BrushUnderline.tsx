import { cn } from "@/lib/utils";
import { maskStyle } from "@/lib/mask";

interface BrushUnderlineProps {
  /** Which brush stroke, 1 (rough, tall) or 2 (flatter). */
  variant?: 1 | 2;
  /** Size and color, e.g. "h-3 w-40 text-brand-amber". The stroke stretches to fit. */
  className?: string;
}

export function BrushUnderline({ variant = 1, className }: BrushUnderlineProps) {
  return (
    <span
      aria-hidden="true"
      className={cn("pointer-events-none block h-3 w-40 bg-current", className)}
      style={maskStyle(`/textures/brush-${variant}.webp`, "100% 100%")}
    />
  );
}
