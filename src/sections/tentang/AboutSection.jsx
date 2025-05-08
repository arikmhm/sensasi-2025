import patternLeft from "../../assets/images/pattern/pattern-about-about-left.svg";
import patternRight from "../../assets/images/pattern/pattern-about-about-right.svg";

const AboutSection = () => {
  return (
    <section className="relative bg-base py-20 px-6 overflow-hidden min-h-screen">
      {/* Pattern kiri bawah */}
      <img
        src={patternLeft}
        alt=""
        className="absolute top-16 left-0 w-32 md:w-80"
      />
      {/* Pattern kanan bawah */}
      <img
        src={patternRight}
        alt=""
        className="absolute md:top-16 bottom-0 right-0 md:right-0 w-32 md:w-80 transform md:rotate-0 rotate-90"
      />

      {/* Konten utama */}
      <div className="max-w-6xl mx-auto text-center relative z-10 mt-80">
        <h2 className="text-4xl md:text-8xl font-heading font-semibold text-accent leading-tight">
          Call for Paper
        </h2>
        <p className="mt-6 text-base md:text-2xl text-secondary">
          Makalah yang dikirimkan diharapkan selaras dengan tema utama
          konferensi dan mencerminkan perkembangan terbaru dalam teori,
          pendekatan metodologis, maupun implementasi praktis. Topik-topik yang
          dapat diangkat meliputi, namun tidak terbatas pada, bidang-bidang
          teknis berikut ini
        </p>

        <a
          href="/dokumen/panduan-call-for-paper.pdf"
          download
          className="inline-block mt-8 bg-accent text-white text-lg font-semibold py-3 px-6 rounded-xl hover:bg-primary-dark transition duration-300"
        >
          Download Panduan
        </a>
      </div>
    </section>
  );
};

export default AboutSection;
