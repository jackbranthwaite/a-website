import React from "react";
import s from "./WritingCard.module.css";
import PropTypes from "prop-types";

const WritingCard = ({ content, onClick }) => {
  return (
    <div className={s.WritingCardContainer} onClick={onClick}>
      <h3 className={s.WritingCardTitle}>{content.title[0].text}</h3>
      <p className={s.WritingCardDescription}>{content.content[0].text}</p>
    </div>
  );
};

WritingCard.propTypes = {
  content: PropTypes.object,
  onClick: PropTypes.func,
};

export default WritingCard;
