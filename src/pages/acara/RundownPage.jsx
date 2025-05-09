import { rundownData } from "../../data/rundownData";

const RundownPage = () => {
  return (
    <section className="bg-base py-16 px-6 min-h-screen ">
      <div className="max-w-5xl mx-auto">
        {/* Judul */}
        <h2 className="text-3xl md:text-5xl font-semibold text-center text-accent-2 mb-12 mt-16">
          Rundown Acara
        </h2>

        {/* Tabel */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-300">
            <thead className="bg-primary text-white">
              <tr>
                <th className="py-3 px-4 border">No</th>
                <th className="py-3 px-4 border">Jam</th>
                <th className="py-3 px-4 border text-left">Kegiatan</th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              {rundownData.map((item, index) => (
                <tr key={index} className="even:bg-gray-100">
                  <td className="py-2 px-4 border text-center">{index + 1}</td>
                  <td className="py-2 px-4 border text-center">{item.time}</td>
                  <td className="py-2 px-4 border">{item.activity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default RundownPage;
