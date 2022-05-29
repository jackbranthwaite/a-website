import React, { useRef, useEffect } from "react";
import s from "./Menu.module.css";
import PropTypes from "prop-types";
import gsap from "gsap";

const Menu = ({ state, onClick }) => {
  useEffect(() => {}, [state]);

  return (
    <div className={s.MenuContainer} onClick={onClick}>
      <div
        className={
          s.MenuLine + (state ? " " + s.LineOne : " " + s.LineCloseOne)
        }
      ></div>
      <div
        className={
          s.MenuLine + (state ? " " + s.LineTwo : " " + s.LineCloseTwo)
        }
      ></div>
      <div
        className={
          s.MenuLine + (state ? " " + s.LineThree : " " + s.LineCloseThree)
        }
      ></div>
    </div>
  );
};

Menu.propTypes = {
  state: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Menu;
