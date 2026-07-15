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

        <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.8)] sm:p-10">
          <p className="text-lg font-semibold text-white">RG Manager</p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://wa.me/5492657236112"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#DCC08A] px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-[#b69d5e]"
            >
              <span className="text-lg">📲</span>
              WhatsApp
            </a>
          </div>

          <div className="mt-10 space-y-4 text-sm text-zinc-300">
            <p className="font-semibold text-white">Seguinos</p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-white/80">
              <a href="https://www.youtube.com" target="_blank" rel="noreferrer" className="transition hover:text-[#DCC08A]">YouTube</a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="transition hover:text-[#DCC08A]">Instagram</a>
              <a href="https://soundcloud.com" target="_blank" rel="noreferrer" className="transition hover:text-[#DCC08A]">SoundCloud</a>
              <a href="https://open.spotify.com" target="_blank" rel="noreferrer" className="transition hover:text-[#DCC08A]">Spotify</a>
            </div>
          </div>

          <p className="mt-10 text-center text-xs uppercase tracking-[0.2em] text-zinc-500">
            Todos los derechos reservados a @puentequinto
          </p>
        </div>
      </div>
    </section>
  );
}