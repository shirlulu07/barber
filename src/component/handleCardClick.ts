import { Iinformation } from "../interface/Types";

const handleCardClick = (
  index: number,
  setInformations: React.Dispatch<React.SetStateAction<Iinformation[]>>
) => {
  setInformations((prev: Iinformation[]) => [
    ...prev.map((elem, i) => {
      return {
        ...elem,
        isActive: i === index ? !elem.isActive : false,
      };
    }),
  ]);
};

export { handleCardClick };