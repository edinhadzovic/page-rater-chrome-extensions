import React, { createContext, useContext, useState } from "react";
import { RatingScale } from "../../constants";

interface IAppContextProviderProps {}

interface IAppContext {
  rating: RatingScale | undefined;
  onRatingSelected: (rate: RatingScale) => void;
  isRated: boolean;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppContextProvider: React.FunctionComponent<IAppContextProviderProps> = ({ children }) => {
  const [rating, setRating] = useState<RatingScale>();
  const [isRated, setIsRated] = useState(false);

  const onRatingSelected = async (rate: RatingScale) => {
    setRating(rate);
    setIsRated(true);
  };

  return <AppContext.Provider value={{ isRated, rating, onRatingSelected }}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
