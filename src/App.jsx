import { useState } from 'react'
import './App.css'
import Button from './components/Button/Button'
import GridLayout from './components/GridLayout/GridLayout'
import Heading from './components/Heading/Heading'

function App() {

  const [player, setPlayer] = useState("Cross");

  function onSetCrossHandler() {
    setPlayer("Cross");
  }
  function onSetCircleHandler() {
    setPlayer("Circle");
  }

  return (
    <>
      <Heading text={"Multiplayer Tic Tac Toe"} />
      <div className='flex justify-center align-center'>
        <Button text={"X"} onSetPlayerHandler={onSetCrossHandler} />
        <Button text={"O"} onSetPlayerHandler={onSetCircleHandler} />
      </div>
      <span className='mx-2 my-4 flex justify-center align-center font-bold text-2xl'>Turn: {player}</span>
      <div className='mx-2 my-4 flex justify-center align-center'>
        <GridLayout onClickHandler={() => { console.log("Clicked") }} />
      </div>
    </>
  )
}

export default App
