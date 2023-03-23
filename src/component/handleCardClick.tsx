import { iInformation } from "../interface/Types";

const handleCardClick = (
  index: number,
  setInformations: React.Dispatch<React.SetStateAction<iInformation[]>>
) => {
  setInformations((prev: iInformation[]) => [
    ...prev.map((elem, i) => {
      return {
        ...elem,
        isActive: i === index ? !elem.isActive : false,
      };
    }),
  ]);
};

export { handleCardClick };
