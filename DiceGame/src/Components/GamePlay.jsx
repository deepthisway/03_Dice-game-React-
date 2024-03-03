import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RollDice from './RollDice'

const GamePlay = () => {
  return (
    <MainSection>
      <div className='top_section'>
          <TotalScore/>
          <NumberSelector/>
      </div>
    <RollDice/>
    </MainSection>
  )
}

export default GamePlay;

const MainSection = styled.div`
    .top_section{
      display: flex;
      justify-content: space-between;
      align-items: end;
      padding-top: 70px;
    }

`;


