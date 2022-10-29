import React from "react";
import s from "./GalleryView.module.scss";

export const GalleryView = ({ data }) => {
  return (
    <div className={s.PhotoContainer}>
      <div className={s.PhotoWrapper}>
        <h2>{data.title[0].text}</h2>
      </div>
      <div className={s.GalleryContainer}>
        {data.body[0].items.map((item, i) => {
          return (
            <img
              src={item.image.url}
              key={i}
              alt={item.alt}
              className={s.Image}
            />
          );
        })}
      </div>
    </div>
  );
};
