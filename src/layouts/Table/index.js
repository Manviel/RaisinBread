import React, { useState } from "react";

import Block from "../../components/Block";

import "./Table.css";

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
  const [winner, setWinner] = useState([]);
  const [last, setLast] = useState(5);

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

  const renderSquare = i => (
    <Block
      key={"sqr " + i}
      number={i}
      last={[last, setLast]}
      table={[table, setTable]}
      winner={winner}
      calculateWinner={calculateWinner}
    />
  );

  const renderSquares = n => {
    let squares = [];

    for (let i = n; i < n + 3; i++) {
      squares.push(renderSquare(i));
    }

    return squares;
  };

  const renderRows = i => {
    return <article className="flex">{renderSquares(i)}</article>;
  };

  return (
    <div className="table">
      <p className="title">{last === 3 ? "X" : "O"} turn</p>

      {renderRows(0)}
      {renderRows(3)}
      {renderRows(6)}
    </div>
  );
};

export default Table;
