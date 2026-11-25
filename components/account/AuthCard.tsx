import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { BrushUnderline } from "@/components/shared/BrushUnderline";
import { Doodle, type DoodleName } from "@/components/shared/Doodle";

interface AuthCardProps {
  /** Anchor id, so the other card can link to it. */
  id: string;
  title: string;
  icon: ReactNode;
  doodle?: DoodleName;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
}

export function AuthCard({
  id,
  title,
  icon,
  doodle = "star-1",
  children,
  footer,
  className,
}: AuthCardProps) {
  return (
    <section
      id={id}
      className={cn(
        "auth-frame relative flex h-full flex-col rounded-md border border-ink/10 bg-cream p-6 text-ink shadow-xl sm:p-8",
        className,
      )}
    >
      <Doodle
        name={doodle}
        className="absolute right-6 top-5 w-10 rotate-12 text-brand-amber/70"
      />

      <header className="mb-6 flex items-center gap-3">
        <span aria-hidden="true" className="text-ink">
          {icon}
        </span>
        <div>
          <h2 className="font-heading text-3xl font-bold uppercase tracking-wide text-ink sm:text-4xl">
            {title}
          </h2>
          <BrushUnderline
            variant={1}
            className="mt-1 h-2.5 w-28 text-brand-amber"
          />
        </div>
      </header>

      <div className="flex-1">{children}</div>

      {footer && (
        <div className="mt-6 border-t border-ink/10 pt-5 text-center font-sans text-sm text-ink/70">
          {footer}
        </div>
      )}
    </section>
  );
}
