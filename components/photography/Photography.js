import React, { useState } from "react";
import PhotographyCard from "../photography-card/PhotographyCard";
import PhotographyPost from "../photography-post/PhotographyPost";
import s from "./Photography.module.scss";

export const Photography = ({ posts }) => {
  const [post, setPost] = useState(0);

  return (
    <div className={s.PhotographyContainer}>
      <div className={s.PhotographyLeft}>
        <div className={s.TitleContainer}>
          <h2 className={s.PhotographyTitle}>photography</h2>
          <div className={s.ContentContainer}>
            {posts.map((item, i) => {
              return (
                <PhotographyCard
                  key={i}
                  content={item.data}
                  onClick={() => setPost(i)}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className={s.PhotographyRight}>
        <PhotographyPost content={posts[post]} />
      </div>
    </div>
  );
};
