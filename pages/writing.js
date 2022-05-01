import React from "react";
import WritingCard from "../components/writing-card/WritingCard";
import s from "../styles/Writing.module.css";

const Writing = () => {
  return (
    <div className={s.WritingContainer}>
      <div className={s.WritingContentContainer}>
        <div className={s.WritingTitleContainer}>
          <h2 className={s.WritingTitle}>writing</h2>
        </div>
        <div className={s.WritingContentContainer}>
          <WritingCard
            title="test title"
            description="this is a test description to be able to make sure that the card will not look silly from the length of it."
          />
        </div>
      </div>
    </div>
  );
};

export default Writing;
