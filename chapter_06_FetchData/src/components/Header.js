import { HEADER_IMAGE } from "../utils/constatnts";

const Header = () => {
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
      </ul>

    </div>
  );
}

export default Header;