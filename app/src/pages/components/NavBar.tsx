import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        IWiH
      </a>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="../About">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Upload
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Extension
            </a>
          </li>
          <li>
            <form className="searchbar">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
