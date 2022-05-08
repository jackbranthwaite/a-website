import React, { useState } from "react";
import s from "./Header.module.css";
import PropTypes from "prop-types";
import Link from "next/link";

const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <header className={s.HeaderContainer}>
      <Link href={"/"}>
        <a className={s.TitleWrapper}>
          <h2 className={s.Title}>jayne mulligan</h2>
        </a>
      </Link>
      <div className={s.Menu}>
        <div className={s.MenuContainer}>
          <div className={s.MenuLine}></div>
          <div className={s.MenuLine}></div>
          <div className={s.MenuLine}></div>
        </div>
        <div className={s.MenuOpen}>
          <div className={s.MenuList}>
            <Link href={"/photography"} className={s.ListItemWrapper}>
              <a className={s.ListItem}>photography</a>
            </Link>
            <Link href={"/writing"} className={s.ListItemWrapper}>
              <a className={s.ListItem}>writing</a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
