import Img from "../img/IMG_20250128_222538.png";
import "./heder.css"
const Header = () => {
  return (
      <header>
          <img src={Img} alt="asc" style={{ width: "70px", height: "70px" }} />
        <nav>
          <ul>
            <li>
              <a style={{ padding: "10px" }} href="/">
                Home
              </a>
            </li>
            <li>
              <a href="#About">About Us</a>
            </li>
            <li>
              <a href="#Services">Services</a>
            </li>
            <li>
              <a href="#Activity">Activity</a>
            </li>
            <li>
              <a href="#Teem">Team</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
  );
};

export default Header;
