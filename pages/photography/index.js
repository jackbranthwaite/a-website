import React, { useEffect, useState } from "react";
import PhotographyCard from "../../components/photography-card/PhotographyCard";
import PhotographyPost from "../../components/photography-post/PhotographyPost";
import { createClient } from "../../prismicio";
import s from "../../styles/Photography.module.css";

const Photography = () => {
  const client = createClient();
  const [posts, setPosts] = useState();
  const [post, setPost] = useState(0);

  const fetchData = async () => {
    return await client
      .getAllByType("photography-post")
      .then((res) => setPosts(res));
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(post);
  }, [post]);
  if (!posts) {
    return <></>;
  } else {
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
  }
};

export default Photography;
