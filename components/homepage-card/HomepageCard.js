import React from "react";
import s from "./HomepageCard.module.css";
import PropTypes from "prop-types";

import BackgroundOne from "../../assets/images/mathias-p-r-reding-reffXHzUiF8-unsplash.jpg";
import BackgroundTwo from "../../assets/images/matthew-woinarowicz--ZIfQqO1K1o-unsplash.jpg";
import Link from "next/link";

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
