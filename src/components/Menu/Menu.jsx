import React from "react";

import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

import "./Menu.scss";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="menu">
      <div className="container">
        <div className="menu__content">
          <ul>
            <Link to="/about">
              <li>О нас</li>
            </Link>
            <Link to="/basket">
              <li>Корзина</li>
            </Link>
            <Link to="/">
              <li>Главный</li>
            </Link>
            <Link to="/admin">
              <li>Админ</li>
            </Link>
            <li>
              <MdOutlinePhoneInTalk />
              <a href="tel +996507111669">+996507111669</a>
            </li>
            <li>
              <FaWhatsapp />
              <a href="tel +996507111669">+996507111669</a>
            </li>
            <Link to="/">
              <li style={{ color: "red" }}>Выйты</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Menu;
