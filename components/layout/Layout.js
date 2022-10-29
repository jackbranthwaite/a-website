import React, { Component } from "react";
import Header from "../header/Header.js";
import s from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={s.Layout}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
