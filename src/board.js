import Square from "./square";
import { useState } from "react";

const Board = () => {
  const [squares, setsquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [status, setStatus] = useState("player x turn");
  const [isCompleted, setIsCompleted] = useState(false);
  let win = "";

  console.log("board rerendered");

  const calculateWinner = (squares) => {
    const squares_to_check = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];
    for (let i = 0; i < squares_to_check.length; i++) {
      const [a, b, c] = squares_to_check[i];
      console.log(squares[a], squares[b], squares[c], i);
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return;
  };

  const handleClick = (index) => {
    if (isCompleted || squares[index]) {
      return;
    }

    const nextSquares = [...squares];
    const currentPlayer = isXNext ? "X" : "O";

    nextSquares[index] = currentPlayer;
    setsquares(nextSquares);
    setIsXNext(!isXNext);

    if (!isCompleted) {
      win = calculateWinner(nextSquares);
      if (win) {
        setIsCompleted(true);
      }
    }
    if (win) {
      setStatus(`Player ${win} has won!`);
    } else {
      const nextPlayer = isXNext ? "O" : "X";
      setStatus(`Player ${nextPlayer} turn`);
    }
  };

  return (
    <>
      <div>
        <h2>status: {status}</h2>
      </div>
      <div className="board-row">
        <Square
          input={squares[0]}
          onClick={() => {
            handleClick(0);
          }}
        />
        <Square
          input={squares[1]}
          onClick={() => {
            handleClick(1);
          }}
        />
        <Square
          input={squares[2]}
          onClick={() => {
            handleClick(2);
          }}
        />
      </div>
      <div>
      <div>
        <Square
          input={squares[3]}
          onClick={() => {
            handleClick(3);
          }}
        />
        <Square
          input={squares[4]}
          onClick={() => {
            handleClick(4);
          }}
        />
        <Square
          input={squares[5]}
          onClick={() => {
            handleClick(5);
          }}
        />
      </div>
      <div className="board-row">
        <Square
          input={squares[6]}
          onClick={() => {
            handleClick(6);
          }}
        />
        <Square
          input={squares[7]}
          onClick={() => {
            handleClick(7);
          }}
        />
        <Square
          input={squares[8]}
          onClick={() => {
            handleClick(8);
          }}
        />
      </div>
      </div>
    </>
  );
};

export default Board;
