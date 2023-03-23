import { useState } from "react";
import { IInformation } from "../interface/Types";
import { handleCardClick } from "../component/handleCardClick";
import Card from "../component/Card";
import Img2 from "../image/6.png";
import Img3 from "../image/7.png";
import Img4 from "../image/8.png";

const Services = () => {
  const [informations, setInformations] = useState<IInformation[]>([
    {
      id: 1,
      img: Img2,
      name: "Regular Cut",
      isActive: false,
    },
    {
      id: 2,
      img: Img3,
      name: "Clipper Cut",
      isActive: false,
    },
    {
      id: 3,
      img: Img4,
      name: "Razoe Shaver",
      isActive: false,
    },
  ]);

  return (
    <div className="text-center px-10 py-20 sm:px-40 bg-gray-100" id="services">
      <h3 className="headStyle1">NOTHING BUT THE BEST</h3>
      <h1 className="headStyle">OUR SERVICES</h1>
      <div className="flex flex-col sm:flex-row justify-center sm:justify-center items-center gap-5 py-5">
        {informations.map((information: IInformation, index: number) => {
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

export default Services;
