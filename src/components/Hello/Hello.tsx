import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import cn from "classnames";

import { skills } from "../../utils";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import styles from "./Hello.module.scss";

export const Hello = () => {
  const colorSlides = () => {
    const color = Math.floor(Math.random() * 5.99 + 1);

    return `${styles[`hello__${color}`]}`;
  };

  let slidesPerView = 2.5;

  if (window.innerWidth <= 767 && window.innerWidth > 320) {
    slidesPerView = 3;
  } else if (window.innerWidth > 767) {
    slidesPerView = 5;
  }

  return (
    <section className={styles.hello}>
      <div className="container">
        <div className={styles.hello__slider}>
          <Swiper
            modules={[Autoplay]}
            loop
            autoplay={{
              delay: 3000,
            }}
            spaceBetween={20}
            slidesPerView={slidesPerView}
          >
            {skills.map((skill) => (
              <SwiperSlide
                key={skill}
                className={cn(styles.hello__slide, colorSlides())}
              >
                {skill}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className={styles.hello__info}>
          Hello! How are you doing?
          <br />
          My name is &nbsp;
          <span className={styles.hello__name}> Ola Katiushyna</span>
          . Welcome to my PORTFOLIO!
        </div>

        <a className={styles.hello__scroll} href="/">Scroll for more</a>
      </div>
    </section>
  );
};
