const SpeakerCard = ({ image, name, position }) => {
  return (
    <div className="text-center">
      {/* Wrapper foto + background */}
      <div className="relative max-w-52 max-h-64 mx-auto">
        {/* Background di belakang */}
        <div className="absolute bottom-0 left-0 w-full h-3/4 bg-accent-2 z-0" />
        {/* Gambar pembicara */}
        <img
          src={image}
          alt={name}
          className="relative z-10 w-full h-full max-w-52 max-h-64 object-cover "
        />
      </div>

      {/* Info teks */}
      <h3 className="mt-6 text-xl font-semibold text-base">{name}</h3>
      <p className="text-sm text-base">{position}</p>
    </div>
  );
};

export default SpeakerCard;
