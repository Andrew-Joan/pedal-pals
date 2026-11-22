import { cn } from "@/lib/utils";

type Tone = "ink" | "ink-soft" | "cream" | "paper";

// Full class names are written out so Tailwind can detect them.
const backgroundClass: Record<Tone, string> = {
  ink: "bg-ink",
  "ink-soft": "bg-ink-soft",
  cream: "bg-cream",
  paper: "bg-paper",
};

const fillClass: Record<Tone, string> = {
  ink: "fill-ink",
  "ink-soft": "fill-ink-soft",
  cream: "fill-cream",
  paper: "fill-paper",
};

interface TornDividerProps {
  /** Color of the section above the torn edge. */
  from?: Tone;
  /** Color of the section below the torn edge. */
  to?: Tone;
  /** Mirror the edge left to right so repeated dividers don't look identical. */
  flip?: boolean;
  /** Changes the jagged pattern. Same seed gives the same edge. */
  seed?: number;
  className?: string;
}

const WIDTH = 1200;
const HEIGHT = 40;
const POINTS = 40;

// Deterministic pseudo-random path, so server and browser render the same edge.
function buildTornPath(seed: number): string {
  let state = seed >>> 0 || 1;
  const random = () => {
    state = (Math.imul(state, 1664525) + 1013904223) >>> 0;
    return state / 4294967296;
  };

  const parts = [`M0,${HEIGHT}`];
  for (let i = 0; i <= POINTS; i++) {
    const x = (i / POINTS) * WIDTH;
    const wave = Math.sin(i * 0.35 + seed) * 6; // slow, large waves
    const noise = (random() - 0.5) * 14; // sharp, small tears
    const y = Math.max(4, Math.min(36, 20 + wave + noise));
    parts.push(`L${x.toFixed(1)},${y.toFixed(1)}`);
  }
  parts.push(`L${WIDTH},${HEIGHT}`, "Z");
  return parts.join(" ");
}

export function TornDivider({
  from = "ink",
  to = "cream",
  flip = false,
  seed = 7,
  className,
}: TornDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none relative block w-full overflow-hidden leading-none",
        backgroundClass[from],
        className,
      )}
    >
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        preserveAspectRatio="none"
        className={cn(
          "block h-8 w-full sm:h-12 md:h-16",
          flip && "scale-x-[-1]",
        )}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={buildTornPath(seed)} className={fillClass[to]} />
      </svg>
    </div>
  );
}
