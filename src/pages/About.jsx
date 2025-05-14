import TimelineSection from "../sections/panduanPenulis/TimelineSection";
import AboutSection from "../sections/tentang/AboutSection";
import ScopeSection from "../sections/tentang/ScopeSection";

const About = () => {
  return (
    <main className="min-h-screen">
      <AboutSection />
      <TimelineSection />
      <ScopeSection />
    </main>
  );
};

export default About;
