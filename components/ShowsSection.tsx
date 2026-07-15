export default function ShowsSection() {
  return (
    <section id="shows" className="bg-[#090909] py-24 px-6 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#DCC08A]/80">
            Próximos shows
          </p>
          <h2 className="mt-4 text-5xl font-bold">No te lo pierdas</h2>
          <p className="mt-4 max-w-2xl mx-auto text-zinc-400 sm:text-lg">
            La mejor sesión soul, funk y baladas en vivo, directo desde Villa Mercedes.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_35px_70px_-40px_rgba(0,0,0,0.9)] sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#DCC08A]/80">Próximo show</p>
              <p className="mt-3 text-3xl font-semibold">Boliche Don Miranda</p>
              <p className="mt-2 text-lg text-zinc-300">07/08 · 23:00 hs.</p>
              <p className="mt-4 rounded-full bg-[#111]/90 px-4 py-2 text-sm uppercase tracking-[0.18em] text-[#DCC08A] shadow-[0_10px_30px_-20px_rgba(220,192,138,0.75)]">
                $8.000 pesos
              </p>
            </div>
            <a
              href="https://mpago.la/2VbdUNd"
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full border border-white/10 bg-[#111]/90 px-6 py-4 text-center text-sm uppercase tracking-[0.18em] text-[#DCC08A] transition hover:bg-white/5"
            >
              CONSEGUÍ TU ENTRADA ONLINE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
