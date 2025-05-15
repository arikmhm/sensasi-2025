import { Link } from "react-router-dom";

const TicketCard = ({ title, description, link }) => {
  return (
    <div className="bg-base shadow-md rounded-xl p-6 flex flex-col items-center justify-between w-full md:max-w-[400px] min-h-[500px] md:min-h-[600px] border border-gray-200">
      <div className="flex flex-col items-center w-full">
        <h3 className="text-3xl font-semibold text-center text-primary ">
          {title}
        </h3>

        <div className="space-y-4 text-primary text-sm  text-start w-3/4">
          {description.map((group, idx) => (
            <div key={idx}>
              <p className="font-light text-md text-primary mb-1 text-center">
                {group.label}
              </p>
              <p className="text-5xl font-bold mb-2 text-center relative py-4 leading-none -left-18 z-10 bg-accent w-60 text-base">
                {group.price}
              </p>
              <p className="text-xl font-medium text-primary mb-2 mt-6">
                Benefit yang didapat:
              </p>
              <ul className="list-disc list-inside space-y-1 text-lg font-medium">
                {group.benefits.map((benefit, bIdx) => (
                  <li key={bIdx}>{benefit}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Link
        to={link}
        className="mt-6  bg-primary text-base text-sm font-semibold px-6 py-2 rounded hover:bg-primary/90 transition w-full text-center"
        target="_blank"
      >
        Daftar
      </Link>
    </div>
  );
};

export default TicketCard;
