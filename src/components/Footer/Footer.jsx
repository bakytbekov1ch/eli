import React from "react";

import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__block">
            <h1>Фирма</h1>
            <ul>
              <li>Оптом.kg</li>
            </ul>
          </div>
          <div className="footer__block">
            <h1>You</h1>
            <h3>о нас</h3>
            <div className="footer__mx">
              <MdOutlinePhoneInTalk />
              <a href="tel +996507111669">+996507111669</a>
            </div>
            <div className="footer__mx">
              <FaWhatsapp />
              <a href="tel +996507111669">+996507111669</a>
            </div>
          </div>
        </div>
        <p>https://Chunkurchak.kg</p>
      </div>
    </div>
  );
}

export default Footer;
