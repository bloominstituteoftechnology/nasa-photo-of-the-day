import React from "react";
import Socials from '../Socials/Socials';

import './header.css';

function Header() {
  return (
    <header class="header-headerbar">
          <p className="header-category"><span>Photography</span> <span className="divider">|</span> Photogallery</p>
          <h1>Photo Of the day</h1>
          <Socials />

    </header>
  );
}

export default Header;
