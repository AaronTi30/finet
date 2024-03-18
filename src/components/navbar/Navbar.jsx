import "./navbar.scss";
import Links from "./links/Links";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <a href="/">FINET</a>
        <div className="links">
          <a href="/about">About</a>
          <a href="/students">Students</a>
          <a href="/rep">Representatives</a>
          <a href="/signup">Sign Up</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
