import React from "react";

import { BlockType } from "../../types";

const Image = ({ winner, tableNum, number }: BlockType) => {
  if (tableNum === 5) {
    return (
      <div className={winner.indexOf(number) !== -1 ? "win cross" : "cross"} />
    );
  } else if (tableNum === 3) {
    return (
      <div
        className={winner.indexOf(number) !== -1 ? "win circle" : "circle"}
      />
    );
  } else {
    return <div />;
  }
};

export default Image;
