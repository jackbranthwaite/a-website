import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import s from "./PhotographyPost.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { Navigation, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Left from "../../assets/svg/icons/chevron-left.svg";
import Right from "../../assets/svg/icons/chevron-right.svg";

const PhotographyPost = ({ content }) => {
  const date = new Date(content.last_publication_date).toDateString();
  const router = useRouter();

  const navigationRight = useRef(null);
  const navigationLeft = useRef(null);

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
        <div className={s.LeftChevron} ref={navigationLeft}>
          <Left height={25} width={25} />
        </div>
        <Swiper
          slidesPerView={1}
          modules={[Navigation, EffectFade]}
          effect={"fade"}
          navigation={{
            prevEl: navigationLeft.current,
            nextEl: navigationRight.current,
          }}
          fadeEffect={{ crossFade: true }}
        >
          {content.data.body[0].items.map((item, i) => {
            return (
              <SwiperSlide key={i}>
                {/* eslint --ignore-pattern @next/next/no-img-element */}
                <img
                  className={s.Image}
                  src={item.image.url}
                  alt={item.image.alt}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className={s.RightChevron} ref={navigationRight}>
          <Right height={25} width={25} />
        </div>
      </div>
    </div>
  );
};

PhotographyPost.propTypes = {
  content: PropTypes.object,
};

export default PhotographyPost;
