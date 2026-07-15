import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SpotifySection from "../components/SpotifySection";
import VideosSection from "../components/VideosSection";
import ShowsSection from "../components/ShowsSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-[#050505] text-white pt-24">
        <Hero />
        <SpotifySection />
        <ShowsSection />
        <VideosSection />
        <ContactSection />
      </main>
    </>
  );
}
