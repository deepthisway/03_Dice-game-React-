import React from 'react'
import styled from 'styled-components';

const StartGame = ({toggle}) => {
  return (
    <Container>
        <div>
        <img src="/Dices/dice1.png" /> {/*We have put this image in div becaus when se set height to 100vh of this container, then it stretches, so we have exculuded iut from that property.*/}
        </div>
        <div className='content' >
            <h1>Dice Game</h1>
            <Button onClick={toggle}>
                Start Game
            </Button>
        </div>
    </Container>
  )
}

export default StartGame;

const Container = styled.div `
    max-width: 1180px;
    display: flex;
    height: 100vh;
    align-items: center;
    margin: 0 auto;
    
    .content h1{
            font-size: 96px;
            white-space:nowrap ; // this can be used to bring Dice Ganme text in one line
        }
    `;

const Button = styled.button `
    background-color: black;
    color: white;
    min-width: 220px;
    border: none;
    padding: 10px 18px;
    border-radius: 5px;
    font-size: 16px;
    border: 1px solid transparent;
    transition: 0.2s background ease-in ;
    cursor: pointer;

    &:hover{
        background-color: white;
        color: black;
        border: 1px solid black;
        transition: 0.2s background ease-in ;
    }

`;
