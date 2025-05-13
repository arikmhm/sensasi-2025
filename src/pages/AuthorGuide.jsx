import JournalTemplateSection from "../sections/panduanPenulis/JournalTemplateSection";
import RegistrationFlowSection from "../sections/panduanPenulis/RegistrationFlowSection";
import TimelineSection from "../sections/panduanPenulis/TimelineSection";

const AuthorGuide = () => {
  return (
    <main className="min-h-screen">
      <TimelineSection />
      <JournalTemplateSection />
      <RegistrationFlowSection />
    </main>
  );
};

export default AuthorGuide;
