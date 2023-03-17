interface CardProps {
  img: string;
  name: string;
  showButton?: boolean;
  showText?: boolean;
  title?: string;
  showTitle?: boolean;
  image: string;
  isSelected: boolean;
  onClick?: () => void;
}

const Card = ({
  img,
  name,
  showButton,
  showText,
  showTitle = true,
  title = "",
  image,
  isSelected,
  onClick,
}: CardProps) => {
  return (
    <div
      className={`border-2 border-gray flex flex-col items-center gap-2  bg-white ${
        isSelected ? "bg-gray-200 text-yellow-500 shadow-2xl" : ""
      }`}
      onClick={onClick}
    >
      <img src={img} alt="" className={image} />
      <div className="flex flex-col gap-2 items-center pb-2 w-72">
        <p className="textStyle font-bold">{name}</p>
        {showText ? (
          <p
            className={`textStyle text-gray-400 ${
              isSelected ? " text-yellow-500" : ""
            }`}
          >
            Lorem ipsum dolr sit amet, consectutuer adipisicing elit, sed do
            eismod tempor incididunt ut labore et dolore magna aliqua
          </p>
        ) : null}
        {showTitle ? <p className="textStyle text-gray-400">{title}</p> : null}
        {showButton && (
          <button
            type="button"
            className={`text-white bg-gray-500 border-2 border-gray-500 w-40 h-10 rounded-3xl my-1 ${
              isSelected ? "bg-yellow-500 border-yellow-500" : ""
            }`}
          >
            READ MORE
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
