import React, { useState } from "react";
import s from "./Header.module.css";
import PropTypes from "prop-types";

const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <header className={s.HeaderContainer}>
      <div className={s.CenterContent}>
        <h3>jayne mulligan</h3>
        <div className={s.MenuContainer}>
          <div className={s.MenuLine}></div>
          <div className={s.MenuLine}></div>
          <div className={s.MenuLine}></div>
        </div>
        <div className={s.MenuOpen}>
          <ul className={s.MenuList}>
            <li>photography</li>
            <li>writing</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
