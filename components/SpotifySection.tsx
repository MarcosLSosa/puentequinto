export default function SpotifySection() {
  return (
    <section id="musica" className="bg-[#080808] py-24 px-6 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#DCC08A]/80">
            Música destacada
          </p>
          <h2 className="mt-4 text-5xl font-bold">PRIMER DISCO</h2>
          <p className="mt-4 max-w-2xl mx-auto text-zinc-400">
            Sumergite en el sonido de Puente Quinto: grooves profundos, voces cálidas y arreglos perfectos para el club y el recuerdo.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
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

          <aside className="rounded-[2rem] border border-white/10 bg-[#111]/90 p-8">
            <h3 className="text-3xl font-semibold text-white">Pistas recomendadas</h3>
            <ul className="mt-8 space-y-4 text-sm text-zinc-300">
              <li className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <strong className="block text-white">Desvelo</strong>
                Un funk melancólico que explora el anhelo y la noche como refugio emocional.
              </li>
              <li className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <strong className="block text-white">Quisiera</strong>
                Funk intenso que empuja con groove y actitud.
              </li>
              <li className="rounded-3xl border border-white/10 bg-white/5 p-4">
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
