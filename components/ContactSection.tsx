import Image from 'next/image';

export default function ContactSection() {
  return (
    <section id="contacto" className="bg-[#040404] text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-[0.65rem] uppercase tracking-[0.35em] text-[#DCC08A]/80 sm:text-sm">
          Contacto
        </p>
        <h2 className="mt-4 text-4xl font-bold sm:text-5xl">Contrataciones y prensa</h2>
        <p className="mx-auto mt-6 max-w-2xl text-sm text-zinc-400 sm:text-base">
          Para shows o consultas de prensa, escribinos y armamos juntos la experiencia.
        </p>

        <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.8)] sm:p-10">
          <p className="text-lg font-semibold text-white">RG Manager</p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://wa.me/5492657236112"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#DCC08A] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-[#b69d5e]"
            >
              <Image src="/images/whatsapp.png" alt="WhatsApp" width={20} height={20} />
              WhatsApp
            </a>
          </div>

          <div className="mt-10 space-y-4 text-sm text-zinc-300">
            <p className="font-semibold text-white">Seguinos</p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-white/80">
              <a href="https://www.facebook.com/share/1EFZMCz3p3/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm transition hover:border-[#DCC08A] hover:text-[#DCC08A]">
                <Image src="/images/facebook.png" alt="Facebook" width={20} height={20} />
                Facebook
              </a>
              <a href="https://www.instagram.com/puentev.vm?igsh=MzZhMHdoeGkyc2Ru" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm transition hover:border-[#DCC08A] hover:text-[#DCC08A]">
                <Image src="/images/instagram.png" alt="Instagram" width={20} height={20} />
                Instagram
              </a>
              <a href="https://www.youtube.com/@puentequintooficial" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm transition hover:border-[#DCC08A] hover:text-[#DCC08A]">
                <Image src="/images/youtube.png" alt="YouTube" width={20} height={20} />
                YouTube
              </a>
              <a href="https://open.spotify.com/intl-es/album/5xndVxhHlDhm6TpcLIkesu?si=tRjhc26XQ5WB3HLf2n0BRw" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm transition hover:border-[#DCC08A] hover:text-[#DCC08A]">
                <Image src="/images/spotify.png" alt="Spotify" width={20} height={20} />
                Spotify
              </a>
              <a href="https://on.soundcloud.com/CRoqFIgveWs879apOI" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm transition hover:border-[#DCC08A] hover:text-[#DCC08A]">
                <Image src="/images/soundcloud.png" alt="SoundCloud" width={20} height={20} />
                SoundCloud
              </a>
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