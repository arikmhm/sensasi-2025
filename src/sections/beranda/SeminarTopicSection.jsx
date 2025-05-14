import topicImg from "../../assets/images/seminar-topic.png";

const SeminarTopicSection = () => {
  return (
    <section className="bg-primary py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Judul */}
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-base mb-12">
          Seminar Nasional Sistem Informasi Dan Call For Paper (SENSASI 2025)
        </h2>

        {/* Konten dua kolom */}
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Kiri: Deskripsi */}
          <div className="md:w-1/2 w-full text-justify text-base leading-relaxed text-lg">
            <p>
              Seminar Nasional Sistem Informasi Dan Call For Paper (SENSASI
              2025) merupakan forum ilmiah yang diselenggarakan oleh Himpunan
              Mahasiswa Program Studi Sistem Informasi Universitas Dian
              Nuswantoro. Kegiatan ini mempertemukan para akademisi, peneliti,
              mahasiswa, dan praktisi industri untuk berbagi pengetahuan, hasil
              riset, serta pengalaman dalam pengembangan dan penerapan teknologi
              informasi di berbagai sektor. Dengan mengusung tema{" "}
              <strong>
                “Transformasi Digital: Ekosistem dan Daya Saing Industri 4.0”
              </strong>{" "}
              , , dilaksanakan pada Kamis, 14 Juni 2025 di aula gedung E3
              Universitas Dian Nuswantoro.
            </p>
            <br />
            <p>
              Seminar ini bertujuan untuk menggali solusi dan tren terbaru yang
              dapat mendukung percepatan digitalisasi di berbagai sektor.
              Melalui seminar dan sesi Call for Paper ini, diharapkan para
              peserta dapat memperoleh wawasan yang lebih luas mengenai peran
              teknologi dalam meningkatkan daya saing industri serta menjalin
              kolaborasi dalam mengembangkan ekosistem digital yang inklusif dan
              berkelanjutan. Kegiatan ini akan diikuti oleh dari berbagai
              akademisi, peneliti, mahasiswa dengan target 200 peserta
            </p>
          </div>

          {/* Kanan: Gambar */}
          <div className="md:w-1/2 w-full">
            <img
              src={topicImg}
              alt="Tema Seminar"
              className=" w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeminarTopicSection;
