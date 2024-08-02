import React, { useState } from "react";

import { IoSearch } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";

import "./Header.scss";
import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";

function Header() {
  const [popup, setPopup] = useState();

  return (
    <div className="header">
      <div className="container">
        <div className="header__content">
          <Link to="/">
            <h1>Chunkurchak.kg</h1>
          </Link>
          <div className="header__btn">
            <div className="header__block">
              <input type="text" placeholder="Search" />
              <IoSearch className="header__search" />
            </div>
            <FiMenu onClick={() => setPopup(!popup)} className="header__menu" />
          </div>
        </div>
      </div>
      {popup && (
        <div className="menu">
          <Menu />
        </div>
      )}
    </div>
  );
}

export default Header;
