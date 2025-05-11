import { Link } from "react-router-dom";

const TicketCard = ({ title, description, link }) => {
  return (
    <div className="bg-primary shadow-md rounded-xl p-6 flex flex-col items-center justify-between w-full md:max-w-[400px] min-h-[400px] md:min-h-[500px] border border-gray-200">
      <div className="flex flex-col items-center w-full">
        <h3 className="text-2xl font-semibold text-center text-base">
          {title}
        </h3>
        <hr className="border-t-2 border-dashed border-base w-3/4 my-4" />

        <div className="space-y-4 text-base text-sm  text-start w-3/4">
          {description.map((group, idx) => (
            <div key={idx}>
              <p className="font-medium text-2xl text-base mb-1">
                {group.label}
              </p>
              <p className="text-lg font-semibold mb-2">{group.price}</p>
              <p className="text-lg text-base mb-2 ">Benefit yang didapat:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
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
        className="mt-6 bg-base text-primary text-sm px-6 py-2 rounded hover:bg-base/90 transition"
        target="_blank"
      >
        Daftar Sekarang
      </Link>
    </div>
  );
};

export default TicketCard;
