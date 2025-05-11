const JournalTemplateSection = () => {
  return (
    <section className="relative bg-accent py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Judul & Tombol */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h2 className="text-2xl md:text-4xl font-semibold text-white">
            Format / Template Jurnal
          </h2>
          <a
            href="https://drive.google.com/drive/folders/1Sdmvt8olvStCPGZ7nQ0Qzh-NDUmOt5eP"
            target="_blank"
            className="bg-accent-2 text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition duration-300 text-sm md:text-base"
          >
            Download Template
          </a>
        </div>

        {/* Deskripsi */}
        <p className=" text-justify leading-relaxed text-base md:text-lg">
          Naskah yang dikirimkan harus merupakan karya asli dan belum pernah
          dipublikasikan ataupun sedang dalam proses peninjauan di forum atau
          penerbit lain selama masih dalam tahap evaluasi oleh SENSASI 2025.
          Setiap naskah yang diterima akan melalui proses review sejawat (single
          blind review) dengan penilaian yang berfokus pada aspek keaslian,
          kualitas teknis, serta kejelasan penyajian.
        </p>
      </div>
    </section>
  );
};

export default JournalTemplateSection;
