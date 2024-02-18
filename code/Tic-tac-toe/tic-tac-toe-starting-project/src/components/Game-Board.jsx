import { useState } from "react";

export default function GameBoard({onSelectSquare, board}) {
    // const [gameBoard,setGameBoard] = useState(initalGameBoard);

    // const handleSelectSquare = (rowIndex,colIndex,event)=>{
    //     setGameBoard((gameBoard)=>{
    //         const updatedBoard = [...gameBoard.map(innerArray => [...innerArray])]; // Creating an immutable array
    //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedBoard; 
    //     });
    //     onSelectSquare();
    // }


    return (
        <ol id="game-board">
        {board.map((row, i) => (
            <li key={i}>
                <ol>
                    {row.map((playerSymbol, j) => (
                        <li key={j}>
                            {/* <button onClick={()=>handleSelectSquare(i,j)} key={j}>{playerSymbol}</button> */}
                            <button onClick={()=>onSelectSquare(i,j)} key={j} disabled={playerSymbol !== null ? true: false}>
                                {playerSymbol}
                            </button>
                        </li>
                    ))}
                </ol>
            </li>
        ))}
    </ol>
    );
}