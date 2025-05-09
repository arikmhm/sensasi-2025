import PatternLeft from "../../assets/images/pattern/pattern-home-about-left.svg";
import PatternRight from "../../assets/images/pattern/pattern-home-about-right.svg";

const About = () => {
  return (
    <section className="relative bg-secondary py-20 px-6">
      {/* Konten utama */}
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-base">
          Seminar Nasional Sistem Informasi Dan Call For Paper (SENSASI 2025)
        </h2>
        <p className="mt-4 text-lg text-base text-justify leading-relaxed">
          Seminar Nasional Sistem Informasi Dan Call For Paper (SENSASI 2025)
          merupakan forum ilmiah yang diselenggarakan oleh Himpunan Mahasiswa
          Program Studi Sistem Informasi Universitas Dian Nuswantoro. Kegiatan
          ini mempertemukan para akademisi, peneliti, mahasiswa, dan praktisi
          industri untuk berbagi pengetahuan, hasil riset, serta pengalaman
          dalam pengembangan dan penerapan teknologi informasi di berbagai
          sektor. Melalui sesi seminar, presentasi makalah ilmiah, dan diskusi
          panel, SENSASI 2025 mengangkat isu-isu terkini seperti transformasi
          digital, big data, keamanan siber, serta inovasi dalam sistem
          informasi. Kegiatan ini menjadi wadah strategis untuk mendorong
          kolaborasi dan kontribusi nyata dalam pengembangan ekosistem digital
          yang inklusif dan berkelanjutan. Dengan mengusung tema "Transformasi
          Digital: Ekosistem dan Daya Saing Industri 4.0", dilaksanakan pada
          Kamis, 14 Juni 2025 di aula gedung E3 Universitas Dian Nuswantoro.
          Seminar ini bertujuan untuk menggali solusi dan tren terbaru yang
          dapat mendukung percepatan digitalisasi di berbagai sektor. Melalui
          seminar dan sesi Call for Paper ini, diharapkan para peserta dapat
          memperoleh wawasan yang lebih luas mengenai peran teknologi dalam
          meningkatkan daya saing industri serta menjalin kolaborasi dalam
          mengembangkan ekosistem digital yang inklusif dan berkelanjutan.
          Kegiatan ini akan diikuti oleh dari berbagai akademisi, peneliti,
          mahasiswa dengan target 200 peserta
        </p>
      </div>

      {/* Pattern kiri bawah */}
      <img
        src={PatternLeft}
        alt="Pattern kiri"
        className="absolute bottom-0 left-0 w-28 md:w-40"
      />

      {/* Pattern kanan bawah */}
      <img
        src={PatternRight}
        alt="Pattern kanan"
        className="absolute bottom-0 right-0 w-28 md:w-40"
      />
    </section>
  );
};

export default About;
