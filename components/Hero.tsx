export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(220,192,138,0.16),transparent_32%),linear-gradient(180deg,#000,#080808)] pt-28 pb-20 text-white">
      <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top,_rgba(220,192,138,0.22),transparent_40%)] pointer-events-none" />
      <div className="mx-auto flex min-h-[calc(100vh-7rem)] max-w-screen-xl flex-col justify-center px-6 sm:px-8">
        <span className="mb-6 inline-flex rounded-full border border-[#DCC08A]/30 bg-[#DCC08A]/10 px-4 py-1 text-xs uppercase tracking-[0.35em] text-[#DCC08A]">
          Soul · Funk · Baladas
        </span>
        <h1 className="text-5xl font-black leading-tight text-white sm:text-6xl md:text-7xl xl:text-8xl">
          PUENTE QUINTO
        </h1>
        <p className="mt-6 max-w-4xl text-base text-zinc-300 sm:text-lg lg:text-xl">
          Un viaje sonoro intenso con grooves profundos, melodías emotivas y un estilo único que se queda en la memoria.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a href="#musica" className="rounded-full bg-[#DCC08A] px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-black shadow-xl shadow-[#DCC08A]/20">
            Escuchá ahora
          </a>
          <a href="#contacto" className="rounded-full border border-white/15 px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:border-[#DCC08A] hover:text-[#DCC08A]">
            Contacto
          </a>
        </div>
      </div>
    </section>
  );
}
