import React from "react";
import Information from "./../page/Contact/Information";

interface information {
  img: string;
  name: string;
  image: string;
  title?: string;
}

interface CardProps {
  informations: information;
  isSelected: boolean;
  onClick?: () => void;
}

const Card = ({ informations, isSelected, onClick }: CardProps) => {
  return (
    <div
      className={`border-2 flex flex-col items-center gap-2
    ${isSelected ? " bg-gray-200 shadow-2xl text-yellow-500" : ""}`}
      onClick={onClick}
    >
      <img
        src={informations.img}
        alt={informations.name}
        className={informations.image}
      />
      <div className="flex flex-col gap-2 items-center pb-2 w-72">
        <p className="textStyle font-bold">{informations.name}</p>
        {informations.title ? (
          <p className="textStyle text-gray-400">{informations.title}</p>
        ) : (
          <>
            <p
              className={`textStyle text-gray-400 ${
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
