import { useState } from "react";
import "./App.css";
import Die from "./Die";

function App() {

  return (
    <>
      <main>
        <div className="dice-holder">
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
        </div>
      </main>
    </>
  );
}

export default App;
