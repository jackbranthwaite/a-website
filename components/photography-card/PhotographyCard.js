import React, { useEffect } from "react";
import s from "./PhotographyCard.module.scss";
import PropTypes from "prop-types";

const PhotographyCard = ({ content, onClick }) => {
  useEffect(() => {
    console.log(content);
  }, []);

  if (!content) return <></>;
  return (
    <div
      className={s.PhotographyCardContainer}
      onClick={onClick}
      style={{ backgroundImage: `url(${content.header_image.url})` }}
    >
      <h3 className={s.WritingCardTitle}>{content.title[0].text}</h3>
      {/* <p className={s.WritingCardDescription}>{content.content[0].text}</p> */}
    </div>
  );
};

PhotographyCard.propTypes = {
  content: PropTypes.object,
  onClick: PropTypes.func,
};

export default PhotographyCard;
