import { useState } from 'react'
import './App.css'
import Button from './components/Button/Button'
import GridLayout from './components/GridLayout/GridLayout'
import Heading from './components/Heading/Heading'
import GameLogic from './assets/utils/GameLogic'

function App() {

  const [player, setPlayer] = useState("Cross");
  const [board, setBoard] = useState(Array(9).fill(""));

  function onSetCrossHandler() {
    setPlayer("Cross");
  }

  function onSetCircleHandler() {
    setPlayer("Circle");
  }

  function handleCellClick(index) {
    const updatedBoard = [...board];
    if (updatedBoard[index] === "") {
      updatedBoard[index] = player === "Cross" ? "X" : "O";
      setBoard(updatedBoard);
      if (GameLogic().checkWinner(updatedBoard, player === "Cross" ? "X" : "O")) {
        alert(`${player} wins!`);
        setBoard(Array(9).fill(""));
      } else if (GameLogic().checkTie(updatedBoard)) {
        alert("It's a tie!");
        setBoard(Array(9).fill(""));
      } else {
        setPlayer(player === "Cross" ? "Circle" : "Cross");
      }
    }
  }

  return (
    <>
      <Heading text={"Multiplayer Tic Tac Toe"} />
      <div className='flex justify-center align-center'>
        <Button text={"X"} onSetPlayerHandler={onSetCrossHandler} />
        <Button text={"O"} onSetPlayerHandler={onSetCircleHandler} />
      </div>
      <span className='mx-2 my-4 flex justify-center align-center font-bold text-2xl'>Turn: {player}</span>
      <div className='grid grid-cols-3 gap-3 justify-items-center items-center justify-center content-center'>
        {
          board.map((value, index) => {
            return <GridLayout key={index} playerLogo={value} onClickHandler={() => handleCellClick(index)} />
          })
        }
      </div>
    </>
  )
}

export default App
