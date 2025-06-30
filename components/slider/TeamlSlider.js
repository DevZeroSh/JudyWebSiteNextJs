'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link"

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
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
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
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
    }
}
export default function TeamlSlider() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="slide">
                <div className="team-block-one">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="assets/images/team/team-1.jpg" alt="" />
                    </figure>
                    <div className="lower-content">
                      <div className="share-box">
                        <div className="share-icon">
                          <i className="flaticon-share" />
                        </div>
                        <ul className="social-links clearfix">
                          <li>
                            <Link href="/">
                              <i className="fa-brands fa-facebook" />
                            </Link>
                          </li>
                          <li>
                            <Link href="/">
                              <i className="fa-brands fa-square-twitter" />
                            </Link>
                          </li>
                          <li>
                            <Link href="/">
                              <i className="fa-brands fa-instagram-square" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <h3>
                        <Link href="/index-3">Bertram Irvin</Link>
                      </h3>
                      <p>
                        He is Chairman and Chief Executive Officer of Counsolve.{" "}
                        <Link href="/index-3">Read...</Link>
                      </p>
                    </div>
                  </div>
                </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                <div className="team-block-one">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="assets/images/team/team-2.jpg" alt="" />
                    </figure>
                    <div className="lower-content">
                      <div className="share-box">
                        <div className="share-icon">
                          <i className="flaticon-share" />
                        </div>
                        <ul className="social-links clearfix">
                          <li>
                            <Link href="/">
                              <i className="fa-brands fa-facebook" />
                            </Link>
                          </li>
                          <li>
                            <Link href="/">
                              <i className="fa-brands fa-square-twitter" />
                            </Link>
                          </li>
                          <li>
                            <Link href="/">
                              <i className="fa-brands fa-instagram-square" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <h3>
                        <Link href="/index-3">Marian Lenora</Link>
                      </h3>
                      <p>
                        She is Chief Investment Officer of ETF in Counsolve from 2021.{" "}
                        <Link href="/index-3">Read...</Link>
                      </p>
                    </div>
                  </div>
                </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                <div className="team-block-one">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="assets/images/team/team-1.jpg" alt="" />
                    </figure>
                    <div className="lower-content">
                      <div className="share-box">
                        <div className="share-icon">
                          <i className="flaticon-share" />
                        </div>
                        <ul className="social-links clearfix">
                          <li>
                            <Link href="/">
                              <i className="fa-brands fa-facebook" />
                            </Link>
                          </li>
                          <li>
                            <Link href="/">
                              <i className="fa-brands fa-square-twitter" />
                            </Link>
                          </li>
                          <li>
                            <Link href="/">
                              <i className="fa-brands fa-instagram-square" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <h3>
                        <Link href="/index-3">Bertram Irvin</Link>
                      </h3>
                      <p>
                        He is Chairman and Chief Executive Officer of Counsolve.{" "}
                        <Link href="/index-3">Read...</Link>
                      </p>
                    </div>
                  </div>
                </div>
                </SwiperSlide>

                <SwiperSlide className="slide">
                <div className="team-block-one">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="assets/images/team/team-2.jpg" alt="" />
                    </figure>
                    <div className="lower-content">
                      <div className="share-box">
                        <div className="share-icon">
                          <i className="flaticon-share" />
                        </div>
                        <ul className="social-links clearfix">
                          <li>
                            <Link href="/">
                              <i className="fa-brands fa-facebook" />
                            </Link>
                          </li>
                          <li>
                            <Link href="/">
                              <i className="fa-brands fa-square-twitter" />
                            </Link>
                          </li>
                          <li>
                            <Link href="/">
                              <i className="fa-brands fa-instagram-square" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <h3>
                        <Link href="/index-3">Marian Lenora</Link>
                      </h3>
                      <p>
                        She is Chief Investment Officer of ETF in Counsolve from 2021.{" "}
                        <Link href="/index-3">Read...</Link>
                      </p>
                    </div>
                  </div>
                </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                <div className="team-block-one">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="assets/images/team/team-3.jpg" alt="" />
                    </figure>
                    <div className="lower-content">
                      <div className="share-box">
                        <div className="share-icon">
                          <i className="flaticon-share" />
                        </div>
                        <ul className="social-links clearfix">
                          <li>
                            <Link href="/">
                              <i className="fa-brands fa-facebook" />
                            </Link>
                          </li>
                          <li>
                            <Link href="/">
                              <i className="fa-brands fa-square-twitter" />
                            </Link>
                          </li>
                          <li>
                            <Link href="/">
                              <i className="fa-brands fa-instagram-square" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <h3>
                        <Link href="/index-3">Herman Gordon</Link>
                      </h3>
                      <p>
                        He is Senior Retirement Plan Consultant of Counsolve.{" "}
                        <Link href="/index-3">Read...</Link>
                      </p>
                    </div>
                  </div>
                </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                <div className="team-block-one">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="assets/images/team/team-1.jpg" alt="" />
                    </figure>
                    <div className="lower-content">
                      <div className="share-box">
                        <div className="share-icon">
                          <i className="flaticon-share" />
                        </div>
                        <ul className="social-links clearfix">
                          <li>
                            <Link href="/">
                              <i className="fa-brands fa-facebook" />
                            </Link>
                          </li>
                          <li>
                            <Link href="/">
                              <i className="fa-brands fa-square-twitter" />
                            </Link>
                          </li>
                          <li>
                            <Link href="/">
                              <i className="fa-brands fa-instagram-square" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <h3>
                        <Link href="/index-3">Bertram Irvin</Link>
                      </h3>
                      <p>
                        He is Chairman and Chief Executive Officer of Counsolve.{" "}
                        <Link href="/index-3">Read...</Link>
                      </p>
                    </div>
                  </div>
                </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                <div className="team-block-one">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="assets/images/team/team-2.jpg" alt="" />
                    </figure>
                    <div className="lower-content">
                      <div className="share-box">
                        <div className="share-icon">
                          <i className="flaticon-share" />
                        </div>
                        <ul className="social-links clearfix">
                          <li>
                            <Link href="/">
                              <i className="fa-brands fa-facebook" />
                            </Link>
                          </li>
                          <li>
                            <Link href="/">
                              <i className="fa-brands fa-square-twitter" />
                            </Link>
                          </li>
                          <li>
                            <Link href="/">
                              <i className="fa-brands fa-instagram-square" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <h3>
                        <Link href="/index-3">Marian Lenora</Link>
                      </h3>
                      <p>
                        She is Chief Investment Officer of ETF in Counsolve from 2021.{" "}
                        <Link href="/index-3">Read...</Link>
                      </p>
                    </div>
                  </div>
                </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                <div className="team-block-one">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="assets/images/team/team-3.jpg" alt="" />
                    </figure>
                    <div className="lower-content">
                      <div className="share-box">
                        <div className="share-icon">
                          <i className="flaticon-share" />
                        </div>
                        <ul className="social-links clearfix">
                          <li>
                            <Link href="/">
                              <i className="fa-brands fa-facebook" />
                            </Link>
                          </li>
                          <li>
                            <Link href="/">
                              <i className="fa-brands fa-square-twitter" />
                            </Link>
                          </li>
                          <li>
                            <Link href="/">
                              <i className="fa-brands fa-instagram-square" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <h3>
                        <Link href="/index-3">Herman Gordon</Link>
                      </h3>
                      <p>
                        He is Senior Retirement Plan Consultant of Counsolve.{" "}
                        <Link href="/index-3">Read...</Link>
                      </p>
                    </div>
                  </div>
                </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
