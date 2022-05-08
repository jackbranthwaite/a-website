import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { createClient } from "../../prismicio";
import s from "../../styles/Reader.module.css";

const Reader = () => {
  const client = createClient();
  const router = useRouter();
  const { writingId } = router.query;

  const [post, setPost] = useState();

  const fetchData = async () => {
    if (writingId) {
      return await client
        .getByUID("writing-pos", `${writingId}`)
        .then((res) => setPost(res));
    }
  };

  useEffect(() => {
    fetchData();
  }, [writingId]);

  if (!post) {
    return <></>;
  } else {
    return (
      <div className={s.ReaderContainer}>
        <div className={s.ReaderWrapper}>
          <h2>{post.data.title[0].text}</h2>
          <p>{post.data.content[0].text}</p>
        </div>
      </div>
    );
  }
};

export default Reader;
