import Image from "next/image";

export default function PhotosSection() {
  return (
    <section
      id="fotos"
      className="relative overflow-hidden bg-[#080706] px-6 py-24 text-white sm:px-10 lg:px-12"
    >
      <div className="pointer-events-none absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-[#d16c37]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div
          role="img"
          aria-label="Gráfica de escenario de Puente Quinto"
          className="relative grid aspect-[4/3] min-h-96 w-full grid-rows-[auto_1fr_auto] overflow-hidden rounded-[1.75rem] border border-[#DCC08A]/20 bg-[#110d0b] p-6 sm:p-8"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_60%,rgba(209,108,55,0.24),transparent_52%),linear-gradient(135deg,rgba(220,192,138,0.08),transparent_42%)]" />
          <div className="pointer-events-none absolute inset-4 rounded-[1.2rem] border border-white/10" />

          <div className="relative flex items-center justify-between gap-4 text-[0.55rem] uppercase tracking-[0.28em] text-[#DCC08A]/75 sm:text-xs">
            <span>Puente Quinto</span>
            <span>Villa Mercedes · En vivo</span>
          </div>

          <div className="relative flex min-h-0 flex-col items-center justify-center py-5 text-center">
            <div className="relative flex h-32 w-32 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#DCC08A]/35 sm:h-40 sm:w-40">
              <div className="absolute inset-2 rounded-full border border-[#DCC08A]/15" />
              <Image
                src="/images/logo.jpg"
                alt="Logo de Puente Quinto"
                width={160}
                height={160}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-white sm:text-xl sm:tracking-[0.3em]">
              Soul · Funk · Baladas
            </p>
            <div aria-hidden="true" className="mt-5 flex h-5 items-center gap-[3px]">
              {[8, 14, 19, 11, 17, 9, 15, 20, 12, 17, 8, 14, 19, 10, 16, 8, 13].map(
                (height, index) => (
                  <span
                    key={index}
                    className="w-[2px] rounded-full bg-gradient-to-t from-[#D16C37] to-[#DCC08A]/70"
                    style={{ height }}
                  />
                ),
              )}
            </div>
          </div>

          <div className="relative flex items-center justify-between gap-3 border-t border-white/10 pt-4 text-[0.5rem] uppercase tracking-[0.18em] text-white/45 sm:text-[0.6rem]">
            <span>Galería de shows</span>
            <span>Próximamente</span>
          </div>
        </div>

        <div className="lg:py-8">
          <p className="text-sm uppercase tracking-[0.35em] text-[#DCC08A]/80">
            Momentos en vivo
          </p>
          <h2 className="mt-4 max-w-lg text-4xl font-bold tracking-tight sm:text-5xl">
            Cada show se queda sonando.
          </h2>
          <p className="mt-6 max-w-lg leading-relaxed text-zinc-400">
            Estamos preparando una galería con fotos de nuestros shows. Mientras tanto, encontranos en Instagram.
          </p>
          <a
            href="https://www.instagram.com/puentev.vm?igsh=MzZhMHdoeGkyc2Ru"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-3 border-b border-[#DCC08A]/50 pb-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#DCC08A] transition hover:border-[#DCC08A] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#DCC08A]"
          >
            Más momentos en Instagram
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
