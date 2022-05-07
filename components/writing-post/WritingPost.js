import React from "react";
import PropTypes from "prop-types";
import s from "./WritingPost.module.css";

const WritingPost = ({ content }) => {
  return (
    <div className={s.WritingPostContainer}>
      <h2 className={s.PostTitle}>{content.data.title[0].text}</h2>
      <div className={s.PostAuthorDate}>
        <p className={s.PostDate}>{content.last_publication_date}</p>
        <p className={s.PostAuthor}></p>
        <p className={s.PostContent}>{content.data.content[0].text}</p>
      </div>
    </div>
  );
};

WritingPost.propTypes = {
  content: PropTypes.object,
};

export default WritingPost;
