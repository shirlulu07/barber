import Img6 from "../image/10.png";
import Img7 from "../image/11.png";
import Img5 from "../image/9.png";
import Card from "./../component/Card";
import { useState } from "react";

const Team = () => {
  // const [informations, setInformations] = useState([
  //   { id: 1, img: Img5, name: "PAUL NARCH", title: "BARBER", isActive: false },
  //   {
  //     id: 2,
  //     img: Img6,
  //     name: "STEVEN JOSEPH",
  //     title: "BARBER",
  //     isActive: false,
  //   },
  //   {
  //     id: 3,
  //     img: Img7,
  //     name: "ALEXANDER DAVID",
  //     title: "SHAVER",
  //     isActive: false,
  //   },
  // ]);
  return (
    <div className="text-center px-10 py-20 sm:px-40" id="team">
      <h3 className="headStyle1">PROFESSIONAL</h3>
      <h1 className="headStyle sm:text-5xl">OUR TEAM</h1>

      <Card
        states={[
          {
            id: 1,
            img: Img5,
            name: "PAUL NARCH",
            title: "BARBER",
            isActive: false,
          },
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
        ]}
      />
    </div>
  );
};

export default Team;
