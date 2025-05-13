import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react"; // pastikan kamu sudah install lucide-react
import Logo from "../assets/images/logo.svg";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path) => location.pathname === path;

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        event.target.id !== "acara-button"
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const menuRef = useRef(null); // untuk dropdown mobile
  const buttonRef = useRef(null); // untuk tombol hamburger
  // Tutup menu jika klik di luar
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="bg-base shadow-sm fixed w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-semibold text-Charcoal font-pf">
          <img src={Logo} alt="SENSASI 2025" className="max-h-12" />
        </Link>

        {/* Hamburger for mobile */}
        <button
          ref={buttonRef}
          className="md:hidden flex flex-col justify-center items-center "
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-6 bg-primary mb-1.5 transition-all ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`h-0.5 w-6 bg-primary mb-1.5 transition-all ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`h-0.5 w-6 bg-primary transition-all ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 items-center relative">
            <li>
              <Link
                to="/"
                className={`hover:text-primary transition ${
                  isActive("/")
                    ? "text-primary font-semibold"
                    : "text-secondary"
                }`}
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                to="/tentang"
                className={`hover:text-primary transition ${
                  isActive("/tentang")
                    ? "text-primary font-semibold"
                    : "text-secondary"
                }`}
              >
                Tentang
              </Link>
            </li>
            <li>
              <Link
                to="/panduan-penulis"
                className={`hover:text-primary transition ${
                  isActive("/panduan-penulis")
                    ? "text-primary font-semibold"
                    : "text-secondary"
                }`}
              >
                Panduan Penulis
              </Link>
            </li>

            {/* Dropdown Acara */}
            <li className="relative">
              <button
                id="acara-button"
                className="flex items-center gap-1 text-secondary hover:text-primary transition"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Acara
                <ChevronDown size={16} />
              </button>

              {isDropdownOpen && (
                <ul
                  ref={dropdownRef}
                  className={`absolute bg-white overflow-hidden transition-all duration-300 ease-in-out origin-top ${
                    isDropdownOpen
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <li>
                    <Link
                      to="/acara/tempat"
                      className="block px-4 py-2 text-sm hover:bg-gray-100 text-gray-700"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Tempat
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/acara/speaker"
                      className="block px-4 py-2 text-sm hover:bg-gray-100 text-gray-700"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Speaker
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/acara/rundown"
                      className="block px-4 py-2 text-sm hover:bg-gray-100 text-gray-700"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Rundown
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* <li>
              <Link
                to="/prosiding"
                className={`hover:text-primary transition ${
                  isActive("/prosiding")
                    ? "text-primary font-semibold"
                    : "text-secondary"
                }`}
              >
                Prosiding
              </Link>
            </li> */}

            <li>
              <Link
                to="/registrasi"
                className="hover:bg-secondary transition bg-primary text-white rounded-lg px-6 py-2"
              >
                Daftar
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          ref={menuRef}
          className="md:hidden w-full bg-base border-t border-base flex flex-col items-end text-end font-medium text-lg"
        >
          <ul className="py-2 px-4">
            <li className="py-2">
              <Link
                to="/"
                className="block text-black/80 hover:font-semibold"
                onClick={toggleMenu}
              >
                Beranda
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/tentang"
                className="block text-black/80 hover:font-semibold"
                onClick={toggleMenu}
              >
                Tentang
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/panduan-penulis"
                className="block text-black/80 hover:font-semibold"
                onClick={toggleMenu}
              >
                Panduan Penulis
              </Link>
            </li>
            <li className=" py-2 inline-block">
              <button
                id="acara-button"
                className="flex items-center  gap-1 text-secondary hover:text-primary transition"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Acara
                <ChevronDown size={16} />
              </button>

              {isDropdownOpen && (
                <ul
                  ref={dropdownRef}
                  className={` bg-white overflow-hidden transition-all duration-300 ease-in-out origin-top ${
                    isDropdownOpen
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <li>
                    <Link
                      to="/acara/tempat"
                      className="block px-4 py-2 text-sm hover:bg-gray-100 text-gray-700"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Tempat
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/acara/speaker"
                      className="block px-4 py-2 text-sm hover:bg-gray-100 text-gray-700"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Speaker
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/acara/rundown"
                      className="block px-4 py-2 text-sm hover:bg-gray-100 text-gray-700"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Rundown
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            {/* <li className="py-2">
              <Link
                to="/"
                className="block text-black/80 hover:font-semibold"
                onClick={toggleMenu}
              >
                Prosiding
              </Link>
            </li> */}
            <li className="py-2">
              <Link
                to="/registrasi"
                className="inline-block text-base hover:font-semibold bg-primary rounded-lg px-6 py-1 "
                onClick={toggleMenu}
              >
                Daftar
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
