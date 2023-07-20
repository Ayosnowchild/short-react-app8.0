import "./Nav.css";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav>
      <div className="nav-sec">
        <p className="nav-title">OurApp</p>
        <div className="nav-nav">
          <Link to="/" className="link">
            <p>Home</p>
          </Link>
          <Link to="/sign-in" className="link">
            <p>Sign In</p>
          </Link>
          <Link to="/sign-up" className="link">
            <p>Sign Up</p>
          </Link>
          <Link to="profile" className="link">
            <p>Profile</p>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
