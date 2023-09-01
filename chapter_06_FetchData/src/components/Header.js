import { HEADER_IMAGE } from "../utils/constatnts";
import { useState } from "react";

const Header = () => {
  const [loggedIn, setLoggedIn] = useState("Login");
  return (
    <div className="navbar">
      <div className="logo-container">
        <img src={HEADER_IMAGE} alt="Food App" />
      </div>

      <ul className="nav-items">
        <li><a href="">Home</a></li>
        <li><a href="">About Us</a></li>
        <li><a href="">Contact Us</a></li>
        <li><a href="">Cart</a></li>
        <li><button className="log-btn" onClick={() => {setLoggedIn(loggedIn === "Login" ? "Logout" : "Login")}}>{loggedIn}</button></li>
      </ul>

    </div>
  );
}

export default Header;