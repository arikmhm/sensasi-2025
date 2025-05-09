import About from "../sections/beranda/About";
import EventSection from "../sections/beranda/EventSection";
import Hero from "../sections/beranda/Hero";
import ProgramSection from "../sections/beranda/ProgramSection";
import SeminarTopicSection from "../sections/beranda/SeminarTopicSection";
import SpeakerSection from "../sections/beranda/SpeakerSection";
import SponsorMediaSection from "../sections/beranda/SponsorMediaSection";

const Home = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <SeminarTopicSection />
      <SpeakerSection />
      <EventSection />
      <ProgramSection />
      <SponsorMediaSection />
    </main>
  );
};

export default Home;
