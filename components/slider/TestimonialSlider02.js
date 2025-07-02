"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { useTranslations } from "next-intl";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 2,
  spaceBetween: 30,
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
  breakpoints: {
    320: { slidesPerView: 1 },
    575: { slidesPerView: 1 },
    767: { slidesPerView: 2 },
    991: { slidesPerView: 3 },
    1199: { slidesPerView: 4 },
    1350: { slidesPerView: 4 },
  },
};

export default function TestimonialSlider02() {
  const t = useTranslations("countriesPage.slider");

  const slides = [
    {
      href: "/service-details",
      titleKey: "Türkiye",
      imgSrc: "assets/images/country-1.webp",
    },
    {
      href: "/service-details-2",
      titleKey: "Saudi Arabia",
      imgSrc: "assets/images/country-2.webp",
    },
    {
      href: "/service-details-3",
      titleKey: "UAE",
      imgSrc: "assets/images/country-3.webp",
    },
    {
      href: "/service-details-4",
      titleKey: "united kingdom",
      imgSrc: "assets/images/country-4.webp",
    },
  ];

  return (
    <>
      <Swiper {...swiperOptions} className="theme_carousel owl-theme">
        {slides.map(({ href, titleKey, imgSrc }, idx) => (
          <SwiperSlide key={idx} className="slide">
            <div className="service-block-two">
              <div className="inner-box">
                <h3>
                  <Link href={href}>{titleKey}</Link>
                </h3>
                <figure className="image-box">
                  <img src={imgSrc} />
                </figure>
              </div>
              <div className="link-box">
                <Link href={href}>
                  <i className="flaticon-right-arrow-1" />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
