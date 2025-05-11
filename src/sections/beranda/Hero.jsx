import BgHero from "../../assets/images/bg-hero.svg";
import HeroImage from "../../assets/images/img-hero.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center text-white flex items-center"
      style={{
        backgroundImage: `url(${BgHero})`,
      }}
    >
      <div className="relative z-10 w-full h-full min-h-screen flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Teks kiri */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start relative px-8 md:px-48 pb-12 md:py-0">
          {/* Arrow */}

          <h1 className="text-4xl md:text-8xl font-heading font-bold leading-tight">
            <span className="text-accent">SENSASI</span>{" "}
            <span className="text-accent-2">2025</span>
          </h1>
          <p className="mt-4 mb-8 text-lg font-medium md:text-4xl text-secondary">
            Seminar Nasional Sistem Informasi Dan Call For Paper
          </p>
          <Link to="/registrasi">
            <button className="mt-4 text-xl md:text-2xl bg-accent text-white py-4 px-8 rounded-xl hover:bg-primary-dark transition duration-300">
              Daftar Sekarang
            </button>
          </Link>
        </div>

        {/* Gambar kanan */}
        <div className="flex items-center justify-center md:justify-end h-full md:h-screen">
          <img
            src={HeroImage}
            alt="Ilustrasi Seminar"
            className="h-full object-contain pt-16"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
