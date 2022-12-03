import React from "react";
import s from "./HomepageCard.module.scss";
import PropTypes from "prop-types";
import BackgroundOne from "../../assets/images/mathias-p-r-reding-reffXHzUiF8-unsplash.jpg";
import BackgroundTwo from "../../assets/images/matthew-woinarowicz--ZIfQqO1K1o-unsplash.jpg";
import Link from "next/link";
import ShapeOne from "../../assets/shapes/orange.png";
import ShapeTwo from "../../assets/shapes/green.png";

const HomepageCard = ({ title }) => {
  return (
    <Link href={`/${title}`}>
      <a
        className={s.HomepageCard}
        style={
          title === "writing"
            ? {
                backgroundImage: `url(${BackgroundOne.src})`,
              }
            : {
                backgroundImage: `url(${BackgroundTwo.src})`,
              }
        }
      >
        <div className={s.HomepageCardTitleWrapper}>
          <div className={s.ShapeWrapper}>
            <img
              src={title === "writing" ? ShapeOne.src : ShapeTwo.src}
              className={s.Image}
            />
          </div>
          <h2 className={s.HomepageCardTitle}>{title}</h2>
        </div>
      </a>
    </Link>
  );
};

HomepageCard.propTypes = {
  title: PropTypes.string,
};

export default HomepageCard;
