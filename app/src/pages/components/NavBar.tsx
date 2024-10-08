import "../../styles/NavBar.css";
import logo from "../../assets/iwih_logo.png";
import { Outlet, Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <a className="navbar-brand" href="#">
          <img className="navbar-logo" src={logo} alt="logo" />
          <Link to="/">IWiH</Link>
        </a>
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
          <li>
            <Link to="/research">Research</Link>
          </li>  
            <form className="searchbar">
              <input
                className="form-control search-input"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn search-button" type="submit">
                Search
              </button>
            </form>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navbar;
