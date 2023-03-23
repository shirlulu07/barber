import { Iinformation } from "./../interface/Types";

interface ICardProps {
  informations: Iinformation;
  index: number;
  handleCardClick: Function;
}

const Card = ({ informations, index, handleCardClick }: ICardProps) => {
  // return (
  //   <div className="flex flex-col sm:flex-row justify-center sm:justify-center items-center gap-5 py-5">
  //     {informations.map((information: information, index: number) => {
  return (
    <div
      className={`border-2 flex flex-col items-center gap-2 ${
        informations.isActive
          ? "bg-gray-200 shadow-xl text-yellow-500 border-gray-400g"
          : ""
      }`}
      onClick={() => handleCardClick(index)}
    >
      <img
        src={informations.img}
        alt={informations.name}
        className={informations.title ? "h-96 w-72" : "h-64 w-80"}
      />
      <div className="flex flex-col gap-2 items-center pb-2 w-72">
        <p className={`textStyle font-bold `}>{informations.name}</p>
        {informations.title ? (
          <p
            className={`textStyle text-gray-400  ${
              informations.isActive ? "text-yellow-500" : ""
            }`}
          >
            {informations.title}
          </p>
        ) : (
          <>
            <p
              className={`textStyle text-gray-400 ${
                informations.isActive ? "text-yellow-500" : ""
              }`}
            >
              Lorem ipsum dolr sit amet, consectutuer adipisicing elit, sed do
              eismod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <button
              type="button"
              className={`text-white bg-gray-500 border-2 border-gray-500 w-40 h-10 rounded-3xl my-1 ${
                informations.isActive ? "bg-yellow-500  border-yellow-500" : ""
              }`}
            >
              READ MORE
            </button>
          </>
        )}
      </div>
    </div>
    //       );
    //     })}
    //   </div>
  );
};

export default Card;
