import React, { useState } from "react";

import Block from "../../components/Block";

import "./Table.css";

import { TicTac } from "../../types";

const winningСombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const Table = () => {
  const [table, setTable] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [winner, setWinner] = useState<number[]>([]);
  const [last, setLast] = useState<TicTac>(5);

  const calculateWinner = () => {
    for (let i = 0; i < winningСombinations.length; i++) {
      const [a, b, c] = winningСombinations[i];

      if (table[a] && table[a] === table[b] && table[a] === table[c]) {
        setWinner(winningСombinations[i]);
        gameOver();
      }
    }
  };

  const gameOver = () => {
    setTimeout(() => {
      setTable([0, 0, 0, 0, 0, 0, 0, 0, 0]);
      setWinner([]);
    }, 2000);
  };

  const renderSquare = (i: number) => (
    <Block
      key={"sqr " + i}
      number={i}
      last={last}
      setLast={setLast}
      table={table}
      setTable={setTable}
      winner={winner}
      calculateWinner={calculateWinner}
    />
  );

  const renderSquares = (n: number) => {
    let squares = [];

    for (let i = n; i < n + 3; i++) {
      squares.push(renderSquare(i));
    }

    return squares;
  };

  return (
    <div className="table">
      <p className="title">{last === 3 ? "X" : "O"} turn</p>

      <article className="flex">{renderSquares(0)}</article>
      <article className="flex">{renderSquares(3)}</article>
      <article className="flex">{renderSquares(6)}</article>
    </div>
  );
};

export default Table;
