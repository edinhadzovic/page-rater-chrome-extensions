import React from "react";
import { Rating, RatingScale } from "../../../constants";

interface ISmileyButtonProps {
  rating: RatingScale;
  selected: boolean;
  onClick: (rating: RatingScale) => void;
}

export const SmileyButton: React.FunctionComponent<ISmileyButtonProps> = ({ rating, selected, onClick }) => {
  return (
    <div
      className={`transition-colors flex rounded-full h-10 w-10 items-center justify-center shadow cursor-pointer ${
        Rating[rating].class
      } active:selected ${selected ? Rating[rating].activeClasses : ""}`}
      onClick={() => onClick(rating)}
    >
      <img src={Rating[rating].svg} alt={Rating[rating].alt} />
    </div>
  );
};
