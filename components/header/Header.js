import React, { useState } from "react";
import s from "./Header.module.css";
import PropTypes from "prop-types";
import Link from "next/link";

const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <header className={s.HeaderContainer}>
      <div className={s.CenterContent}>
        <Link href={"/"}>
          <a>
            <h2>jayne mulligan</h2>
          </a>
        </Link>
        <div className={s.MenuContainer}>
          <div className={s.MenuLine}></div>
          <div className={s.MenuLine}></div>
          <div className={s.MenuLine}></div>
        </div>
        <div className={s.MenuOpen}>
          <ul className={s.MenuList}>
            <div className={s.ListItemWrapper}>
              <li className={s.ListItem}>photography</li>
            </div>
            <div className={s.ListItemWrapper}>
              <li className={s.ListItem}>writing</li>
            </div>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
