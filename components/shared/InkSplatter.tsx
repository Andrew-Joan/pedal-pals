import { cn } from "@/lib/utils";
import { maskStyle } from "@/lib/mask";
import { SPLATTERS } from "@/lib/doodles";

type Tone = "ink" | "cream" | "amber";

const toneClass: Record<Tone, string> = {
  ink: "bg-ink",
  cream: "bg-cream",
  amber: "bg-brand-amber",
};

interface InkSplatterProps {
  /** Which splatter, 1 to 16. See the catalog at /dev/decor. */
  variant?: number;
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
  const count = SPLATTERS.length;
  const raw = variant !== undefined ? variant - 1 : seed;
  const index = ((raw % count) + count) % count;
  const [width, height] = SPLATTERS[index];
  return (
    <span
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute block",
        toneClass[tone],
        className,
      )}
      style={{
        aspectRatio: `${width} / ${height}`,
        ...maskStyle(`/textures/splatter-${index + 1}.webp`),
        transform: flip ? "scaleX(-1)" : undefined,
      }}
    />
  );
}
