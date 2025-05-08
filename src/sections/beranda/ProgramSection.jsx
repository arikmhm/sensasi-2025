import patternBottomLeft from "../../assets/images/pattern/pattern-home-about-left.svg";
import innerPattern from "../../assets/images/pattern/pattern-inner-top-left.svg";
import programImg1 from "../../assets/images/program/program-1.png";
import programImg2 from "../../assets/images/program/program-2.png";

const ProgramSection = () => {
  return (
    <section className="relative bg-secondary py-20 px-6 overflow-hidden">
      {/* Pattern pojok kiri bawah */}
      <img
        src={patternBottomLeft}
        alt=""
        className="absolute bottom-0 left-0 w-32 md:w-48"
      />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-48 items-center relative z-10">
        {/* Kolom Teks */}
        <div className="relative">
          {/* Elemen di pojok kiri atas kontainer teks */}
          <img
            src={innerPattern}
            alt=""
            className="absolute -bottom-24 md:-top-48 left-16 w-48 md:w-96"
          />

          <h2 className="text-3xl md:text-5xl font-heading font-bold text-base mb-6">
            PROGRAM KEGIATAN
          </h2>
          <p className="text-base text-lg leading-relaxed">
            Seminar Nasional Sistem Informasi dan Call for Paper (SENSASI 2025)
            menghadirkan rangkaian kegiatan yang dirancang untuk memperkaya
            wawasan, mendorong kolaborasi, serta memfasilitasi publikasi ilmiah.
          </p>
        </div>

        {/* Kolom Gambar */}
        <div className="space-y-6">
          <img
            src={programImg1}
            alt="Program 1"
            className="w-full rounded-xl shadow-md"
          />
          <img
            src={programImg2}
            alt="Program 2"
            className="w-full rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
