import { useState } from 'react';
import Players from './components/Players';
import GameBoard from './components/Game-Board.jsx';
import Log from './components/Log.jsx';
import { WINNING_COMBINATIONS } from './winning-combinations.js';
import GameOver from './components/GameOver.jsx';

const initalGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns){
  let currentPlayer = "X";
  if(gameTurns.length > 0 && gameTurns[0].player == "X"){
    currentPlayer = "O";
  }
  return currentPlayer;
}

function App() {
  const [gameTurns,setGameTurns] = useState([]);
  // const [activePlayer, setActivePlayer]= useState('X');
  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = [...initalGameBoard.map(array => [...array])]; // because of restart 
  for(const turn of gameTurns){
      const {square, player} = turn;
      const {row, col} = square;
      gameBoard[row][col] = player;
  }

  let winner;
  for(const combination of WINNING_COMBINATIONS){
    const firstSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSymbol = gameBoard[combination[2].row][combination[2].column];
    if (firstSymbol && firstSymbol == secondSymbol && firstSymbol == thirdSymbol){
      winner = firstSymbol;
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;

  const handleSelectSquare = (rowIndex, colIndex)=>{
    // setActivePlayer((activePlayer)=>{
    //   return activePlayer === "X" ? "O" : "X";
    // });

    setGameTurns((gameTurns)=>{
      let currentPlayer = deriveActivePlayer(gameTurns);
      const updatedTurns = [
        { square: {row:rowIndex, col:colIndex}, player: currentPlayer },
        ...gameTurns
      ];
      return updatedTurns;
    });
  }

  function handleRestart(){
    setGameTurns([]);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
          <Players name="Player1" symbol="X" isActive={activePlayer === "X"} />
          <Players name="Player2" symbol="O" isActive={activePlayer === "O"}/>
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestart = {handleRestart}/>}

        <GameBoard onSelectSquare = {handleSelectSquare} board = {gameBoard} />
      </div>
      <Log turns = {gameTurns}/>
    </main>
  )
}

export default App
