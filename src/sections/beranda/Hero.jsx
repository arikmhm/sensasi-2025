import BgHero from "../../assets/images/bg-hero.svg";
import HeroImage from "../../assets/images/hero-image.svg";
import ArrowImage from "../../assets/images/arrow.svg";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center text-white flex items-center"
      style={{
        backgroundImage: `url(${BgHero})`,
      }}
    >
      {/* konten */}
      <div className="relative z-10 min-h-screen h-full w-full mx-auto  grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Teks di kiri */}
        <div className="flex flex-col justify-center h-full px-4 md:px-16 lg:px-24">
          <div className="">
            <h1 className="text-4xl md:text-8xl font-heading font-bold  leading-tight">
              <span className="text-accent">SENSASI</span>{" "}
              <span className="text-accent-2">2025</span>
            </h1>
            <p className="mt-4 mb-8 text-lg font-medium md:text-4xl text-secondary">
              Seminar Nasional Sistem Informasi Dan Call For Paper
            </p>
            <a href="#" className="cta">
              <button className="mt-8 text-2xl bg-accent text-white py-4 px-10 rounded-xl hover:bg-primary-dark transition duration-300">
                Daftar Sekarang{" "}
              </button>
            </a>
          </div>
          <div className="">
            <img src={ArrowImage} alt="arrow iamge" className="w-full" />
          </div>
        </div>

        {/* Gambar di kanan */}
        <div className="flex justify-end h-full w-full pt-16">
          <img
            src={HeroImage}
            alt="Ilustrasi Seminar"
            className="h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
