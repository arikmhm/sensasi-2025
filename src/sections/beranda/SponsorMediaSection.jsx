import { mediaPartners, sponsors } from "../../data/partnersData";

const SponsorMediaSection = () => {
  //   console.log("sponsor", sponsors);
  //   console.log("media", mediaPartners);
  return (
    <section className="bg-base py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* SPONSOR */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-accent-2 mb-8">
            Sponsor
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center">
            {sponsors.map((sponsor, index) => (
              <img
                key={index}
                src={sponsor.logo}
                alt={sponsor.name}
                className="h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            ))}
          </div>
        </div>

        {/* MEDIA PARTNER */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-accent-2 mb-8">
            Media Partner
          </h2>
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-horizontal gap-16 items-center whitespace-nowrap">
              {mediaPartners.map((media, index) => (
                <img
                  key={index}
                  src={media.logo}
                  alt={media.name}
                  className="h-14 md:h-16 object-contain"
                />
              ))}
              {/* Duplicate to create a seamless loop */}
              {mediaPartners.map((media, index) => (
                <img
                  key={`loop-${index}`}
                  src={media.logo}
                  alt={media.name}
                  className="h-14 md:h-16 object-contain"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorMediaSection;
