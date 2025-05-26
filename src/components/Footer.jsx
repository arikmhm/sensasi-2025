import patternLeftFooter from "../assets/images/pattern/pattern-footer-left.svg";
import patternRightFooter from "../assets/images/pattern/pattern-footer-right.svg";
import logoFooter from "../assets/images/logo.svg";

const Footer = () => {
  return (
    <footer className="relative bg-base text-primary px-6 py-12 overflow-hidden">
      {/* Pattern pojok kiri bawah */}
      <img
        src={patternLeftFooter}
        alt=""
        className="absolute bottom-0 left-0 w-16 md:w-24"
      />
      <img
        src={patternRightFooter}
        alt=""
        className="absolute bottom-0 right-0 w-16 md:w-24"
      />

      {/* Konten utama */}
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Baris atas: logo dan kontak */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          {/* Logo */}
          <img src={logoFooter} alt="Logo Sensasi" className="h-12 md:h-16" />

          {/* Informasi kontak */}
          <div className="text-sm md:text-primary space-y-2 text-primary text-left">
            <p>
              Email:{" "}
              <a href="mailto:hmsisfofik@gmail.com" className="underline">
                hmsisfofik@gmail.com
              </a>
            </p>
            <p>Telepon: +62 812-2807-4509 (Rizza)</p>
            <p>
              Alamat: Jl. Sadewa 2 No.8, Pendrikan Kidul, Kec. Semarang Tengah
              Kota Semarang, Jawa Tengah 50131
            </p>
          </div>
        </div>

        {/* Garis pembatas */}
        <hr className="my-6 border-primary" />

        {/* Copyright */}
        <p className="text-sm text-primary text-center">
          &copy; {new Date().getFullYear()} Seminar Nasional Sistem Informasi –
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
