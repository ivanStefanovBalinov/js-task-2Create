import React, { useState } from "react";
import Cell from "./Cell";
import "../Styles/GameBoard.css";

export default function GameBoard() {
  const [cells, setsCell] = useState(Array(9).fill(null));
  return (
    <div className="game-board">
      {cells.map((cell, index) => (
        <Cell key={index + 1} />
      ))}
    </div>
  );
}
