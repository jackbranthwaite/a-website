import React, { useState } from "react";
import WritingCard from "../writing-card/WritingCard";
import WritingPost from "../writing-post/WritingPost";
import s from "./Writing.module.scss";

export const Writing = ({ posts }) => {
  const [post, setPost] = useState(0);

  return (
    <div className={s.WritingContainer}>
      <div className={s.WritingLeftContainer}>
        <h2 className={s.WritingTitle}>writing</h2>
        <div className={s.WritingContentContainer}>
          {posts.map((post, i) => {
            return (
              <WritingCard
                content={post.data}
                key={i}
                onClick={() => setPost(i)}
              />
            );
          })}
        </div>
      </div>
      <div className={s.WritingRightContainer}>
        <WritingPost content={posts[post]} />
      </div>
    </div>
  );
};
