import About from "../sections/beranda/About";
import EventSection from "../sections/beranda/EventSection";
import Hero from "../sections/beranda/Hero";
import ProgramSection from "../sections/beranda/ProgramSection";
import SpeakerSection from "../sections/beranda/SpeakerSection";

const Home = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <SpeakerSection />
      <EventSection />
      <ProgramSection />
    </main>
  );
};

export default Home;
