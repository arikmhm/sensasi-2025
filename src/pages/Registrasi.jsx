import { Info } from "lucide-react";
import TicketCard from "../components/TicketCard";
import tickets from "../data/tickets";
import PaymentInfo from "../components/PaymentInfo";
import TicketCardBundling from "../components/TicketCardBundling";
import ticketsPromo from "../data/ticketsPromo";

const Registrasi = () => {
  return (
    <section className="min-h-screen bg-primary py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-semibold text-base mb-4 text-heading">
          REGISTRASI
        </h2>
        <p className="text-base mb-12 max-w-2xl mx-auto">
          Pilih jenis tiket sesuai kebutuhan Anda. Tersedia tiket untuk hanya
          seminar, atau bundling seminar dan presentasi paper.
        </p>

        {/* Card Tiket */}
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {tickets.map((ticket, idx) => (
            <TicketCard key={idx} {...ticket} />
          ))}
        </div>

        {/* Penawaran Harga */}
        <h3 className="text-3xl md:text-5xl font-semibold text-base mt-12 mb-4 text-heading my-12">
          Penawaran Harga Seminar Bundling{" "}
        </h3>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {ticketsPromo.map((ticket, idx) => (
            <TicketCardBundling key={idx} {...ticket} />
          ))}
        </div>
        {/* Catatan */}
        <PaymentInfo />
      </div>
    </section>
  );
};

export default Registrasi;
