const Header = () => {
  return (
    <header
      style={{
        zIndex: "1000",
        height: "70px",
        position: "fixed",
        width: "100%",
        backgroundColor: "#303030",
        textAlign: "center",
        color: "white",
      }}
    >
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
