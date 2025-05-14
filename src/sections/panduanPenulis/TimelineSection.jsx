import timeline from "../../data/timeline";
import patternLeft from "../../assets/images/pattern/pattern-about-about-left.svg";
import patternRight from "../../assets/images/pattern/pattern-about-about-right.svg";

const TimelineSection = () => {
  return (
    <section className="relative bg-base py-20 px-6">
      {/* Pattern pojok kanan bawah */}
      {/* <img
        src={patternLeft}
        alt=""
        className="absolute top-16 left-0 w-24 md:w-80"
      /> */}
      {/* Pattern kanan bawah */}
      {/* <img
        src={patternRight}
        alt=""
        className="absolute md:top-16 bottom-0 right-0 md:right-0 w-24 md:w-80 transform md:rotate-0 rotate-90"
      /> */}

      {/* Judul */}
      <div className="max-w-6xl mx-auto mb-12 md:mt-64 mt-24">
        <h2 className="text-accent text-2xl md:text-4xl font-medium mb-4 md:text-center text-left ">
          Tanggal Penting
        </h2>
      </div>

      {/* Timeline */}
      <div className="max-w-6xl mx-auto">
        <ul>
          {timeline.map((cat, index) => (
            <li
              key={index}
              className={`relative flex items-start gap-6 pb-10 ${
                index !== timeline.length - 1
                  ? "before:absolute before:left-[6.3px] before:top-4 before:h-full before:w-[1px] before:border-2 before:border-dashed before:border-primary "
                  : ""
              }`}
            >
              {/* Titik */}
              <div className="relative z-10 mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  className="fill-primary"
                  viewBox="0 0 32 32"
                >
                  <circle cx="8" cy="8" r="8" />
                </svg>
              </div>

              {/* Konten kategori */}
              <div>
                <h3 className="text-lg md:text-xl font-medium text-base mb-2 py-2 px-4 bg-accent p-2 rounded-lg inline-block ">
                  {cat.title}
                </h3>
                <ul className="list-none text-black/80 text-sm md:text-xl md:text-black/80 space-y-1 ">
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

export default TimelineSection;
