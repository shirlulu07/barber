import { iInformation } from "./../interface/Types";
import { useState } from "react";

interface ICardProps {
  states: Array<iInformation>;
}

const Card = ({ states }: ICardProps) => {
  const [informations, setInformations] = useState(states);

  function handleCardClick(index: number) {
    setInformations((prev: iInformation[]) => [
      ...prev.map((elem, i) => {
        if (i === index) {
          return {
            ...elem,
            isActive: !elem.isActive,
          };
        } else {
          return {
            ...elem,
            isActive: false,
          };
        }
        console.log(elem.isActive);
      }),
    ]);
  }

  return (
    <div className="flex flex-col sm:flex-row justify-center sm:justify-center items-center gap-5 py-5">
      {informations.map((information: iInformation, index: number) => {
        return (
          <div
            className={`border-2 flex flex-col items-center gap-2 ${
              information.isActive
                ? "bg-gray-200 shadow-xl text-yellow-500"
                : ""
            }`}
            onClick={() => handleCardClick(index)}
          >
            <img
              src={information.img}
              alt={information.name}
              className={information.title ? "h-96 w-72" : "h-64 w-80"}
            />
            <div className="flex flex-col gap-2 items-center pb-2 w-72">
              <p className={`textStyle font-bold `}>{information.name}</p>
              {information.title ? (
                <p
                  className={`textStyle text-gray-400  ${
                    information.isActive ? "text-yellow-500" : ""
                  }`}
                >
                  {information.title}
                </p>
              ) : (
                <>
                  <p
                    className={`textStyle text-gray-400 ${
                      information.isActive ? "text-yellow-500" : ""
                    }`}
                  >
                    Lorem ipsum dolr sit amet, consectutuer adipisicing elit,
                    sed do eismod tempor incididunt ut labore et dolore magna
                    aliqua
                  </p>
                  <button
                    type="button"
                    className={`text-white bg-gray-500 border-2 border-gray-500 w-40 h-10 rounded-3xl my-1 ${
                      information.isActive
                        ? "bg-yellow-500  border-yellow-500"
                        : ""
                    }`}
                  >
                    READ MORE
                  </button>
                </>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
