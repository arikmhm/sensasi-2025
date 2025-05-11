import locationImg from "../../assets/images/lokasi.png";
import PatternRight from "../../assets/images/pattern/pattern-home-about-right.svg";

const LocationPage = () => {
  return (
    <section className="relative bg-secondary py-16 px-6 min-h-screen flex items-center">
      {/* pattern */}
      <img
        src={PatternRight}
        alt="Pattern kanan"
        className="absolute top-16 right-0 w-28 md:w-64 transform rotate-270"
      />
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-semibold text-center text-base mb-12 mt-8 md:mt-0">
          Lokasi Acara
        </h2>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Kiri: Gambar + deskripsi */}
          <div className="md:w-1/2 w-full space-y-4">
            <img
              src={locationImg}
              alt="Lokasi Acara"
              className=" w-full h-[300px] md:min-h-[490px] object-cover"
            />
            <p className="text-justify text-sm md:text-base text-base leading-relaxed">
              Acara ini akan dilaksanakan di <strong>Auditorium H.7 </strong>,
              Universitas Dian Nuswantoro, Semarang. Lokasi ini mudah diakses
              dan dilengkapi dengan fasilitas lengkap untuk mendukung kenyamanan
              peserta.
            </p>
          </div>

          {/* Kanan: Embed Maps */}
          <div className="md:w-1/2 w-full">
            <div className="w-full h-[300px] md:min-h-[490px] ">
              <iframe
                title="Lokasi Acara"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d990.0554981851647!2d110.40870367046676!3d-6.98310888696048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b4ece9d5505%3A0x8365d13199281b8b!2sGedung%20H%20Udinus!5e0!3m2!1sid!2sid!4v1746764205160!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full shadow-md"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationPage;
