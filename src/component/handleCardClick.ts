import { IInformation } from "../interface/Types";

const handleCardClick = (
  index: number,
  setInformations: React.Dispatch<React.SetStateAction<IInformation[]>>
) => {
  setInformations((prev: IInformation[]) => [
    ...prev.map((elem, i) => {
      return {
        ...elem,
        isActive: i === index ? !elem.isActive : false,
      };
    }),
  ]);
};

export { handleCardClick };