import React from "react";
import Square from "./Square";
import { useState } from "react";

const Board = () => {
    const [state, setState] = useState(Array(9).fill(""));
    const [turn, setTurn] = useState(true); // true = 'o', false = 'x'
    const [winner, setWinner] = useState(null);

    const checkWinner = (board) => {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let combo of winningCombinations) {
            const [a, b, c] = combo;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }

        if (!board.includes("")) {
            console.log("Tie chhe")
            return "Tie";
        }

        return null;
    };

    const handleClick = (index) => {
        if (state[index] || winner) return;

        const updatedState = [...state];
        updatedState[index] = turn ? "O" : "X";
        setState(updatedState);
        setTurn(!turn);
        console.log("turn is : ", turn);
        const gameWinner = checkWinner(updatedState);
        if (gameWinner) {
            setWinner(gameWinner);
        }
    };

    const resetGame = () => {
        setState(Array(9).fill(""));
        setTurn(true);
        setWinner(null);
    };

    return (
        <div className="board-container">
            <h1>Tic Tac Toe</h1>
            {winner ? (
                <div className="result">
                    <h2>
                        {winner === "Tie"
                            ? "It's a Tie!"
                            : `Winner is: ${winner}`}
                    </h2>
                    <button onClick={resetGame} className="play-again">
                        Play Again
                    </button>
                </div>
            ) : (
                <h2>Current Turn: {turn ? "O" : "X"}</h2>
            )}
            <div className="board">
                {state.map((value, index) => (
                    <Square
                        key={index}
                        onClick={() => handleClick(index)}
                        value={value}
                    />
                ))}
            </div>
        </div>
    );
};

export default Board;
