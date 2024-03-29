import React, { useState } from 'react'
import styled from 'styled-components'

const NumberSelector = ({error, selectedNumber, setSelectedNumber}) => {
    const numbers= [1,2,3,4,5,6];
    // since we have removed useState of number selector 
    // to match the selected number with the dice one (rollDice's state is also removed)
    // but here, selected number and setSelectedNumber is being used
    // so we have to pass them as props to the parent.
    // and create these props by going where the NumberSelector file is imported.
    // i.e, in Gameplay

  return (
    <NumberSelectorContainer>
    <p className='error'>{error}</p>
    <div className='selectionBoxes'>  
        {/* <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box> */}

        {/* insted of making multiple boxed like this, we can use javascript here, and use map fxn.
        MAP is used over an array. all the objects of the array can be mapped to same kind of container */}
        {
            numbers.map((value,i) => (<Box 
                isSelected= {value == selectedNumber}   //this is a prop defined. will be used to make box black when selected.
                key={i}
                onClick={() => setSelectedNumber(value)}  // callback is used(DOUBT)
                >{value}</Box>)
            )
        }
    </div>
    <p>Select a Number</p>
    </NumberSelectorContainer>
  )
}

export default NumberSelector

const Box= styled.div   `
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center; // this property is used to place items in the centre in a box. but display: grid must be used.
    font-size: 24px;
    font-weight: 700px;
    background-color: ${(props) => props.isSelected ? "black" :  "white" };
    color: ${(props) => props.isSelected ? "white" :  "black" };
`;

const NumberSelectorContainer = styled.div`
display: flex;
flex-direction: column;
align-items:end;    // to use this, we must do display flex first.
margin-right: 24px;

    .error{
        color: red;
        font-size: large;
        font-weight: 400;
    }
    .selectionBoxes{
        display: flex;
        gap: 24px;
        
    }

    p{
        font-size: 24px;
        font-weight: 700;
        margin-top: 20px;
    }
`;
