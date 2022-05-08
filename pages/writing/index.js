import React, { useEffect, useState } from "react";
import WritingCard from "../../components/writing-card/WritingCard";
import s from "../../styles/Writing.module.css";

import { createClient } from "../../prismicio";
import WritingPost from "../../components/writing-post/WritingPost";

const Writing = () => {
  const client = createClient();

  const [posts, setPosts] = useState();
  const [post, setPost] = useState(0);

  const fetchData = async () => {
    return await client
      .getAllByType("writing-pos")
      .then((res) => setPosts(res));
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {}, []);

  if (posts) {
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
  } else {
    return <></>;
  }
};

export default Writing;
