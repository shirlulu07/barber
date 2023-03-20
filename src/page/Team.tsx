import { Selection } from "../component/Selection";
import Img6 from "../image/10.png";
import Img7 from "../image/11.png";
import Img5 from "../image/9.png";
import Card from "./../component/Card";

function Team() {
  const { selectedCardIndex, handleCardClick } = Selection();

  const person = [
    { img: Img5, name: "PAUL NARCH", title: "BARBER", image: "h-96 w-72" },
    { img: Img6, name: "STEVEN JOSEPH", title: "BARBER", image: "h-96 w-72" },
    { img: Img7, name: "ALEXANDER DAVID", title: "SHAVER", image: "h-96 w-72" },
  ];

  return (
    <div className="text-center px-10 py-20 sm:px-40" id="team">
      <h3 className="headStyle1">PROFESSIONAL</h3>
      <h1 className="headStyle sm:text-5xl">OUR TEAM</h1>
      <div className="flex flex-col sm:flex-row justify-center sm:justify-center items-center gap-5 py-5">
        {person.map((person, index) => (
          <Card
            key={index}
            informations={person}
            isSelected={selectedCardIndex === index}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Team;
