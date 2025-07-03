"use client";
import { useGetAllBlogsQuery } from "@/RTK/Api/Blog/BlogApi";
import Link from "next/link";
import BlogImg from "../../public/assets/images/news/news-1.jpg";
import BlogImgSmall from "../../public/assets/images/news/post-3.jpg";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { formatDate } from "@/GlobalHooks/GlobalHooks";
import { useTranslation } from "react-i18next";

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
  },
};
export default function NewsSlider() {
  const {
    data: latestBlogs,
    isError,
    isLoading,
  } = useGetAllBlogsQuery({ limit: 10 });
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  console.log("latestBlogs", latestBlogs);
  const slideChunks = [
    latestBlogs?.data?.slice?.(0, 5) || [],
    latestBlogs?.data?.slice?.(5, 10) || [],
  ];

  return (
    <Swiper {...swiperOptions} className="theme_carousel owl-theme">
      {slideChunks
        .filter((chunk) => chunk?.length > 0) // Only render non-empty slides
        .map((chunk, index) => (
          <SwiperSlide key={index} className="slide">
            <div className="row clearfix">
              {/* First 2 posts - large cards */}
              {chunk?.slice(0, 2).map((blog, i) => (
                <div
                  key={blog._id}
                  className="col-lg-4 col-md-6 col-sm-12 news-block"
                >
                  <div
                    className="news-block-one wow fadeInUp animated"
                    data-wow-delay={`${i * 300}ms`}
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <div className="upper-box">
                        <span className="category">
                          {blog?.category?.name?.[currentLang] ?? "General"}
                        </span>
                        <ul className="post-info clearfix">
                          <li>
                            <span>On</span> {formatDate(blog.createdAt)}
                          </li>
                          <li>
                            <span>By</span> <Link href="#">Admin</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="image-box">
                        <figure className="image">
                          <Link href={`/blog/${blog._id}`}>
                            <img
                              src={blog.photo || BlogImg.src}
                              alt={blog.title?.[currentLang] ?? "Blog"}
                            />
                          </Link>
                        </figure>
                        <div className="view-btn">
                          <Link
                            href={blog.photo || BlogImg.src}
                            className="lightbox-image"
                            data-fancybox="gallery"
                          >
                            <i className="flaticon-zoom-in" />
                          </Link>
                        </div>
                      </div>
                      <div className="lower-box">
                        <h3>
                          <Link href={`/blog/${blog._id}`}>
                            {blog.title?.[currentLang] ?? blog.title?.en}
                          </Link>
                        </h3>
                        <div className="link">
                          <Link href={`/blog/${blog._id}`}>
                            <span>{"Explore More"}</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Sidebar posts */}
              <div className="col-lg-4 col-md-6 col-sm-12 post-column">
                {chunk?.slice(2, 5).map((blog) => (
                  <div key={blog._id} className="post-block-one">
                    <div className="inner-box">
                      <figure className="post-thumb">
                        <Link href={`/blog/${blog._id}`}>
                          <img
                            src={blog.photo || BlogImgSmall.src}
                            alt={blog.title?.[currentLang] ?? "Blog"}
                          />
                        </Link>
                      </figure>
                      <span className="category">
                        {blog?.category?.name?.[currentLang] ?? "Category"}
                      </span>
                      <h4>
                        <Link href={`/blog/${blog._id}`}>
                          {blog.title?.[currentLang] ?? blog.title?.en}
                        </Link>
                      </h4>
                    </div>
                  </div>
                ))}
                <div className="btn-box">
                  <Link href="/blog" className="theme-btn btn-two">
                    {"Read All Posts"}
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
