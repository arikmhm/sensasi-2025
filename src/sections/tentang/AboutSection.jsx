import patternLeft from "../../assets/images/pattern/pattern-about-about-left.svg";
import patternRight from "../../assets/images/pattern/pattern-about-about-right.svg";

const AboutSection = () => {
  return (
    <section className="relative bg-base py-20 px-6 overflow-hidden ">
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
        className="absolute hidden  md:top-16 bottom-0 right-0 md:right-0 w-32 md:w-80 transform md:rotate-0 rotate-90"
      />

      {/* Konten utama */}
      <div className="max-w-6xl mx-auto text-center mt-16 md:mt-48">
        <h2 className="text-2xl md:text-5xl font-heading font-semibold text-accent leading-tight">
          Seminar Nasional Sistem Informasi Dan Call For Paper (SENSASI 2025)
        </h2>
        <p className="mt-8  md:text-xl text-secondary text-justify">
          Seminar Nasional Sistem Informasi Dan Call For Paper (SENSASI 2025)
          merupakan forum ilmiah yang diselenggarakan oleh Himpunan Mahasiswa
          Program Studi Sistem Informasi Universitas Dian Nuswantoro. Kegiatan
          ini mempertemukan para akademisi, peneliti, mahasiswa, dan praktisi
          industri untuk berbagi pengetahuan, hasil riset, serta pengalaman
          dalam pengembangan dan penerapan teknologi informasi di berbagai
          sektor. Dengan mengusung tema{" "}
          <strong>
            “Transformasi Digital: Ekosistem dan Daya Saing Industri 4.0”
          </strong>{" "}
          , dilaksanakan pada Sabtu, 21 Juni 2025 di Auditorium H7 Universitas
          Dian Nuswantoro.
        </p>{" "}
        <br />
        <p className="mt-6  md:text-xl text-secondary text-justify">
          Seminar ini bertujuan untuk menggali solusi dan tren terbaru yang
          dapat mendukung percepatan digitalisasi di berbagai sektor. Melalui
          seminar dan sesi Call for Paper ini, diharapkan para peserta dapat
          memperoleh wawasan yang lebih luas mengenai peran teknologi dalam
          meningkatkan daya saing industri serta menjalin kolaborasi dalam
          mengembangkan ekosistem digital yang inklusif dan berkelanjutan.
        </p>
        <a
          href="https://drive.google.com/drive/folders/1Sdmvt8olvStCPGZ7nQ0Qzh-NDUmOt5eP"
          className="inline-block mt-8 bg-accent text-white text-lg font-semibold py-3 px-6 rounded-xl hover:bg-primary-dark transition duration-300"
          target="_blank"
        >
          Download Panduan
        </a>
      </div>
    </section>
  );
};

export default AboutSection;
