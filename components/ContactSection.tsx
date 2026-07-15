export default function ContactSection() {
  return (
    <section id="contacto" className="bg-[#040404] text-white py-24 px-6">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-[#DCC08A]/80">
          Contacto
        </p>
        <h2 className="mt-4 text-5xl font-bold">Contrataciones y prensa</h2>
        <p className="mx-auto mt-6 max-w-2xl text-zinc-400">
          Para shows, booking o consultas de prensa, escribinos y armamos juntos la experiencia.
        </p>

        <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.8)]">
          <p className="text-lg font-semibold text-white">RG Manager</p>
          <p className="mt-2 text-3xl font-bold text-[#DCC08A]">+54 9 2657 23-6112</p>
          <a
            href="https://wa.me/5492657236112"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex rounded-full bg-[#DCC08A] px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-[#b69d5e]"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}