'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

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
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
    }
}
export default function NewsSlider() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="slide">
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                    <div
                        className="news-block-one wow fadeInUp animated"
                        data-wow-delay="00ms"
                        data-wow-duration="1500ms"
                    >
                        <div className="inner-box">
                        <div className="upper-box">
                            <span className="category">Investment</span>
                            <ul className="post-info clearfix">
                            <li>
                                <span>On</span> Mar 14, 2023
                            </li>
                            <li>
                                <span>By</span>{" "}
                                <Link href="/blog-details">Justin Langer</Link>
                            </li>
                            </ul>
                        </div>
                        <div className="image-box">
                            <figure className="image">
                            <Link href="/blog-details">
                                <img src="assets/images/news/news-1.jpg" alt="" />
                            </Link>
                            </figure>
                            <div className="view-btn">
                            <Link
                                href="assets/images/news/news-1.jpg"
                                className="lightbox-image"
                                data-fancybox="gallery"
                            >
                                <i className="flaticon-zoom-in" />
                            </Link>
                            </div>
                        </div>
                        <div className="lower-box">
                            <h3>
                            <Link href="/blog-details">
                                Revisiting Your Investment &amp; Distribution Goals
                            </Link>
                            </h3>
                            <div className="link">
                            <Link href="/blog-details">
                                <span>Explore More</span>
                            </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                    <div
                        className="news-block-one wow fadeInUp animated"
                        data-wow-delay="300ms"
                        data-wow-duration="1500ms"
                    >
                        <div className="inner-box">
                        <div className="upper-box">
                            <span className="category">Business</span>
                            <ul className="post-info clearfix">
                            <li>
                                <span>On</span> Feb 26, 2023
                            </li>
                            <li>
                                <span>By</span>{" "}
                                <Link href="/blog-details">Colmin Neil</Link>
                            </li>
                            </ul>
                        </div>
                        <div className="image-box">
                            <figure className="image">
                            <Link href="/blog-details">
                                <img src="assets/images/news/news-2.jpg" alt="" />
                            </Link>
                            </figure>
                            <div className="view-btn">
                            <Link
                                href="assets/images/news/news-2.jpg"
                                className="lightbox-image"
                                data-fancybox="gallery"
                            >
                                <i className="flaticon-zoom-in" />
                            </Link>
                            </div>
                        </div>
                        <div className="lower-box">
                            <h3>
                            <Link href="/blog-details">
                                Dimensional Fund Advisors Interview with Director
                            </Link>
                            </h3>
                            <div className="link">
                            <Link href="/blog-details">
                                <span>Explore More</span>
                            </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 post-column">
                    <div className="post-block-one">
                        <div className="inner-box">
                        <figure className="post-thumb">
                            <Link href="/blog-details">
                            <img src="assets/images/news/post-1.jpg" alt="" />
                            </Link>
                        </figure>
                        <span className="category">Financial Plan</span>
                        <h4>
                            <Link href="/blog-details">
                            Interested in Giving Backthis year? Here are some tips.
                            </Link>
                        </h4>
                        </div>
                    </div>
                    <div className="post-block-one">
                        <div className="inner-box">
                        <figure className="post-thumb">
                            <Link href="/blog-details">
                            <img src="assets/images/news/post-2.jpg" alt="" />
                            </Link>
                        </figure>
                        <span className="category">Management</span>
                        <h4>
                            <Link href="/blog-details">
                            Reports First Quarter 2022 Diluted EPS of $5.45, or $8.63 as
                            adjusted
                            </Link>
                        </h4>
                        </div>
                    </div>
                    <div className="post-block-one">
                        <div className="inner-box">
                        <figure className="post-thumb">
                            <Link href="/blog-details">
                            <img src="assets/images/news/post-3.jpg" alt="" />
                            </Link>
                        </figure>
                        <span className="category">Technology</span>
                        <h4>
                            <Link href="/blog-details">
                            How to Recover from a Market Crash if You're Retired
                            </Link>
                        </h4>
                        </div>
                    </div>
                    <div className="btn-box">
                        <Link href="/blog" className="theme-btn btn-two">
                        Read All Post
                        </Link>
                    </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                    <div
                        className="news-block-one wow fadeInUp animated"
                        data-wow-delay="00ms"
                        data-wow-duration="1500ms"
                    >
                        <div className="inner-box">
                        <div className="upper-box">
                            <span className="category">Investment</span>
                            <ul className="post-info clearfix">
                            <li>
                                <span>On</span> Mar 14, 2023
                            </li>
                            <li>
                                <span>By</span>{" "}
                                <Link href="/blog-details">Justin Langer</Link>
                            </li>
                            </ul>
                        </div>
                        <div className="image-box">
                            <figure className="image">
                            <Link href="/blog-details">
                                <img src="assets/images/news/news-1.jpg" alt="" />
                            </Link>
                            </figure>
                            <div className="view-btn">
                            <Link
                                href="assets/images/news/news-1.jpg"
                                className="lightbox-image"
                                data-fancybox="gallery"
                            >
                                <i className="flaticon-zoom-in" />
                            </Link>
                            </div>
                        </div>
                        <div className="lower-box">
                            <h3>
                            <Link href="/blog-details">
                                Revisiting Your Investment &amp; Distribution Goals
                            </Link>
                            </h3>
                            <div className="link">
                            <Link href="/blog-details">
                                <span>Explore More</span>
                            </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                    <div
                        className="news-block-one wow fadeInUp animated"
                        data-wow-delay="300ms"
                        data-wow-duration="1500ms"
                    >
                        <div className="inner-box">
                        <div className="upper-box">
                            <span className="category">Business</span>
                            <ul className="post-info clearfix">
                            <li>
                                <span>On</span> Feb 26, 2023
                            </li>
                            <li>
                                <span>By</span>{" "}
                                <Link href="/blog-details">Colmin Neil</Link>
                            </li>
                            </ul>
                        </div>
                        <div className="image-box">
                            <figure className="image">
                            <Link href="/blog-details">
                                <img src="assets/images/news/news-2.jpg" alt="" />
                            </Link>
                            </figure>
                            <div className="view-btn">
                            <Link
                                href="assets/images/news/news-2.jpg"
                                className="lightbox-image"
                                data-fancybox="gallery"
                            >
                                <i className="flaticon-zoom-in" />
                            </Link>
                            </div>
                        </div>
                        <div className="lower-box">
                            <h3>
                            <Link href="/blog-details">
                                Dimensional Fund Advisors Interview with Director
                            </Link>
                            </h3>
                            <div className="link">
                            <Link href="/blog-details">
                                <span>Explore More</span>
                            </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 post-column">
                    <div className="post-block-one">
                        <div className="inner-box">
                        <figure className="post-thumb">
                            <Link href="/blog-details">
                            <img src="assets/images/news/post-1.jpg" alt="" />
                            </Link>
                        </figure>
                        <span className="category">Financial Plan</span>
                        <h4>
                            <Link href="/blog-details">
                            Interested in Giving Backthis year? Here are some tips.
                            </Link>
                        </h4>
                        </div>
                    </div>
                    <div className="post-block-one">
                        <div className="inner-box">
                        <figure className="post-thumb">
                            <Link href="/blog-details">
                            <img src="assets/images/news/post-2.jpg" alt="" />
                            </Link>
                        </figure>
                        <span className="category">Management</span>
                        <h4>
                            <Link href="/blog-details">
                            Reports First Quarter 2022 Diluted EPS of $5.45, or $8.63 as
                            adjusted
                            </Link>
                        </h4>
                        </div>
                    </div>
                    <div className="post-block-one">
                        <div className="inner-box">
                        <figure className="post-thumb">
                            <Link href="/blog-details">
                            <img src="assets/images/news/post-3.jpg" alt="" />
                            </Link>
                        </figure>
                        <span className="category">Technology</span>
                        <h4>
                            <Link href="/blog-details">
                            How to Recover from a Market Crash if You're Retired
                            </Link>
                        </h4>
                        </div>
                    </div>
                    <div className="btn-box">
                        <Link href="/blog" className="theme-btn btn-two">
                        Read All Post
                        </Link>
                    </div>
                    </div>
                </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
