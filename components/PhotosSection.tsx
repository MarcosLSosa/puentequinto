import Image from "next/image";

export default function PhotosSection() {
  return (
    <section
      id="fotos"
      className="relative overflow-hidden bg-[#050505] px-6 py-24 text-white sm:px-10 lg:px-12"
    >
      <div className="pointer-events-none absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-[#DCC08A]/[0.07] blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <figure className="relative w-full max-w-[25rem] justify-self-center">
          <div className="absolute -inset-3 rotate-2 rounded-[2rem] border border-[#DCC08A]/20" />
          <div className="relative aspect-[1027/1600] overflow-hidden rounded-[1.75rem] bg-[#17130e]">
            <Image
              src="/images/banda.jpg"
              alt="Los cuatro integrantes de Puente Quinto"
              fill
              sizes="(min-width: 1024px) 36vw, 82vw"
              className="object-contain transition-transform duration-700 motion-safe:hover:scale-[1.02]"
            />
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/55 to-transparent" />
            <figcaption className="absolute bottom-5 left-5 text-xs uppercase tracking-[0.2em] text-white/80 sm:bottom-7 sm:left-7">
              Puente Quinto · Villa Mercedes
            </figcaption>
          </div>
        </figure>

        <div className="lg:py-8">
          <p className="text-sm uppercase tracking-[0.35em] text-[#DCC08A]/80">
            Fotos de shows
          </p>
          <h2 className="mt-4 max-w-lg text-4xl font-bold tracking-tight sm:text-5xl">
            Cada encuentro deja su huella.
          </h2>
          <p className="mt-6 max-w-lg leading-relaxed text-zinc-400">
            Una postal de Puente Quinto. Pronto sumaremos más fotos de cada show.
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
