import React, { useEffect, useRef, useState } from "react";
import s from "./Header.module.scss";
import PropTypes from "prop-types";
import Link from "next/link";
import gsap from "gsap";
import Three from "../../assets/svg/shapes/three.svg";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const lineOne = useRef(null);
  const lineTwo = useRef(null);
  const lineThree = useRef(null);
  const openMenu = useRef(null);
  const shape = useRef(null);

  const animateIn = () => {
    const tl = gsap.timeline();
    let insertpos = tl.duration();
    tl.to(lineOne.current, { duration: 0.5, rotate: -45, top: 6 });
    tl.to(lineTwo.current, { opacity: 0, top: 6 }, (insertpos = 0));
    tl.to(lineThree.current, { rotate: 45, top: 6 }, (insertpos = 0));
    tl.to(shape.current, { opacity: 1 }, (insertpos = 0));
    tl.to(openMenu.current, { opacity: 1 }, (insertpos = 0));
  };

  const animateOut = () => {
    const tl = gsap.timeline();
    let insertpos = tl.duration();
    tl.to(shape.current, { duration: 0.5, opacity: 0 });
    tl.to(openMenu.current, { opacity: 0 }, (insertpos = 0.2));
    tl.to(lineOne.current, { rotate: 0, top: 0 }, (insertpos = 0.2));
    tl.to(lineTwo.current, { opacity: 1, top: 6 }, (insertpos = 0.2));
    tl.to(lineThree.current, { rotate: 0, top: 12 }, (insertpos = 0.2));
  };

  useEffect(() => {
    if (menu) {
      animateIn();
    } else {
      animateOut();
    }
  }, [menu]);

  return (
    <>
      <div ref={shape} className={s.SVG}>
        <Three height={300} />
      </div>
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
            <div className={s.MenuOpen} ref={openMenu}>
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
    </>
  );
};

export default Header;
