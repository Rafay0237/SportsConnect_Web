const GameCard = ({ title, image }) => {
  return (
    <div className="min-w-[140px] max-w-[140px]">
      <div className="h-[180px] w-full overflow-hidden rounded-lg relative">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 transform hover:scale-105 cursor-pointer"
        />
      </div>
      <h3 className="mt-2 text-lg font-bold">{title}</h3>
    </div>
  );
};

export default GameCard;
