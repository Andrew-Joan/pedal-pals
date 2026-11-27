import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { BrushUnderline } from "@/components/shared/BrushUnderline";
import { Doodle, type DoodleName } from "@/components/shared/Doodle";

interface AuthCardProps {
  title: string;
  /** Which card this is. It sets where the hover frame starts: at the star in the top-left corner. */
  frame: "login" | "register";
  icon: ReactNode;
  /** Small doodle in the top-right corner of the card. */
  doodle?: DoodleName;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
}

const frameClass = {
  login: "auth-frame--login",
  register: "auth-frame--register",
} as const;

export function AuthCard({
  title,
  frame,
  icon,
  doodle = "star-1",
  children,
  footer,
  className,
}: AuthCardProps) {
  return (
    // The outer element carries the animated amber frame; the inner one carries
    // the paper texture. They are separate because both use ::before.
    <section
      className={cn(
        "auth-frame relative flex flex-col rounded-md border border-ink/10 shadow-2xl",
        frameClass[frame],
        className,
      )}
    >
      <div className="grain-cream relative flex flex-1 flex-col overflow-hidden rounded-[inherit] bg-cream p-6 text-ink sm:p-8">
        <Doodle
          name={doodle}
          className="absolute right-6 top-5 z-10 w-10 rotate-12 text-brand-amber"
        />

        <header className="relative z-10 mb-6 flex items-center gap-3">
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

        <div className="relative z-10 flex-1">{children}</div>

        {footer && (
          <div className="relative z-10 mt-6 border-t border-ink/10 pt-5 text-center font-sans text-sm text-ink/70">
            {footer}
          </div>
        )}
      </div>

      {/* A sticker on the card's top-left corner. The hover frame starts here. */}
      <Doodle
        name="star-6"
        className="absolute -left-7 -top-7 z-10 hidden w-14 -rotate-12 text-brand-amber sm:block"
      />
    </section>
  );
}
