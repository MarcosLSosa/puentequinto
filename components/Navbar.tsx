export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/95 backdrop-blur-xl text-white">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <img
            src="/images/logo.jpg"
            alt="Puente Quinto logo"
            className="h-12 w-12 rounded-full border border-white/10 object-cover sm:h-14 sm:w-14"
          />
          <div>
            <span className="text-xs uppercase tracking-[0.35em] text-[#DCC08A]">
              Puente Quinto
            </span>
            <p className="text-sm text-zinc-400">Soul · Funk · Baladas</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium uppercase tracking-[0.18em] text-white/80 sm:justify-end sm:gap-8">
          <a href="#musica" className="transition hover:text-[#DCC08A]">
            #musica
          </a>
          <a href="#videos" className="transition hover:text-[#DCC08A]">
            #videos
          </a>
          <a href="#contacto" className="transition hover:text-[#DCC08A]">
            #contacto
          </a>
        </div>
      </div>
    </nav>
  );
}