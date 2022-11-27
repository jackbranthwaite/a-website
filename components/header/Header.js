import React, { useEffect, useRef, useState } from "react";
import s from "./Header.module.scss";
import PropTypes from "prop-types";
import Link from "next/link";
import gsap from "gsap";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const lineOne = useRef(null);
  const lineTwo = useRef(null);
  const lineThree = useRef(null);

  const animateIn = () => {
    const tl = gsap.timeline();
    let insertpos = tl.duration();
    tl.to(lineOne.current, { duration: 0.5, rotate: -45, top: 6 });
    tl.to(lineTwo.current, { opacity: 0, top: 6 }, (insertpos = 0));
    tl.to(lineThree.current, { rotate: 45, top: 6 }, (insertpos = 0));
  };

  const animateOut = () => {
    const tl = gsap.timeline();
    let insertpos = tl.duration();
    tl.to(lineOne.current, { duration: 0.5, rotate: 0, top: 0 });
    tl.to(lineTwo.current, { opacity: 1, top: 6 }, (insertpos = 0));
    tl.to(lineThree.current, { rotate: 0, top: 12 }, (insertpos = 0));
  };

  useEffect(() => {
    if (menu) {
      animateIn();
    } else {
      animateOut();
    }
  }, [menu]);

  return (
    <header className={s.HeaderContainer}>
      <Link href={"/"}>
        <a className={s.TitleWrapper}>
          <h2 className={s.Title}>jayne mulligan</h2>
        </a>
      </Link>

      <div className={s.Menu} onClick={() => setMenu(!menu)}>
        <div className={s.MenuContainer}>
          <div className={s.MenuLine} ref={lineOne}></div>
          <div className={s.MenuLine} ref={lineTwo}></div>
          <div className={s.MenuLine} ref={lineThree}></div>
        </div>
        {menu && (
          <div className={s.MenuOpen}>
            <div className={s.MenuList}>
              <Link href={"/about"} className={s.ListItemWrapper}>
                <a className={s.ListItem}>about</a>
              </Link>
              <Link href={"/photography"} className={s.ListItemWrapper}>
                <a className={s.ListItem}>photography</a>
              </Link>
              <Link href={"/writing"} className={s.ListItemWrapper}>
                <a className={s.ListItem}>writing</a>
              </Link>
              <Link href={"/contact"} className={s.ListItemWrapper}>
                <a className={s.ListItem}>contact</a>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
