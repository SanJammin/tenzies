import { useState } from "react";
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
          isHeld: false
        };
      });
  }

  function handleClick() {
    setDice(generateAllNewDice());
  }

  const diceElements = dice.map(num => <Die value={num.value} isHeld={num.isHeld} />);

  return (
    <>
      <main>
        <div className="dice-holder">
          {diceElements}
        </div>
        <button className="roll" onClick={handleClick}>Roll</button>
      </main>
    </>
  );
}

export default App;
