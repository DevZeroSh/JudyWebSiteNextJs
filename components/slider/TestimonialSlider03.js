"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  loop: true,

  // Navigation
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      // spaceBetween: 30,
    },
    575: {
      slidesPerView: 1,
      // spaceBetween: 30,
    },
    767: {
      slidesPerView: 2,
      // spaceBetween: 30,
    },
    991: {
      slidesPerView: 3,
      // spaceBetween: 30,
    },
    1199: {
      slidesPerView: 4,
      // spaceBetween: 30,
    },
    1350: {
      slidesPerView: 4,
      // spaceBetween: 30,
    },
  },
};
export default function TestimonialSlider03() {
  return (
    <>
      <Swiper {...swiperOptions} className="theme_carousel owl-theme">
        <SwiperSlide className="slide">
          <div className="chooseus-block-three">
            <div className="inner-box">
              <span className="count-text">01</span>
              {/* <h3>
                Extensive <span>Knowledge</span>
              </h3> */}
              <p>
                Obtaining Turkish citizenship or permanent residency for those
                who invest $500,000
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="chooseus-block-three">
            <div className="inner-box">
              <span className="count-text">02</span>
              {/* <h3>
                Risk <span>Management</span>
              </h3> */}
              <p>Income tax exemption ranging from 15% to 40%</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="chooseus-block-three">
            <div className="inner-box">
              <span className="count-text">03</span>
              {/* <h3>
                Team <span>Approach</span>
              </h3> */}
              <p>Investing in assets that often increase in value</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="chooseus-block-three">
            <div className="inner-box">
              <span className="count-text">04</span>
              {/* <h3>
                Advanced <span>Technolog</span>
              </h3> */}
              <p>
                A safe investment as it is subject to very strict supervision by
                the Financial Regulatory Authority.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
