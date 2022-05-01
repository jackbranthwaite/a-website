import React from "react";
import s from "./WritingCard.module.css";
import PropTypes from "prop-types";

const WritingCard = ({ title, description }) => {
  return (
    <div className={s.WritingCardContainer}>
      <h3 className={s.WritingCardTitle}>{title}</h3>
      <p className={s.WritingCardDescription}>{description}</p>
    </div>
  );
};

WritingCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default WritingCard;
