"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";
import { HomeSlides } from "@/StaticData/Home";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};

export default function Banner() {
  const { i18n, t } = useTranslation();
  const lang = i18n.language || "en";

  return (
    <section className="banner-section p_relative">
      <Swiper {...swiperOptions} className="banner-carousel">
        {HomeSlides.map((slide, idx) => (
          <SwiperSlide key={idx} className="slide-item p_relative">
            <div
              className="image-layer"
              style={{
                backgroundImage: `url(${slide.bg})`,
              }}
            />
            <div className="custom-container">
              <div className="content-box">
                <h2>{slide.title[lang]}</h2>
                <div className="lower-box">
                  <div className="icon-box">
                    <i className="flaticon-conversation" />
                  </div>
                  <div className="text">{slide.content[lang]}</div>
                  <Link href={slide.url} className="theme-btn btn-two">
                    {t("see more")}
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="swiper-pagination"></div>
      </Swiper>
    </section>
  );
}
