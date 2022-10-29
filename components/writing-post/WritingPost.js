import React from "react";
import PropTypes from "prop-types";
import s from "./WritingPost.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";

const WritingPost = ({ content }) => {
  const date = new Date(content.last_publication_date).toDateString();
  const router = useRouter();

  const navigate = () => {
    router.push(`/router/${content.uid}`);
  };

  return (
    <div className={s.WritingPostContainer}>
      <h2 className={s.PostTitle}>{content.data.title[0].text}</h2>
      <div className={s.PostAuthorButton}>
        <p className={s.PostDate}>{date}</p>
        <Link href={`/writing/${content.uid}`}>
          <a
            className={s.NavigateButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            view in reader window
          </a>
        </Link>
      </div>
      <p className={s.PostContent}>{content.data.content[0].text}</p>
      <p className={s.PostAuthor}>{content.data.author[0].text}</p>
    </div>
  );
};

WritingPost.propTypes = {
  content: PropTypes.object,
};

export default WritingPost;
