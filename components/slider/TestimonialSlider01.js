'use client'

import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { useTranslations } from "next-intl"

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
    nextEl: '.h1n',
    prevEl: '.h1p',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    320: { slidesPerView: 1 },
    575: { slidesPerView: 1 },
    767: { slidesPerView: 1 },
    991: { slidesPerView: 1 },
    1199: { slidesPerView: 1 },
    1350: { slidesPerView: 1 },
  }
}

export default function TestimonialSlider1() {
  const t = useTranslations('testimonialSlider')

  return (
    <Swiper {...swiperOptions} className="theme_carousel owl-theme">
      <SwiperSlide className="slide">
        <div className="inner-box">
          <div className="icon-box">
            <div className="icon">
              <i className="flaticon-knowledge" />
            </div>
            <span className="count-text">01</span>
          </div>
          <h3>{t('slide1.title')}</h3>
          <p>{t('slide1.text')}</p>
        </div>
      </SwiperSlide>

      <SwiperSlide className="slide">
        <div className="inner-box">
          <div className="icon-box">
            <div className="icon">
              <i className="flaticon-knowledge" />
            </div>
            <span className="count-text">02</span>
          </div>
          <h3>{t('slide2.title')}</h3>
          <p>{t('slide2.text')}</p>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}
