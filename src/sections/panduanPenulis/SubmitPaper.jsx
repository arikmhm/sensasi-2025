const SubmitPaper = () => {
  return (
    <section className="relative bg-base py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Judul & Tombol */}
        <div className="flex flex-col items-start gap-4 ">
          <h2 className="text-2xl md:text-4xl font-semibold text-primary">
            Pengumpulan Naskah
          </h2>
          <a
            href="https://forms.gle/q3TETzfm2neup7mK8"
            target="_blank"
            className="bg-accent-2 text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition duration-300 text-sm md:text-primary-dark "
          >
            Upload Berkas
          </a>
        </div>

        {/* Deskripsi */}
        <p className=" text-justify leading-relaxed text-black/80 md:text-lg">
          Peserta dapat mengirimkan naskah dalam bentuk pdf. Naskah yang lolos
          akan diterbitkan dalam prosiding SENSASI 2025 dengan ketentuan sudah
          melakukan pembayaran sebesar{" "}
          <i className="font-semibold">Rp. 100.000</i>. Jika ingin melakukan
          cetak dalam bentuk fisik, peserta dapat melakukan pembayaran tambahan
          sebesar <i className="font-semibold">Rp. 150.000</i>.
        </p>
      </div>
    </section>
  );
};

export default SubmitPaper;
