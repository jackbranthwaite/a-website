import React, { useEffect, useState } from "react";
import PhotographyCard from "../../components/photography-card/PhotographyCard";
import PhotographyPost from "../../components/photography-post/PhotographyPost";
import { Photography } from "../../components/photography/Photography";
import { createClient } from "../../prismicio";

const PhotographyPage = () => {
  const client = createClient();
  const [posts, setPosts] = useState();

  const fetchData = async () => {
    const res = await client.getAllByType("photography-post");

    setPosts(res);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!posts) {
    return <></>;
  } else {
    return <Photography posts={posts} />;
  }
};

export default PhotographyPage;
