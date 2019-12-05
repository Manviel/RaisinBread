import React from "react";

import Image from "./Image";

import "./Block.css";

const Block = props => {
  const [last, setLast] = props.last;
  const [table, setTable] = props.table;

  const number = props.number;
  const winner = props.winner;

  const handleTable = () => {
    let newTable = [...table];
    let newLast = last === 3 ? 5 : 3;

    newTable[number] = newLast;

    setLast(newLast);

    return newTable;
  };

  const handleClick = () => {
    if (table[number] === 0 && winner.length === 0) {
      setTable(handleTable());
    }
  };

  return (
    <div className="flex center block" onClick={handleClick}>
      <Image winner={winner} number={number} tableNum={table[number]} />
    </div>
  );
};

export default Block;
