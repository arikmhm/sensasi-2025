import SpeakerCard from "../../components/SpeakerCard";
import speakerData from "../../data/speakerData";

const SpeakerPage = () => {
  return (
    <section className="bg-accent py-20 px-6 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-base mb-12">
          PEMBICARA UTAMA
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {speakerData.map((speaker) => (
            <SpeakerCard
              key={speaker.id}
              image={speaker.image}
              name={speaker.name}
              position={speaker.position}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakerPage;
