import React, { useEffect, useState } from "react";
import WritingCard from "../components/writing-card/WritingCard";
import s from "../styles/Writing.module.css";

import { createClient } from "../prismicio";

const Writing = () => {
  const client = createClient();

  const [posts, setPosts] = useState();

  const fetchData = async () => {
    return await client
      .getAllByType("writing-pos")
      .then((res) => setPosts(res));
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  if (posts) {
    return (
      <div className={s.WritingContainer}>
        <div className={s.WritingWrapperContainer}>
          <div className={s.WritingTitleContainer}>
            <h2 className={s.WritingTitle}>writing</h2>
          </div>
          <div className={s.WritingContentContainer}>
            {posts.map((post, i) => {
              return <WritingCard content={post.data} key={i} />;
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Writing;
