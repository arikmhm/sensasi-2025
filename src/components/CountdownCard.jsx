import { useEffect, useState } from "react";

const CountdownCard = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const distance = new Date(targetDate) - now;

      if (distance < 0) {
        setTimeLeft(null);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  if (!timeLeft) {
    return (
      <div className="bg-accent-2 text-center p-6 rounded-xl shadow-lg text-primary">
        <h3 className="text-xl font-bold">Acara Sedang Berlangsung!</h3>
      </div>
    );
  }

  return (
    <div className="bg-primary text-base p-6 rounded-xl shadow-md grid grid-cols-4 gap-4 text-center max-w-3xl mx-auto">
      {["days", "hours", "minutes", "seconds"].map((unit) => (
        <div key={unit}>
          <div className="text-3xl md:text-8xl font-bold">{timeLeft[unit]}</div>
          <div className="text-md md:lg uppercase tracking-wide">{unit}</div>
        </div>
      ))}
    </div>
  );
};

export default CountdownCard;
