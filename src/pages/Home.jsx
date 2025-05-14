import EventSection from "../sections/beranda/EventSection";
import Hero from "../sections/beranda/Hero";
import PriceListSection from "../sections/beranda/PriceListSection";
import SeminarTopicSection from "../sections/beranda/SeminarTopicSection";
import SpeakerSection from "../sections/beranda/SpeakerSection";
import SponsorMediaSection from "../sections/beranda/SponsorMediaSection";

const Home = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      {/* <About /> */}
      <SeminarTopicSection />
      <SpeakerSection />
      <EventSection />
      <PriceListSection />
      <SponsorMediaSection />
    </main>
  );
};

export default Home;
