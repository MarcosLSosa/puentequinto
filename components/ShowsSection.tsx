export default function ShowsSection() {
  return (
    <section id="shows" className="relative overflow-hidden bg-[#080808] py-24 px-6 text-white sm:px-10 lg:px-12">
      <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-[#DCC08A]/10 blur-3xl" />
      <div className="absolute left-10 top-1/2 h-56 w-56 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#DCC08A]/80">
            Próximos shows
          </p>
          <h2 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">No te lo pierdas</h2>
          <p className="mt-4 max-w-2xl mx-auto text-zinc-400 sm:text-lg">
            La mejor sesión soul, funk y baladas en vivo, directo desde Villa Mercedes.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr]">
          <article className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_35px_70px_-40px_rgba(0,0,0,0.9)] sm:p-10">
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#DCC08A]/10 to-transparent" />
            <p className="text-sm uppercase tracking-[0.35em] text-[#DCC08A]/80">Próximo show</p>
            <h3 className="mt-4 text-4xl font-semibold tracking-tight">Boliche Don Miranda</h3>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-zinc-300">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#111]/80 px-3 py-2 uppercase tracking-[0.18em] text-[#DCC08A]">
                Fecha
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#111]/80 px-3 py-2 uppercase tracking-[0.18em] text-[#DCC08A]">
                07/08 · 23:00 hs
              </span>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-white/10 bg-[#111]/80 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-[#DCC08A]/80">Lugar</p>
                <p className="mt-3 text-lg font-semibold">Boliche Don Miranda · Villa Mercedes</p>
                <p className="mt-2 text-sm text-zinc-400">Encontranos fácil con el mapa del evento.</p>
                <a
                  href="https://maps.app.goo.gl/9E5Skh7cM6tEuE2E7"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#DCC08A] transition hover:text-[#f8d77f]"
                >
                  Cómo llegar
                </a>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-[#111]/80 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-[#DCC08A]/80">Cupos</p>
                <p className="mt-3 text-lg font-semibold">Limitados</p>
              </div>
            </div>
          </article>

          <aside className="rounded-[2rem] border border-[#DCC08A]/15 bg-gradient-to-br from-[#110f0d]/90 to-[#151314]/95 p-8 text-white shadow-[0_35px_70px_-40px_rgba(0,0,0,0.9)] sm:p-10">
            <div className="rounded-[1.75rem] border border-white/10 bg-[#090909]/95 p-6 shadow-2xl shadow-black/40">
              <p className="text-sm uppercase tracking-[0.35em] text-[#DCC08A]/80">Entrada anticipada</p>
              <p className="mt-3 text-3xl font-semibold">$8.000</p>
              <p className="mt-2 text-sm text-zinc-400">Precio válido hasta agotar stock</p>

              <div className="mt-8 space-y-6">
                <p className="rounded-2xl border border-white/10 bg-[#111]/90 px-5 py-4 text-sm text-zinc-300">
                  Ya compraste tu entrada? Compartí el comprobante por WhatsApp para validar tu ingreso y reservar tu mesa.
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <a
                    href="https://wa.me/5492657236112?text=Hola%2C%20quiero%20validar%20mi%20entrada%20y%20reservar%20mi%20mesa."
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Enviar comprobante por WhatsApp para validar ingreso y reservar mesa"
                    className="inline-flex min-h-[3.5rem] items-center justify-center rounded-full bg-[#DCC08A] px-6 py-4 text-center text-sm font-semibold uppercase tracking-[0.18em] text-black shadow-xl shadow-[#DCC08A]/20 transition hover:bg-[#f8d77f]"
                  >
                    Enviar comprobante
                  </a>
                  <a
                    href="https://mpago.la/2VbdUNd"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-[3.5rem] items-center justify-center rounded-full border border-white/10 bg-black/70 px-6 py-4 text-center text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:border-[#DCC08A] hover:text-[#DCC08A]"
                  >
                    Comprar entrada
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
