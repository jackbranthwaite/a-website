import React from "react";
import s from "./Reader.module.scss";

export const Reader = ({ data }) => {
  return (
    <div className={s.ReaderContainer}>
      <div className={s.ReaderWrapper}>
        <h2>{data.title[0].text}</h2>
        <p>{data.content[0].text}</p>
      </div>
    </div>
  );
};
