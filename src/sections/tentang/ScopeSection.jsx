import patternBottomRight from "../../assets/images/pattern/pattern-bottom-right.svg";
import decorateImage from "../../assets/images/decorate.png";
import categories from "../../data/categories";

const ScopeSection = () => {
  return (
    <section className="relative bg-primary py-20 px-6 min-h-screen">
      {/* Pattern pojok kanan bawah */}
      <img
        src={patternBottomRight}
        alt="Pattern"
        className="absolute bottom-0 right-0 w-24 md:w-32"
      />
      <img
        src={decorateImage}
        alt="Pattern"
        className="absolute md:bottom-1/4 bottom-1/4 right-0 w-32 md:w-120"
      />

      {/* Judul */}
      <div className="max-w-6xl mx-auto mb-12">
        <h2 className="text-base text-xl md:text-4xl font-semibold mb-4">
          Ruang Lingkup
        </h2>
      </div>

      {/* Timeline */}
      <div className="max-w-6xl mx-auto">
        <ul>
          {categories.map((cat, index) => (
            <li
              key={index}
              className={`relative flex items-start gap-6 pb-10 ${
                index !== categories.length - 1
                  ? "before:absolute before:left-[5.5px] before:top-4 before:h-full before:w-[1px] before:border-l before:border-dashed before:border-base"
                  : ""
              }`}
            >
              {/* Titik */}
              <div className="relative z-10 mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  className="fill-base"
                  viewBox="0 0 16 16"
                >
                  <circle cx="8" cy="8" r="8" />
                </svg>
              </div>

              {/* Konten kategori */}
              <div>
                <h3 className="text-lg md:text-2xl font-semibold text-base mb-2">
                  {cat.title}
                </h3>
                <ul className="list-disc list-inside text-base text-sm md:text-xl md:text-base space-y-1">
                  {cat.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ScopeSection;
