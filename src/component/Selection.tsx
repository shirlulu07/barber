import { useState } from "react";
import { information } from "./../interface/Types";

export function Selection() {
  const [selectedCard, setSelectedCard] = useState<information | null>(null);

  function handleCardClick(cardd: information) {
    setSelectedCard((prevCard) => (prevCard === cardd ? null : cardd));
  }
  console.log(selectedCard);

  return {
    selectedCard,
    handleCardClick,
  };
}
