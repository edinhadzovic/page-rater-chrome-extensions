import React from "react";
import { Rating, RatingScale } from "../../../constants";

interface IChipProp {
  rate: RatingScale | undefined;
}

export const Chip: React.FunctionComponent<IChipProp> = ({ rate }) => {
  return (
    <div className={`flex p-2 shadow ${rate ? Rating[rate].activeClasses : ""}`}>
      <div className="text-xs self-center ml-2 font-bold text-black">https://google.com</div>
      <div className="text-xs ml-auto mr-2 p-2 bg-green-50 shadow-inner font-bold rounded-full">78%</div>
    </div>
  );
};
