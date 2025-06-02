import { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import Die from "./Die";

function App() {

  const [dice, setDice] = useState(generateAllNewDice());

  function generateAllNewDice() {
    return new Array(10)
      .fill(null)
      .map(() => {
        return {
          value: Math.ceil(Math.random() * 6),
          isHeld: false,
          id: nanoid()
        };
      });
  }

  function handleClick() {
    setDice(prevDice => prevDice.map(die => {
      return die.isHeld ? die : {...die, value: Math.ceil(Math.random() * 6)}
    }));
  }

  function holdDie(id) {
    setDice(prevDice => prevDice.map(die => {
      return die.id === id ? {...die, isHeld: !die.isHeld} : die;
    }));
  }

  const diceElements = dice.map(dieObj => (
    <Die 
      key={dieObj.id} 
      value={dieObj.value} 
      isHeld={dieObj.isHeld} 
      onClick={() => holdDie(dieObj.id)}
    />
  ));

  return (
    <>
      <main>
        <h1 className="title">Tenzies</h1>
        <p className="instructions">
          Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
        </p>
        <div className="dice-holder">
          {diceElements}
        </div>
        <button className="roll" onClick={handleClick}>Roll</button>
      </main>
    </>
  );
}

export default App;
