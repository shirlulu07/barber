import Img6 from "../image/10.png";
import Img7 from "../image/11.png";
import Img5 from "../image/9.png";
import Card from "./../component/Card";
import { useState } from "react";
import { iInformation } from "../interface/Types";
import { handleCardClick } from "../component/handleCardClick";

const Team = () => {
  const [informations, setInformations] = useState<iInformation[]>([
    { id: 1, img: Img5, name: "PAUL NARCH", title: "BARBER", isActive: false },
    {
      id: 2,
      img: Img6,
      name: "STEVEN JOSEPH",
      title: "BARBER",
      isActive: false,
    },
    {
      id: 3,
      img: Img7,
      name: "ALEXANDER DAVID",
      title: "SHAVER",
      isActive: false,
    },
  ]);

  return (
    <div className="text-center px-10 py-20 sm:px-40" id="team">
      <h3 className="headStyle1">PROFESSIONAL</h3>
      <h1 className="headStyle sm:text-5xl">OUR TEAM</h1>
      <div className="flex flex-col sm:flex-row justify-center sm:justify-center items-center gap-5 py-5">
        {informations.map((information: iInformation, index: number) => {
          return (
            <Card
              key={index}
              informations={information}
              index={index}
              handleCardClick={() => handleCardClick(index, setInformations)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Team;
