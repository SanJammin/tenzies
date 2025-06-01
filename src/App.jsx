import { useState } from "react";
import "./App.css";
import Die from "./Die";

function App() {

  const [dice, setDice] = useState(generateAllNewDice());

  function generateAllNewDice() {
    return new Array(10)
      .fill(0)
      .map(() => Math.ceil(Math.random() * 6));
  }

  function handleClick() {
    setDice(generateAllNewDice());
  }

  const diceElements = dice.map(dieValue => <Die value={dieValue} />);

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
