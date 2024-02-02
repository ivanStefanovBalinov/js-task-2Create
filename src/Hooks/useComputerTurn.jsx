import { useEffect } from "react";

const useComputerTurn = (
  computerTurn,
  cells,
  setCells,
  setPlayerTurn,
  setComputerTurn,
  disableCells
) => {
  useEffect(() => {
    if (computerTurn && cells.includes(false)) {
      const timeout = setTimeout(() => {
        const availableCells = cells
          .map((empty, index) => (!empty ? index : null))
          .filter((index) => index !== null);

        if (availableCells.length > 0) {
          let randomIndex;
          //do - while  make sure the randomIndex will not match an already filled index
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

      return () => clearTimeout(timeout);
    } else {
      setComputerTurn(false);
    }
  }, [
    computerTurn,
    cells,
    setCells,
    setPlayerTurn,
    setComputerTurn,
    disableCells,
  ]);
};

export default useComputerTurn;
