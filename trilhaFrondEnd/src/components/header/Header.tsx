import { useState } from "react";
import "./Header.css";
import { IconContext } from "react-icons";

import { FaWindowClose } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

interface Props {
  lightTheme: boolean;
  changeTheme: () => void;
}

const Header: React.FC<Props> = ({ lightTheme, changeTheme }) => {
  const [menuMobile, setMenuMobile] = useState<Boolean>(false);
  const menuOptions = [
    ["Habilidades", "#skills"],
    ["Hobbies", "#hobbies"],
    ["Motivação", "#motivation"],
  ];

  const handleMenuOpen = () => {
    setMenuMobile(!menuMobile);
  };

  return (
    <div className="header">
      <div className="header__container">
      <div className="header__options">
        <div className="header__logo">
          <img src="./img/logo.png" alt="Logo" className="header__logo-img" />
        </div>
        <div className="header__menu menu">
          <IconContext.Provider
            value={{ className: "menu__icon", size: "30px" }}
          >
            <div
              className={`${menuMobile ? "rotate" : "rotate-inverse"}`}
              onClick={handleMenuOpen}
            >
              {menuMobile ? <FaWindowClose /> : <GiHamburgerMenu />}
            </div>
          </IconContext.Provider>
        </div>
      </div>

      <nav className={`menu__nav ${menuMobile ? "visible" : "hidden"} `}>
        <ul className="menu__list">
          {menuOptions.map((option) => (
            <li className="menu__item" onClick={handleMenuOpen}>
              <a className="menu__item-link" href={option[1]}>
                {option[0]}
              </a>
            </li>
          ))}
          <label className="switch">
              <input type="checkbox" checked={lightTheme} onChange={changeTheme} />
              <span className="slider round"></span>
            </label>
        </ul>
      </nav>
      </div>
      
      
    </div>
  );
};

export default Header;
