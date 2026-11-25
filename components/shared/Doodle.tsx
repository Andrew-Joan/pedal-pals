import { cn } from "@/lib/utils";
import { maskStyle } from "@/lib/mask";
import { DOODLES, type DoodleName } from "@/lib/doodles";

export type { DoodleName };

interface DoodleProps {
  /** See the catalog at /dev/decor for every name. */
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
