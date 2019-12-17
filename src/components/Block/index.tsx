import React from "react";

import Image from "./Image";

import "./Block.css";

import { SquareBlockProps, TicTac } from "../../types";

const Block = (props: SquareBlockProps) => {
  const {
    number,
    winner,
    calculateWinner,
    table,
    last,
    setTable,
    setLast
  } = props;

  const handleTable = (past: TicTac) => {
    let newTable = [...table];

    let newLast = past === 3 ? 5 : 3;

    newTable[number] = newLast;

    setLast(newLast);

    return newTable;
  };

  const handleClick = () => {
    if (table[number] === 0 && winner.length === 0) {
      setTable(handleTable(last));
      calculateWinner();
    }
  };

  return (
    <div className="flex center block" onClick={handleClick}>
      <Image winner={winner} number={number} tableNum={table[number]} />
    </div>
  );
};

export default Block;
