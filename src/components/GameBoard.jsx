import React, { useState } from "react";
import Cell from "./Cell";
import "../Styles/GameBoard.css";

export default function GameBoard() {
  const [cells, setsCell] = useState(Array(9).fill(null));

  const handleClickCell = (id) => {
    console.log(id);
  };

  return (
    <div className="game-board">
      {cells.map((cell, index) => (
        <Cell
          key={index + 1}
          id={index + 1}
          onClick={() => handleClickCell(index + 1)}
        />
      ))}
    </div>
  );
}
