import React, { useEffect } from "react";
import PropTypes from "prop-types";
import s from "./PhotographyPost.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const PhotographyPost = ({ content }) => {
  const date = new Date(content.last_publication_date).toDateString();
  const router = useRouter();

  if (!content) return <></>;
  return (
    <div className={s.WritingPostContainer}>
      <div className={s.TopWrapper}>
        <h2 className={s.PostTitle}>{content.data.title[0].text}</h2>
        <div className={s.PostAuthorButton}>
          <div>
            <p className={s.PostDate}>{date}</p>
            <p className={s.PostAuthor}>{content.data.author[0].text}</p>
          </div>
          <Link href={`/photography/${content.uid}`}>
            <a
              className={s.NavigateButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              view in another window
            </a>
          </Link>
        </div>
      </div>
      <div className={s.GalleryContainer}>
        {content.data.body[0].items.map((item, i) => {
          return (
            <img
              className={s.Image}
              src={item.image.url}
              key={i}
              alt={item.image.alt}
            />
          );
        })}
      </div>
    </div>
  );
};

PhotographyPost.propTypes = {
  content: PropTypes.object,
};

export default PhotographyPost;
