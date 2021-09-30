import excitedIcon from "../smiley/excited.svg";
import happyIcon from "../smiley/happy.svg";
import naturalIcon from "../smiley/natural.svg";
import sadIcon from "../smiley/unhappy.svg";
import angryIcon from "../smiley/angry.svg";

export enum RatingScale {
  Excited = 5,
  Happy = 4,
  Natural = 3,
  Sad = 2,
  Angry = 1,
}

export interface IRating {
  svg: string;
  alt: string;
  class: string;
  activeClasses: string;
}

export const Rating: { [rating in RatingScale]: IRating } = {
  [RatingScale.Excited]: {
    svg: excitedIcon,
    class: "hover:bg-green-400",
    alt: "excited rating",
    activeClasses: "bg-green-400",
  },
  [RatingScale.Happy]: {
    svg: happyIcon,
    class: "hover:bg-green-200",
    alt: "happy rating",
    activeClasses: "bg-green-200",
  },
  [RatingScale.Natural]: {
    svg: naturalIcon,
    class: "hover:bg-yellow-400",
    alt: "natural rating",
    activeClasses: "bg-yellow-400",
  },
  [RatingScale.Sad]: {
    svg: sadIcon,
    class: "hover:bg-red-400",
    alt: "sad rating",
    activeClasses: "bg-red-400",
  },
  [RatingScale.Angry]: {
    svg: angryIcon,
    class: "hover:bg-red-600",
    alt: "angry rating",
    activeClasses: "bg-red-600",
  },
};
