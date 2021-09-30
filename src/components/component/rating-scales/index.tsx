import React from "react";
import { RatingScale } from "../../../constants";
import { useAppContext } from "../../../context";
import { SmileyButton } from "../../primitives";

interface IRatingProps {}

export const RatingScales: React.FunctionComponent<IRatingProps> = (props) => {
  const { rating, onRatingSelected } = useAppContext();

  return (
    <section className="flex justify-around h-16">
      <div className="flex self-center active:">
        <SmileyButton
          onClick={(rate) => onRatingSelected(rate)}
          selected={rating === RatingScale.Excited}
          rating={RatingScale.Excited}
        />
      </div>
      <div className="flex self-center">
        <SmileyButton
          onClick={(rate) => onRatingSelected(rate)}
          selected={rating === RatingScale.Happy}
          rating={RatingScale.Happy}
        />
      </div>
      <div className="flex self-center">
        <SmileyButton
          onClick={(rate) => onRatingSelected(rate)}
          selected={rating === RatingScale.Natural}
          rating={RatingScale.Natural}
        />
      </div>
      <div className="flex self-center">
        <SmileyButton
          onClick={(rate) => onRatingSelected(rate)}
          selected={rating === RatingScale.Sad}
          rating={RatingScale.Sad}
        />
      </div>
      <div className="flex self-center">
        <SmileyButton
          onClick={(rate) => onRatingSelected(rate)}
          selected={rating === RatingScale.Angry}
          rating={RatingScale.Angry}
        />
      </div>
    </section>
  );
};
