import "./Navbar.css";
import { Outlet, Link } from "react-router-dom";
import { useState, FormEvent } from "react";
import logo from "../../assets/iwih_logo.png";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle the search logic here (e.g., navigate to search results page)
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="navbar">
      <a className="navbar-brand" href="#">
        <img className="navbar-logo" src={logo} alt="Logo" />
        <Link to="/">iWiH</Link>
      </a>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <div className="navbar-search">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <Outlet />
    </div>
  );
}

export default Navbar;
