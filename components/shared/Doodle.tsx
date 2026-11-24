import { cn } from "@/lib/utils";
import { maskStyle } from "@/lib/mask";

// Width and height of each file in public/doodles, for the right proportions.
const DOODLES = {
  crown: [392, 299],
  "star-1": [344, 333],
  "star-2": [471, 466],
  "star-3": [409, 409],
  "arrow-1": [421, 298],
  "arrow-2": [262, 354],
  "arrow-3": [330, 302],
  "arrow-4": [375, 211],
  "scribble-1": [473, 264],
  "scribble-2": [467, 229],
  zigzag: [558, 176],
  ring: [198, 187],
} as const;

export type DoodleName = keyof typeof DOODLES;

interface DoodleProps {
  name: DoodleName;
  /** Size and color, e.g. "w-16 text-brand-amber -rotate-6". Color comes from the text color. */
  className?: string;
}

export function Doodle({ name, className }: DoodleProps) {
  const [width, height] = DOODLES[name];
  return (
    <span
      aria-hidden="true"
      className={cn("pointer-events-none inline-block bg-current", className)}
      style={{
        aspectRatio: `${width} / ${height}`,
        ...maskStyle(`/doodles/${name}.webp`),
      }}
    />
  );
}
