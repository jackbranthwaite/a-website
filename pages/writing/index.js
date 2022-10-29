import React, { useEffect, useState } from "react";
import { createClient } from "../../prismicio";
import { Writing } from "../../components/writing/Writing";

const WritingPage = () => {
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

  useEffect(() => {}, []);

  if (posts) {
    return <Writing posts={posts} />;
  } else {
    return <></>;
  }
};

export default WritingPage;
