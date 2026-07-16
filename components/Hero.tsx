import Image from "next/image";

const heroImage = "/images/banda.jpg";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-[6.5rem] pb-16 text-white sm:pb-20">
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Puente Quinto banda"
          fill
          className="object-cover object-[50%_8%] sm:object-[50%_10%] lg:object-[50%_12%] animate-hero-bg"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-[#DCC08A]/20 blur-3xl animate-[spin_30s_linear_infinite]" />
      <div className="pointer-events-none absolute right-0 top-36 h-56 w-56 rounded-full bg-[#DCC08A]/15 blur-3xl animate-[pulse_8s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/65 to-transparent" />

      <div className="relative mx-auto flex min-h-[55vh] sm:min-h-[60vh] md:min-h-[65vh] max-w-screen-xl flex-col justify-center px-4 sm:px-6">
        <span className="mb-5 inline-flex rounded-full border border-[#DCC08A]/30 bg-[#DCC08A]/10 px-4 py-1 text-[0.65rem] uppercase tracking-[0.35em] text-[#DCC08A]">
          Soul · Funk · Baladas
        </span>
        <h1 className="relative overflow-hidden text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl xl:text-7xl gold-shine">
          PUENTE QUINTO
        </h1>
        <p className="mt-5 max-w-3xl text-sm text-zinc-300 sm:text-base lg:text-lg">
          Un viaje sonoro intenso con grooves profundos, melodías emotivas y un estilo único que se queda en la memoria.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a href="#musica" className="rounded-full bg-[#DCC08A] px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-black shadow-xl shadow-[#DCC08A]/20">
            Escuchá ahora
          </a>
        </div>
      </div>
    </section>
  );
}
