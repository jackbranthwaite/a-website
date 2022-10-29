import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { GalleryView } from "../../components/gallery-view/GalleryView";
import { createClient } from "../../prismicio";

const Reader = () => {
  const client = createClient();
  const router = useRouter();
  const { photoId } = router.query;

  const [post, setPost] = useState();

  const fetchData = async () => {
    if (photoId) {
      return await client
        .getByUID("photography-post", `${photoId}`)
        .then((res) => setPost(res))
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    fetchData();
  }, [photoId]);

  if (!post) {
    return <></>;
  } else {
    return <GalleryView data={post.data} />;
  }
};

export default Reader;
