import { shows } from "../data/shows";

export default function ShowsSection() {
  return (
    <section id="shows" className="relative overflow-hidden bg-[#080808] py-24 px-6 text-white sm:px-10 lg:px-12">
      <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-[#DCC08A]/10 blur-3xl" />
      <div className="absolute left-10 top-1/2 h-56 w-56 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#DCC08A]/80">
            En vivo
          </p>
          <h2 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">Próxima fecha</h2>
          <p className="mt-4 max-w-2xl mx-auto text-zinc-400 sm:text-lg">
            Nos encontramos en el escenario. Reviví también algunos de los shows que compartimos.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {shows.map((show) => {
            const [day, month] = show.date.split(" ");

            return (
              <article
                key={`${show.date}-${show.place}`}
                className={`group relative isolate flex overflow-hidden rounded-[1.5rem] border shadow-[0_35px_70px_-40px_rgba(0,0,0,0.9)] transition duration-300 hover:-translate-y-1 ${
                  show.isUpcoming
                    ? "border-[#DCC08A]/40 bg-gradient-to-br from-[#29241b] via-[#17130f] to-[#100e0c] hover:border-[#DCC08A]/70"
                    : "border-white/10 bg-gradient-to-br from-[#171717] to-[#0d0d0d] hover:border-white/20"
                }`}
              >
                {show.isUpcoming && (
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#DCC08A]/10 to-transparent" />
                )}

                <aside
                  className={`relative flex w-[5.5rem] shrink-0 flex-col items-center justify-center border-r border-dashed px-2 py-6 text-center sm:w-24 ${
                    show.isUpcoming
                      ? "border-[#DCC08A]/35 bg-[#DCC08A]/[0.06]"
                      : "border-white/15 bg-white/[0.025]"
                  }`}
                >
                  <span className="text-[0.55rem] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                    {show.isUpcoming ? "EN VIVO" : "SHOW"}
                  </span>
                  <span className={`mt-2 text-4xl font-black leading-none tracking-tight sm:text-5xl ${show.isUpcoming ? "text-[#f1dfb8]" : "text-white/85"}`}>
                    {day}
                  </span>
                  <span className={`mt-1 text-xs font-bold uppercase tracking-[0.22em] ${show.isUpcoming ? "text-[#DCC08A]" : "text-zinc-400"}`}>
                    {month}
                  </span>
                  {show.year && (
                    <span className="mt-2 text-[0.65rem] tracking-[0.16em] text-zinc-500">
                      {show.year}
                    </span>
                  )}
                  <div aria-hidden="true" className="mt-5 flex h-5 items-center gap-[2px] opacity-45">
                    {[8, 14, 6, 17, 10, 15, 7, 12, 5].map((height, index) => (
                      <span
                        key={index}
                        className={`w-[2px] ${show.isUpcoming ? "bg-[#DCC08A]" : "bg-zinc-400"}`}
                        style={{ height }}
                      />
                    ))}
                  </div>
                </aside>

                <div className="relative min-w-0 flex-1 p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-3">
                    <p className={`flex items-center gap-2 text-[0.6rem] font-semibold uppercase tracking-[0.2em] sm:text-xs ${show.isUpcoming ? "text-[#DCC08A]" : "text-zinc-500"}`}>
                      {show.isUpcoming && (
                        <span className="h-1.5 w-1.5 rounded-full bg-[#DCC08A] shadow-[0_0_10px_rgba(220,192,138,0.8)]" />
                      )}
                      {show.status}
                    </p>
                    <span className="text-[0.55rem] uppercase tracking-[0.2em] text-white/25">
                      PQ · {show.year ?? "VM"}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-bold leading-tight tracking-tight sm:text-2xl">
                    {show.place}
                  </h3>
                  <p className="mt-2 text-[0.65rem] font-medium uppercase leading-relaxed tracking-[0.14em] text-zinc-400 sm:text-xs">
                    {show.city}
                  </p>
                  {show.venueDetail && (
                    <p className="mt-1 text-[0.6rem] uppercase tracking-[0.18em] text-zinc-500">
                      {show.venueDetail}
                    </p>
                  )}

                  {show.invitedAct && (
                    <div className="mt-5 border-t border-white/10 pt-4">
                      <p className="text-[0.55rem] uppercase tracking-[0.22em] text-zinc-500">
                        Banda invitada
                      </p>
                      <p className="mt-1 font-semibold tracking-wide text-[#DCC08A]">
                        {show.invitedAct}
                      </p>
                      {show.invitedActDescription && (
                        <p className="mt-1 text-xs text-zinc-400">
                          {show.invitedActDescription}
                        </p>
                      )}
                    </div>
                  )}

                  {show.ticketWhatsAppNumber && (
                    <a
                      href={`https://api.whatsapp.com/send?phone=${show.ticketWhatsAppNumber}&text=${encodeURIComponent(
                        `Hola, quiero consultar por entradas anticipadas para el show del ${show.date} en ${show.place}.`,
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex w-full items-center justify-center gap-2.5 rounded-xl border border-[#DCC08A]/35 bg-[#DCC08A]/[0.07] px-3 py-3 text-center text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#f1dfb8] transition hover:border-[#25D366]/60 hover:bg-[#25D366]/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#DCC08A] sm:text-xs"
                    >
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="h-5 w-5 shrink-0 text-[#25D366]"
                        fill="currentColor"
                      >
                        <path d="M20.52 3.48A11.82 11.82 0 0 0 12.08 0C5.5 0 .14 5.35.14 11.94c0 2.1.55 4.15 1.6 5.96L.05 24l6.26-1.64a11.94 11.94 0 0 0 5.76 1.47h.01c6.58 0 11.94-5.36 11.94-11.94 0-3.19-1.24-6.19-3.5-8.41ZM12.08 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.88 9.88 0 0 1-1.52-5.25c0-5.46 4.44-9.9 9.9-9.9a9.83 9.83 0 0 1 7 2.9 9.83 9.83 0 0 1 2.9 7c0 5.46-4.45 9.9-9.91 9.9Zm5.43-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.67-2.06-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.58-.35Z" />
                      </svg>
                      <span>Entradas anticipadas</span>
                    </a>
                  )}

                  {(show.map || show.flyer) && (
                    <div className="mt-5 flex flex-wrap gap-4 border-t border-white/10 pt-4">
                      {show.map && (
                        <a
                          href={show.map}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs font-semibold text-[#DCC08A] transition hover:text-[#f8d77f]"
                        >
                          Cómo llegar
                        </a>
                      )}
                      {show.flyer && (
                        <a
                          href={show.flyer}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs font-semibold text-[#DCC08A] transition hover:text-[#f8d77f]"
                        >
                          Ver flyer
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
