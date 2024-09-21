import { useState } from "react";
import "./App.css";

function App() {
  const [forma, setForm] = useState("");

  const handleForm = (e) => {
    setForm({ ...forma, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <h1>Teksto atvaizdavimas</h1>
      <input
        name="text"
        type="text"
        className="form-control"
        onChange={(e) => handleForm(e)}
      />
      <div></div>
      <h2>duomenys</h2>
      <form>
        <input
          type="text"
          placeholder="vardas"
          name="name"
          onChange={(e) => handleForm(e)}
        />
        <input
          type="text"
          placeholder="pavarde"
          name="surname"
          onChange={(e) => handleForm(e)}
        />
        <input
          type="text"
          placeholder="telefono nr."
          name="phone"
          onChange={(e) => handleForm(e)}
        />
        <textarea placeholder="zinute"></textarea>
        <button>Send</button>
      </form>
      <ul>
        <li>vardas: {forma.name}</li>
        <li>pavarde: {forma.surname}</li>
        <li>telefonas: {forma.phone}</li>
      </ul>
    </div>
  );
}

export default App;
