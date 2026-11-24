import { cn } from "@/lib/utils";
import { maskStyle } from "@/lib/mask";

type Tone = "ink" | "cream" | "amber";

const toneClass: Record<Tone, string> = {
  ink: "bg-ink",
  cream: "bg-cream",
  amber: "bg-brand-amber",
};

// Width and height of each file in public/textures.
const SPLATTERS = [
  [524, 587],
  [608, 505],
  [493, 549],
  [515, 544],
  [555, 519],
  [547, 508],
] as const;

interface InkSplatterProps {
  /** Which of the 6 splatters, 1 to 6. */
  variant?: 1 | 2 | 3 | 4 | 5 | 6;
  /** Picks a variant when none is given. */
  seed?: number;
  /** ink for cream sections, cream or amber for dark sections. */
  tone?: Tone;
  /** Mirror left to right. */
  flip?: boolean;
  /** Position and size, e.g. "right-4 top-10 w-40 opacity-60". */
  className?: string;
}

export function InkSplatter({
  variant,
  seed = 0,
  tone = "ink",
  flip = false,
  className,
}: InkSplatterProps) {
  const index = (variant ? variant - 1 : Math.abs(seed) % SPLATTERS.length) as number;
  const [width, height] = SPLATTERS[index];
  return (
    <span
      aria-hidden="true"
      className={cn("pointer-events-none absolute block", toneClass[tone], className)}
      style={{
        aspectRatio: `${width} / ${height}`,
        ...maskStyle(`/textures/splatter-${index + 1}.webp`),
        transform: flip ? "scaleX(-1)" : undefined,
      }}
    />
  );
}
