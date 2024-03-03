import React, { useState } from 'react'
import styled from 'styled-components';

const RollDice = () => {
    const [currentDice, setCurrentDice] = useState(1);

    const generateRandom = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const rollDice = () =>  {
        const random= generateRandom(1,6);
        setCurrentDice((prev)=>random);
    }

  return (
    <DiceContainer>
    <div className='dice' onClick={rollDice}>
        <img 
        
        src={`/numbers/dice_${currentDice}.png`} alt="dice1" />
    </div>

    <p>Click on the dice to roll</p>
    </DiceContainer>
  )
}

export default RollDice;


const DiceContainer = styled.div`
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    p{
        font-size: 24px;
    }
    
    .dice{
        cursor:pointer;
    }
`;