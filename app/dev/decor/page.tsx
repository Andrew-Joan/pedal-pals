import { notFound } from "next/navigation";
import { Doodle } from "@/components/shared/Doodle";
import { InkSplatter } from "@/components/shared/InkSplatter";
import { DOODLES, SPLATTERS, type DoodleName } from "@/lib/doodles";

// Developer catalog of every decoration. Not available in production.
export default function DecorCatalogPage() {
  if (process.env.NODE_ENV === "production") notFound();

  const names = Object.keys(DOODLES) as DoodleName[];

  return (
    <main className="min-h-screen">
      <section className="bg-ink px-6 py-12 text-cream">
        <h1 className="mb-2 font-heading text-4xl font-bold uppercase">
          Decor catalog
        </h1>
        <p className="mb-10 max-w-2xl text-cream/70">
          Use a doodle with{" "}
          <code className="text-brand-amber">
            {'<Doodle name="crown-1" className="w-16 text-brand-amber" />'}
          </code>
          . This page is hidden in production.
        </p>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
          {names.map((name) => (
            <div key={name} className="flex flex-col items-center gap-2">
              <div className="flex h-28 w-full items-center justify-center rounded-xl bg-ink-soft">
                <Doodle
                  name={name}
                  className="max-h-24 w-20 text-brand-amber"
                />
              </div>
              <span className="text-xs text-cream/70">{name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="grain-cream relative bg-cream px-6 py-12 text-ink">
        <h2 className="mb-6 font-heading text-3xl font-bold uppercase">
          Ink splatters
        </h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-8">
          {SPLATTERS.map((_, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <div className="relative h-36 w-full">
                <InkSplatter
                  variant={index + 1}
                  tone="ink"
                  className="inset-0 m-auto max-h-full w-32"
                />
              </div>
              <span className="text-xs text-ink/70">splatter {index + 1}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
