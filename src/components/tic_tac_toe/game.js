import Board from "./board";
import { useState } from "react";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);

  const isXNext = currentMove % 2 === 0

  console.log("game rerendering...");

  const currentSquares = history[currentMove];

  const handlePay = (curSquares) => {
    const nextHistory = [...history, curSquares]
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };
  
  function jumpTo(nextMove) {
    setCurrentMove(nextMove)
  }

  const moves = history.map((_, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <>
    <div>
        <Board squares={currentSquares} isXNext={isXNext} onPlay={handlePay} />
    </div>
    <br />
    <div>
        <ol>{moves}</ol>
    </div>
    </>
  );
}
