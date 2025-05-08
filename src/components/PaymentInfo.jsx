import { Info, Copy } from "lucide-react";
import { useState } from "react";

const PaymentInfo = () => {
  const [copied, setCopied] = useState(false);
  const accountNumber = "1360034902673";

  const handleCopy = () => {
    navigator.clipboard.writeText(accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-12 max-w-2xl mx-auto bg-[#f8f9fa] md:bg-transparent p-6 rounded-xl shadow-md md:shadow-none border md:border-none border-gray-200">
      <div className="flex items-start gap-3 mb-4">
        <Info className="w-6 h-6 mt-1 text-primary" />
        <p className="text-sm text-gray-700 text-justify leading-relaxed">
          <em>
            Peserta dapat melakukan pembayaran biaya pendaftaran sesuai dengan
            kategori bundling yang dipilih ke rekening berikut:
          </em>
        </p>
      </div>

      <div className="bg-white border border-primary/30 rounded-lg p-4 flex items-center justify-between shadow-sm">
        <div className="text-start">
          <p className="text-sm text-gray-600 ">Bank Mandiri</p>
          <p className="text-lg font-semibold text-black ">{accountNumber}</p>
          <p className="text-sm text-gray-700">
            a.n Noviani Vinalia Putri Cahyani
          </p>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 bg-primary text-white text-sm px-3 py-1.5 rounded hover:bg-primary/90 transition"
        >
          <Copy size={16} />
          {copied ? "Disalin!" : "Salin"}
        </button>
      </div>
    </div>
  );
};

export default PaymentInfo;
