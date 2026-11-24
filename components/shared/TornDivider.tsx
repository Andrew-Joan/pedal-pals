import { cn } from "@/lib/utils";
import { maskStyle } from "@/lib/mask";

type Tone = "ink" | "ink-soft" | "cream" | "paper";
type Variant = "a" | "b" | "c";

// Full class names are written out so Tailwind can detect them.
const backgroundClass: Record<Tone, string> = {
  ink: "bg-ink",
  "ink-soft": "bg-ink-soft",
  cream: "bg-cream",
  paper: "bg-paper",
};

const LIGHT_TONES: Tone[] = ["cream", "paper"];
const VARIANTS: Variant[] = ["a", "b", "c"];

interface TornDividerProps {
  /** Color of the section above the torn edge. */
  from?: Tone;
  /** Color of the section below the torn edge. */
  to?: Tone;
  /** Mirror the edge left to right. */
  flip?: boolean;
  /** Pick a specific torn edge (a = spiky, b = medium, c = soft). */
  variant?: Variant;
  /** Picks a variant when none is given, so several dividers can differ. */
  seed?: number;
  /**
   * Draw only the torn paper and leave the rest transparent, so a photo or
   * background behind it shows through the tear. Position it with className,
   * e.g. "absolute inset-x-0 bottom-0 z-20".
   */
  overlay?: boolean;
  className?: string;
}

export function TornDivider({
  from = "ink",
  to = "cream",
  flip = false,
  variant,
  seed = 0,
  overlay = false,
  className,
}: TornDividerProps) {
  const edge = variant ?? VARIANTS[Math.abs(seed) % VARIANTS.length];

  // The torn paper is whichever side is light; the other side is the backdrop.
  const paperIsBelow = LIGHT_TONES.includes(to) || !LIGHT_TONES.includes(from);
  const paperTone = paperIsBelow ? to : from;
  const backdropTone = paperIsBelow ? from : to;

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none relative block w-full overflow-hidden leading-none",
        overlay ? "bg-transparent" : backgroundClass[backdropTone],
        className,
      )}
    >
      <div
        className={cn(
          "h-8 w-full sm:h-12 md:h-16 lg:h-20",
          backgroundClass[paperTone],
          LIGHT_TONES.includes(paperTone) && "grain-cream",
        )}
        style={{
          ...maskStyle(`/textures/torn-${edge}.webp`, "100% 100%"),
          transform: `scale(${flip ? -1 : 1}, ${paperIsBelow ? 1 : -1})`,
        }}
      />
    </div>
  );
}
