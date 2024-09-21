import "./App.css";
import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [action, setAction] = useState();
  const [result, setResult] = useState();

  const handleDigits = (e) => {
    if (!action) {
      if (first === "0") return;
      setFirst((value) => value + e.target.textContent);
    } else {
      if (second === "0") return;
      setSecond((value) => value + e.target.textContent);
    }
  };

  return (
    <div className="calculator">
      <p className="calculation-field">
        {first} {second}
      </p>

      <p>
        <Button click={handleDigits} number={1} />
        <Button click={handleDigits} number={2} />
        <Button click={handleDigits} number={3} />

        <button
          className="orange-button"
          onClick={(e) => {
            if (first !== "") setAction(e.target.textContent);
          }}
        >
          +
        </button>
      </p>

      <p>
        <Button click={handleDigits} number={4} />
        <Button click={handleDigits} number={5} />
        <Button click={handleDigits} number={6} />

        <button
          className="orange-button"
          onClick={(e) => {
            if (first !== "") setAction(e.target.textContent);
          }}
        >
          -
        </button>
      </p>

      <p>
        <Button click={handleDigits} number={7} />
        <Button click={handleDigits} number={8} />
        <Button click={handleDigits} number={9} />

        <button
          className="orange-button"
          onClick={(e) => {
            if (first !== "") setAction(e.target.textContent);
          }}
        >
          *
        </button>
      </p>

      <p>
        <Button click={handleDigits} number={0} />

        <button>.</button>

        <button>=</button>

        <button
          className="orange-button"
          onClick={(e) => {
            if (first !== "") setAction(e.target.textContent);
          }}
        >
          /
        </button>
      </p>

      <button className="clear-button">Clear</button>
    </div>
  );
}

export default App;
