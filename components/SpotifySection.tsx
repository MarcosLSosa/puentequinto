export default function SpotifySection() {
  return (
    <section id="musica" className="bg-[#080808] py-20 px-4 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-screen-xl">
        <div className="mb-10 text-center">
          <p className="text-[0.65rem] uppercase tracking-[0.35em] text-[#DCC08A]/80 sm:text-sm">
            Música destacada
          </p>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl md:text-6xl">PRIMER DISCO</h2>
          <p className="mt-4 max-w-2xl mx-auto text-sm text-zinc-400 sm:text-base">
            Entrá en la vibra de Puente Quinto: ritmos cargados de groove, voces intensas y atmósferas que se quedan en la memoria.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.7fr_1fr] xl:grid-cols-[1.6fr_1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_35px_70px_-40px_rgba(0,0,0,0.9)]">
            <div className="overflow-hidden rounded-[1.75rem] border border-white/10">
              <div className="aspect-[16/9] w-full">
                <iframe
                  src="https://open.spotify.com/embed/album/5xndVxhHlDhm6TpcLIkesu"
                  width="100%"
                  height="100%"
                  className="h-full w-full"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-white/10 bg-[#111]/90 p-8 lg:sticky lg:top-[9.5rem] lg:self-start">
            <h3 className="text-3xl font-semibold text-white">Temas destacados</h3>
            <ul className="mt-8 space-y-4 text-sm text-zinc-300">
              <li className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <strong className="block text-white">Desvelo</strong>
                Un funk melancólico que explora el anhelo y la noche como refugio emocional.
              </li>
              <li className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <strong className="block text-white">Quisiera</strong>
                Funk intenso que empuja con groove y actitud.
              </li>
              <li className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <strong className="block text-white">Dejarte ir</strong>
                Una canción de desamor cargada de emoción y verdad.
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
