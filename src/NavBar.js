import React from "react";
import styled from "styled-components";

const StyledNavBar = styled.nav`
  background-color: black;
`;

export default function NavBar() {
  return (
    <StyledNavBar className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="https://www.nasa.gov" alt="NASA logo">
        <img
          src="https://www.nasa.gov/sites/default/files/files/nasa_insignia_300.jpg"
          alt="NASA logo"
          height="100px"
          width="100px"
        />
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a name="home" className="nav-link" href="#home">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Rover
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Explanation
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown link
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
        </ul>
      </div>
    </StyledNavBar>
  );
}
