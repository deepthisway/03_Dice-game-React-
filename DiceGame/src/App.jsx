import { React, useState } from 'react'
import './App.css'
import styled from "styled-components"
import StartGame from './Components/StartGame'
import GamePlay from './Components/GamePlay';

function App() {
  const [gameStarted, setGameStarted] = useState(true);

  const toggleGamePlay = () =>  {
    setGameStarted(prev => !prev);

  }
  return (
    <>
    {gameStarted ? <GamePlay/> : <StartGame
    toggle={toggleGamePlay}
    />}
    </>
  )
}

export default App
