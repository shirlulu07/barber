interface CardProps {
  img: string;
  name: string;
  title?: string;
  image: string;
  isSelected: boolean;
  onClick?: () => void;
}

const Card = ({ img, name, image, title, isSelected, onClick }: CardProps) => {
  return (
    <div
      className={`border-2 flex flex-col items-center gap-2
    ${isSelected ? " bg-gray-200 shadow-2xl text text-yellow-500" : ""}`}
      onClick={onClick}
    >
      <img src={img} alt="" className={image} />
      <div className="flex flex-col gap-2 items-center pb-2 w-72">
        <p className="textStyle font-bold">{name}</p>
        {title ? (
          <p className="textStyle text-gray-400">{title}</p>
        ) : (
          <>
            <p
              className={`textStyle text-gray-4001 ${
                isSelected ? "text-yellow-500" : null
              }`}
            >
              Lorem ipsum dolr sit amet, consectutuer adipisicing elit, sed do
              eismod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <button
              type="button"
              className={`text-white bg-gray-500 border-2 border-gray-500 w-40 h-10 rounded-3xl my-1 ${
                isSelected ? "bg-yellow-500 border-yellow-500" : ""
              }`}
            >
              READ MORE
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
