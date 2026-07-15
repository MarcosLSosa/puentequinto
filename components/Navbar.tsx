export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/95 backdrop-blur-xl text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <img
            src="/images/logo.jpg"
            alt="Puente Quinto logo"
            className="h-14 w-14 rounded-full border border-white/10 object-cover"
          />
          <div>
            <span className="text-xs uppercase tracking-[0.35em] text-[#DCC08A]">
              Puente Quinto
            </span>
            <p className="text-sm text-zinc-400">Soul · Funk · Baladas</p>
          </div>
        </div>

        <div className="flex items-center gap-8 text-sm font-medium uppercase tracking-[0.18em] text-white/80">
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