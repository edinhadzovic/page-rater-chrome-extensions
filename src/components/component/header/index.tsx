import React from "react";
import { useAppContext } from "../../../context";
import { Chip } from "../../primitives";

interface IHeaderProps {}

export const Header: React.FunctionComponent<IHeaderProps> = ({}) => {
  const { rating } = useAppContext();
  return (
    <header>
      <div className="self-center">
        <Chip rate={rating} />
      </div>
    </header>
  );
};
