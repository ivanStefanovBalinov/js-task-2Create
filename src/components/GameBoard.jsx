import React, { useEffect, useState } from "react";
import Cell from "./Cell";
import "../Styles/GameBoard.css";
import Modal from "./Modal";

export default function GameBoard() {
  const [cells, setCells] = useState(Array(9).fill(false));
  const [disabledCells, setDisabledCells] = useState(Array(9).fill(false));
  const [playerTurn, setPlayerTurn] = useState(true);
  const [computerTurn, setComputerTurn] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const disableCells = (index) => {
    const updatedDisabledCells = [...disabledCells];
    updatedDisabledCells[index] = true;
    setDisabledCells(updatedDisabledCells);
  };

  const handleCellClick = (index) => {
    const updatedCells = [...cells];
    updatedCells[index] = "red";
    setCells(updatedCells);
    disableCells(index);
    setPlayerTurn(false);
    setComputerTurn(true);
  };

  useEffect(() => {
    if (computerTurn && cells.includes(false)) {
      const timeOut = setTimeout(() => {
        const availableCells = cells
          .map((empty, index) => (!empty ? index : null))
          .filter((index) => index !== null);

        if (availableCells.length > 0) {
          let randomIndex;
          do {
            randomIndex =
              availableCells[Math.floor(Math.random() * availableCells.length)];
          } while (cells[randomIndex]);

          const updatedCells = [...cells];
          updatedCells[randomIndex] = "green";
          disableCells(randomIndex);
          setCells(updatedCells);
          setPlayerTurn(true);
          setComputerTurn(false);
        }
      }, 1500);

      return () => clearTimeout(timeOut);
    } else {
      setComputerTurn(false);
    }
  }, [playerTurn, computerTurn, cells]);

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
