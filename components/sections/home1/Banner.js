"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslations } from "next-intl";
// core version + navigation, pagination modules:

// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 70000,
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
  const t = useTranslations("banner");

  return (
    <section className="banner-section p_relative">
      <Swiper {...swiperOptions} className="banner-carousel">
        <SwiperSlide className="slide-item p_relative">
          <div
            className="image-layer"
            style={{
              backgroundImage: "url(assets/images/banner/investment.png)",
            }}
          />
          <div className="custom-container">
            <div className="content-box">
              <h2>{t("slide1.title")}</h2>
              <div className="lower-box">
                <div className="icon-box">
                  <i className="flaticon-conversation" />
                </div>
                <div className="text">{t("slide1.text")}</div>
                <Link href="/" className="theme-btn btn-two">
                  {t("button")}
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="slide-item p_relative">
          <div
            className="image-layer"
            style={{
              backgroundImage: "url(assets/images/banner/computer.png)",
            }}
          />
          <div className="custom-container">
            <div className="content-box">
              <h2>{t("slide2.title")}</h2>
              <div className="lower-box">
                <div className="icon-box">
                  <i className="flaticon-conversation" />
                </div>
                <div className="text">{t("slide2.text")}</div>
                <Link href="/" className="theme-btn btn-two">
                  {t("button")}
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="slide-item p_relative">
          <div
            className="image-layer"
            style={{
              backgroundImage: "url(assets/images/banner/Consultations.png)",
            }}
          />
          <div className="custom-container">
            <div className="content-box">
              <h2>{t("slide3.title")}</h2>
              <div className="lower-box">
                <div className="icon-box">
                  <i className="flaticon-conversation" />
                </div>
                <div className="text">{t("slide3.text")}</div>
                <Link href="/" className="theme-btn btn-two">
                  {t("button")}
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <div className="swiper-pagination"></div>

        {/* <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div> */}
      </Swiper>
    </section>
  );
}
