import registrationFlow from "../../data/registrationFlow";

const RegistrationFlowSection = () => {
  return (
    <section className="relative bg-base py-20 px-6">
      {/* Judul */}
      <div className="max-w-6xl mx-auto mb-12 mt-24 md:mt-40">
        <h2 className="text-accent text-3xl md:text-5xl font-medium mb-4 md:text-center text-left">
          Alur Pendaftaran Call for Paper SENSASI 2025
        </h2>
      </div>

      {/* Timeline */}
      <div className="max-w-6xl mx-auto">
        <ul>
          {registrationFlow.map((step, index) => (
            <li
              key={index}
              className={`relative flex items-start gap-6 pb-10 ${
                index !== registrationFlow.length - 1
                  ? "before:absolute before:left-[6.3px] before:top-4 before:h-full before:w-[1px] before:border-2 before:border-dashed before:border-primary"
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

              {/* Konten */}
              <div>
                <h3 className="text-lg md:text-xl font-medium text-base mb-2 py-2 px-4 bg-accent p-2 rounded-lg inline-block">
                  {step.title}
                </h3>
                <ul className="list-none text-black/80 text-sm md:text-xl space-y-1">
                  {step.items.map((item, idx) => (
                    <li key={idx}>
                      {item.includes("http") ? (
                        <a
                          href={item}
                          className="text-primary underline break-words"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item}
                        </a>
                      ) : (
                        item
                      )}
                    </li>
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

export default RegistrationFlowSection;
