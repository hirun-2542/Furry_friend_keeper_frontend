import { useState } from 'react';

function Navbar() {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
   <nav className="navbar navbar-expand-lg ">
      <div className="container">
        <a className="navbar-brand navbar-head fw-bold text-uppercase" href="#">
          Furry Friend Keeper
        </a>
        <div className="dropdown">
          <button
            id="dropdownMenuButton"
            className="navbar-toggler"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="true"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <ul className={isDropdownOpen ? 'dropdown-menu show' : 'dropdown-menu'} aria-labelledby="dropdownMenuButton">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
        <div className="nav-page collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="btn btn-outline-primary" href="#">
                Sign up
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="bi bi-person fs-3"></i>
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar
