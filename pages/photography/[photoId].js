import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { createClient } from "../../prismicio";
import s from "../../styles/GalleryView.module.css";

const Reader = () => {
  const client = createClient();
  const router = useRouter();
  const { photoId } = router.query;

  const [post, setPost] = useState();

  const fetchData = async () => {
    if (photoId) {
      console.log(photoId);
      return await client
        .getByUID("photography-post", `${photoId}`)
        .then((res) => setPost(res))
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    fetchData();
    console.log(post);
  }, [photoId]);

  useEffect(() => {
    console.log(post);
  }, [post]);

  if (!post) {
    return <></>;
  } else {
    return (
      <div className={s.PhotoContainer}>
        <div className={s.PhotoWrapper}>
          <h2>{post.data.title[0].text}</h2>
        </div>
        <div className={s.GalleryContainer}>
          {post.data.body[0].items.map((item, i) => {
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
  }
};

export default Reader;
