import React from "react";
import "./sideber.css";
import logo from "./img/logo.svg";
import rasm1 from "./img/rasm1.svg";
import rasm3 from "./img/rasm3.svg";
import rasm4 from "./img/rasm4.svg";
import rasm5 from "./img/rasm5.svg";
import rasm6 from "./img/rasm6.svg";
import rasm7 from "./img/rasm7.svg";
import rasm8 from "./img/rasm8.svg";
import rasm9 from "./img/rasm9.svg";
import rasm10 from "./img/rasm10.svg";
import rasm11 from "./img/rasm11.svg";
import rasm12 from "./img/rasm12.svg";
import rasm14 from "./img/rasm14.svg";
import rasm16 from "./img/rasm16.svg";
import rasm18 from "./img/rasm18.svg";
import rasm19 from "./img/rasm19.svg";
import rasm25 from "./img/rasm25.svg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-image" />
        <img src={rasm1} alt="Logo 2" className="logo-secondary" />
      </div>
      <ul className="menu">
        <li>
          <img src={rasm3} alt="" />
          Anasayfa
        </li>
        <li>
          <img src={rasm4} alt="" />
          Keşfet
        </li>
        <li>
          <img src={rasm5} alt="" />
          Abonelikler
        </li>
        <li>
          <img src={rasm6} alt="" />
          Kitaplık
        </li>
        <li>
          <img src={rasm7} alt="" />
          Geçmiş
        </li>
        <li>
          <img src={rasm8} alt="" />
          Videolarınız
        </li>
        <li>
          <img src={rasm9} alt="" />
          Daha sonra izle
        </li>
        <li>
          <img src={rasm10} alt="" />
          Beğendiğim videolar
        </li>
        <li>
          <img src={rasm11} alt="" />
          Daha fazla göster
        </li>
        <li>ABONELİKLER</li>
        <li>
          <img src={rasm12} alt="" />
          The game
        </li>
        <li>
          <img src={rasm14} alt="" />
          Lean Yo
        </li>
        <li>
          <img src={rasm16} alt="" />
          Best Kuaför
        </li>
        <li>
          <img src={rasm18} alt="" />
          Meyau Seu
        </li>
        <li>
          <img src={rasm19} alt="" />
          Discover Design
        </li>
        <li>
          <img src={rasm25} alt="" />
          Youtube Premium
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
