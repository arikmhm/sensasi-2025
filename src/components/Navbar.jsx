import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-base shadow-sm fixed w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-semibold text-Charcoal font-pf">
          Sensasi 2025
        </Link>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-6 bg-Charcoal mb-1.5 transition-all ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`h-0.5 w-6 bg-Charcoal mb-1.5 transition-all ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`h-0.5 w-6 bg-Charcoal transition-all ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-secondary hover:font-semibold">
                Beranda
              </Link>
            </li>
            <li>
              <Link
                to="/tentang"
                className="text-secondary hover:font-semibold"
              >
                Tentang
              </Link>
            </li>

            <li>
              <Link
                to="/panduan-penulis"
                className="text-secondary hover:font-semibold"
              >
                Panduan Penulis
              </Link>
            </li>
            <li>
              <Link to="/" className="text-secondary hover:font-semibold">
                Acara
              </Link>
            </li>
            <li>
              <Link to="/" className="text-secondary hover:font-semibold">
                Registrasi
              </Link>
            </li>
            <li>
              <Link to="/" className="text-secondary hover:font-semibold">
                Prosiding
              </Link>
            </li>
            <li>
              <Link to="/" className="text-secondary hover:font-semibold">
                Kontak
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden w-full bg-Champagne border-t border-gray-200">
          <ul className="py-2 px-4">
            <li className="py-2">
              <Link
                to="/"
                className="block text-secondary hover:font-semibold"
                onClick={toggleMenu}
              >
                Beranda
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/tentang"
                className="block text-secondary hover:font-semibold"
                onClick={toggleMenu}
              >
                Tentang
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/panduan-penulis"
                className="block text-secondary hover:font-semibold"
                onClick={toggleMenu}
              >
                Panduan Penulis
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/"
                className="block text-secondary hover:font-semibold"
                onClick={toggleMenu}
              >
                FAQ
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/"
                className="block text-secondary hover:font-semibold"
                onClick={toggleMenu}
              >
                Kontak
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
