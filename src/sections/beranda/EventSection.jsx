import CountdownCard from "../../components/CountdownCard";
import eventInfo from "../../data/eventInfo";

const EventSection = () => {
  return (
    <section className="bg-base py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-6xl font-heading font-bold text-primary">
          {eventInfo.name}
        </h2>
        <p className="text-3xl mt-8 text-secondary mb-8">
          {eventInfo.fullName}
        </p>

        <CountdownCard targetDate={eventInfo.date} />

        <div className="mt-16 text-primary text-lg">
          <p className="flex flex-wrap justify-center gap-x-2 gap-y-1">
            <span>08.00 WIB - Selesai</span>
            <span className="mx-1">|</span>
            <span>
              {new Date(eventInfo.date).toLocaleDateString("id-ID", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="mx-1">|</span>
            <span>{eventInfo.location}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default EventSection;
