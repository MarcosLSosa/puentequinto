export default function VideosSection() {
  return (
    <section id="videos" className="bg-[#0a0a0a] py-24 px-6 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#DCC08A]/80">
            Video destacado
          </p>
          <h2 className="mt-4 text-5xl font-bold">DESVELO</h2>
          <p className="mt-4 max-w-2xl mx-auto text-zinc-400">
            Mirá el videoclip oficial con una producción intensa y la energía del sonido de Puente Quinto.
          </p>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_35px_70px_-40px_rgba(0,0,0,0.9)]">
          <div className="aspect-video w-full">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/4s2G2UQgvcE"
              title="Puente Quinto - Desvelo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

