import React, { useState, useEffect } from "react";

import Block from "../../components/Block";

import "./Table.css";

const Table = () => {
  const [table, setTable] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [winner, setWinner] = useState([]);
  const [last, setLast] = useState(Math.random() > 0.5 ? 5 : 3);

  useEffect(() => {
    for (let i = 0; i <= 2; i++) {
      const idx = (i % 3) * 3;

      if (
        table[idx] + table[idx + 1] + table[idx + 2] === 9 ||
        table[idx] + table[idx + 1] + table[idx + 2] === 15
      ) {
        setWinner([idx, idx + 1, idx + 2]);
        gameOver();
      }

      if (
        table[i] + table[i + 3] + table[i + 6] === 9 ||
        table[i] + table[i + 3] + table[i + 6] === 15
      ) {
        setWinner([i, i + 3, i + 6]);
        gameOver();
      }
    }

    if (
      table[0] + table[4] + table[8] === 15 ||
      table[0] + table[4] + table[8] === 9
    ) {
      setWinner([0, 4, 8]);
      gameOver();
    }
    if (
      table[2] + table[4] + table[6] === 9 ||
      table[2] + table[4] + table[6] === 15
    ) {
      setWinner([2, 4, 6]);
      gameOver();
    }

    if (table.indexOf(0) === -1) {
      gameOver();
    }
  }, [table]);

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
      {renderRows(0)}
      {renderRows(3)}
      {renderRows(6)}
    </div>
  );
};

export default Table;
