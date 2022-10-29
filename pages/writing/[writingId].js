import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { Reader } from "../../components/reader/Reader";
import { createClient } from "../../prismicio";

const ReaderPage = () => {
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
    return <Reader data={post.data} />;
  }
};

export default ReaderPage;
