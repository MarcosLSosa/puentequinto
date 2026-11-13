export default function PhotosSection() {
  return (
    <section
      id="fotos"
      className="relative overflow-hidden bg-[#080706] px-6 py-24 text-white sm:px-10 lg:px-12"
    >
      <div className="pointer-events-none absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-[#d16c37]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div
          aria-label="Gráfica de escenario con la identidad de Puente Quinto"
          className="relative isolate flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-[1.75rem] border border-[#DCC08A]/20 bg-[#110d0b]"
        >
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_105%,rgba(209,108,55,0.42),transparent_58%),radial-gradient(ellipse_at_50%_-20%,rgba(220,192,138,0.12),transparent_55%)]" />
          <div className="absolute inset-x-[18%] top-0 -z-10 h-full origin-top skew-x-[-18deg] bg-gradient-to-b from-[#DCC08A]/10 via-[#D16C37]/[0.06] to-transparent blur-2xl" />
          <div className="absolute inset-4 rounded-[1.2rem] border border-white/10" />

          <div className="relative flex flex-col items-center text-center">
            <p className="text-[0.6rem] uppercase tracking-[0.48em] text-[#DCC08A]/75 sm:text-xs">
              Puente Quinto · En vivo
            </p>
            <div className="relative my-6 flex h-40 w-40 items-center justify-center rounded-full border border-[#DCC08A]/35 sm:my-8 sm:h-52 sm:w-52">
              <div className="absolute inset-2 rounded-full border border-[#DCC08A]/15" />
              <div className="absolute inset-5 rounded-full bg-[#D16C37]/10 blur-xl" />
              <span className="relative text-5xl font-black tracking-[-0.12em] text-[#f1dfb8] sm:text-7xl">
                PQ
              </span>
            </div>
            <p className="text-lg font-semibold uppercase tracking-[0.32em] text-white sm:text-2xl">
              Soul · Funk · Baladas
            </p>
            <div
              aria-hidden="true"
              className="mt-7 flex h-8 items-center gap-[3px] sm:mt-9"
            >
              {[10, 17, 24, 13, 28, 19, 11, 25, 16, 29, 13, 21, 10, 18, 26, 12, 22, 15, 28, 11, 19, 25, 13, 21, 9].map(
                (height, index) => (
                  <span
                    key={index}
                    className="w-[2px] rounded-full bg-gradient-to-t from-[#D16C37] to-[#DCC08A]/70 sm:w-[3px]"
                    style={{ height }}
                  />
                ),
              )}
            </div>
          </div>

          <p className="absolute bottom-7 left-0 right-0 text-center text-[0.55rem] uppercase tracking-[0.32em] text-white/40 sm:text-[0.65rem]">
            Galería de shows · Próximamente
          </p>
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
