import JournalTemplateSection from "../sections/panduanPenulis/JournalTemplateSection";
import RegistrationFlowSection from "../sections/panduanPenulis/RegistrationFlowSection";
import SubmitPaper from "../sections/panduanPenulis/SubmitPaper";

const AuthorGuide = () => {
  return (
    <main className="min-h-screen">
      <RegistrationFlowSection />
      <SubmitPaper />
      <JournalTemplateSection />
    </main>
  );
};

export default AuthorGuide;
