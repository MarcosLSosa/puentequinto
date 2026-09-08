import { shows } from "../data/shows";

export default function ShowsSection() {
  return (
    <section id="shows" className="relative overflow-hidden bg-[#080808] py-24 px-6 text-white sm:px-10 lg:px-12">
      <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-[#DCC08A]/10 blur-3xl" />
      <div className="absolute left-10 top-1/2 h-56 w-56 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#DCC08A]/80">
            Nuestra historia
          </p>
          <h2 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">Shows vividos</h2>
          <p className="mt-4 max-w-2xl mx-auto text-zinc-400 sm:text-lg">
            Cada escenario, una historia. Estos son algunos de los shows que compartimos.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {shows.map((show, index) => (
            <article
              key={`${show.date}-${show.place}`}
              className={`relative overflow-hidden rounded-[1.75rem] border p-7 shadow-[0_35px_70px_-40px_rgba(0,0,0,0.9)] ${
                index === 0
                  ? "border-[#DCC08A]/35 bg-gradient-to-br from-[#26231e] to-[#111]"
                  : "border-white/10 bg-white/5"
              }`}
            >
              {index === 0 && <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#DCC08A]/10 to-transparent" />}
              <div className="relative flex items-start justify-between gap-4">
                <p className="text-sm uppercase tracking-[0.25em] text-[#DCC08A]/80">{show.status}</p>
                <span className="text-right text-xs uppercase tracking-[0.15em] text-zinc-400">{show.date}</span>
              </div>
              <h3 className="relative mt-8 text-2xl font-semibold tracking-tight">{show.place}</h3>
              <p className="relative mt-2 text-sm uppercase tracking-[0.18em] text-zinc-400">{show.city}</p>

              {(show.map || show.flyer) && (
                <div className="relative mt-8 flex flex-wrap gap-3 border-t border-white/10 pt-5">
                  {show.map && (
                    <a
                      href={show.map}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-semibold text-[#DCC08A] transition hover:text-[#f8d77f]"
                    >
                      Cómo llegar
                    </a>
                  )}
                  {show.flyer && (
                    <a
                      href={show.flyer}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-semibold text-[#DCC08A] transition hover:text-[#f8d77f]"
                    >
                      Ver flyer
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
