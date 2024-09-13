import "./Header.css";
import logo from "./mybank-logo-vector.svg";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src={logo} />
        </div>
        <nav>
          <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>SERVICE</li>
            <li>CONTACT</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
