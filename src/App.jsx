import { useState } from "react";
import Player from "./components/Player"
import GameBoard from "./components/GameBoard"; 
import Log from "./components/Log";


// helper function :- no need access to state , and not recreated when componet rewxcuted
function deriveActivePlayer(gameTurns){
  let currentPlayer ='X';
      if(gameTurns.length > 0 && gameTurns[0].player ==='X'){
        currentPlayer ='O';
      }
      return currentPlayer;
}
function App() {

  const [gameTurns, setGameTurns]=useState([]);
  // const [activePlayer, setActivePlayer ] =useState('X');/ dont need 

  const activePlayer = deriveActivePlayer(gameTurns);

  function handleSelectSquare(rowIndex,colIndex){
    // setActivePlayer((curActivePalyer)=> curActivePalyer === 'X' ? 'O' : 'X' );
    setGameTurns(prevTurns => {
     const currentPlayer =deriveActivePlayer(prevTurns);
      const updatedTurns = [{square : {row: rowIndex,col : colIndex},player:currentPlayer},...prevTurns];
      return updatedTurns;
    });
  }
  
  return (
    <main>
      <div id="game-container">
        {/* //Players */}
        <ol id= 'players' className="highlight-player"> 
        <Player initialname = "Player 1" symbol = "X" isActive={activePlayer ==='X'}/>
        <Player initialname = "Player 2" symbol = "0"isActive={activePlayer ==='O'}/>
        </ol>
        {/* //Game Board */}
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns}/>
      </div>
      {/* LOG */}
        <Log turns={gameTurns}/>
    </main>
  );
}

export default App
