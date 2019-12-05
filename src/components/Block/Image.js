import React from "react";

const Image = ({ winner, tableNum, number }) => {
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
