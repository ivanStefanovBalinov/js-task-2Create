import React, { useState } from "react";
import Cell from "./Cell";
import "../Styles/GameBoard.css";
import Modal from "./Modal";
import useComputerTurn from "../Hooks/useComputerTurn";

export default function GameBoard() {
  const [cells, setCells] = useState(Array(9).fill(false));
  const [disabledCells, setDisabledCells] = useState(Array(9).fill(false));
  const [playerTurn, setPlayerTurn] = useState(true);
  const [computerTurn, setComputerTurn] = useState(false);

  //Helper function to managing disabled cells
  const disableCells = (index) => {
    const updatedDisabledCells = [...disabledCells];
    updatedDisabledCells[index] = true;
    setDisabledCells(updatedDisabledCells);
  };

  //HandleCellClick  colors clicked cell red.
  const handleCellClick = (index) => {
    const updatedCells = [...cells];
    updatedCells[index] = "red";
    setCells(updatedCells);
    disableCells(index);
    setPlayerTurn(false);
    setComputerTurn(true);
  };

  //Custom hook that simulates a computer move.
  //Shows and hides modal.
  useComputerTurn(
    computerTurn,
    cells,
    setCells,
    setPlayerTurn,
    setComputerTurn,
    disableCells
  );

  return (
    <>
      {computerTurn && <Modal />}
      <div className="game-board">
        {cells.map((value, index) => (
          <Cell
            key={index}
            onClick={() => handleCellClick(index)}
            className={`${value}`}
            style={{ pointerEvents: disabledCells[index] ? "none" : "auto" }}
          />
        ))}
      </div>
    </>
  );
}
