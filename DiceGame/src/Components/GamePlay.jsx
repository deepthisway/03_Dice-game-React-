import React, { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RollDice from "./RollDice";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  // the above 2 states have been extraced from their respective files
  // because to comapre them(scores), it is requierd to keep them in a file.
  const generateRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const rollDice = () => {
    if(!selectedNumber) {
        setError("Please select number first.");
      return; // guard to not affect score if any number is not selected.
    }
    setError(" ");
    
    const ournumber = generateRandom(1, 6);
    setCurrentDice((prev) => ournumber);


    if (selectedNumber == ournumber) {
      setScore((prev) => prev + ournumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };

  return (
    <MainSection>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
        error= {error}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RollDice currentDice={currentDice} rollDice={rollDice} />
    </MainSection>
  );
};

export default GamePlay;

const MainSection = styled.div`
  .top_section {
    display: flex;
    justify-content: space-between;
    align-items: end;
    padding-top: 70px;
  }
`;
