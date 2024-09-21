import "../App.css";

function Button({ click, number }) {
  return <button onClick={click}>{number}</button>;
}

export default Button;
