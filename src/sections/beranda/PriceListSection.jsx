import PaymentInfo from "../../components/PaymentInfo";
import TicketCard from "../../components/TicketCard";
import tickets from "../../data/tickets";

const PriceListSection = () => {
  return (
    <section className="bg-secondary py-20 px-6 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-heading font-bold text-base">
          Segera Daftar dan Dapatkan Tiket Anda!
        </h2>
        <p className="text-xl mt-8 text-base/80 mb-8">
          Pilih jenis tiket sesuai kebutuhan Anda. Tersedia tiket untuk hanya
          seminar, atau bundling seminar dan presentasi paper.
        </p>

        {/* Card Tiket */}
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {tickets.map((ticket, idx) => (
            <TicketCard key={idx} {...ticket} />
          ))}
        </div>

        {/* Catatan */}
        <PaymentInfo />
      </div>
    </section>
  );
};

export default PriceListSection;
