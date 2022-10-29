import React from "react";
import HomepageCard from "../homepage-card/HomepageCard";
import s from "./HomepageContainer.module.scss";

export const HomepageContainer = () => {
  return (
    <div className={s.HomepageContentContainer}>
      <HomepageCard title="writing" />
      <HomepageCard title="photography" />
    </div>
  );
};
