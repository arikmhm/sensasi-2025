import { Link } from "react-router-dom";

const TicketCard = ({ title, description, link }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center justify-between w-full md:max-w-[400px] min-h-[400px] md:min-h-[500px] border border-gray-200">
      <div className="flex flex-col items-center w-full">
        <h3 className="text-2xl font-semibold text-center text-primary">
          {title}
        </h3>
        <hr className="border-t border-dashed w-3/4 my-4" />
        <div className="space-y-4 text-gray-700 text-sm w-full">
          {description.map((group, idx) => (
            <div key={idx}>
              <p className="font-medium text-center text-xl text-base  mb-1">
                {group.label}
              </p>
              <div className="space-y-1">
                {group.items.map((item, subIdx) => (
                  <div
                    key={subIdx}
                    className="flex justify-between px-4 text-sm"
                  >
                    <span>{item.label}</span>
                    <span className="font-medium">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Link
        to={link}
        className="mt-6 bg-primary text-white text-sm px-6 py-2 rounded hover:bg-primary/90 transition"
      >
        Daftar Sekarang
      </Link>
    </div>
  );
};

export default TicketCard;
