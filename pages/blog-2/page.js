"use client";
import Layout from "@/components/layout/Layout";
import { formatDate, truncateText } from "@/GlobalHooks/GlobalHooks";
import {
  useGetAllBlogsQuery,
  useGetBlogsByCategoryQuery,
} from "@/RTK/Api/Blog/BlogApi";
import { useTranslations, useLocale } from "next-intl";
import DefaultImg from "../../../public/assets/images/news/news-5.jpg";
import Link from "next/link";
import Pagination from "@/GlobalComponents/Pagination";
import { useState } from "react";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const {
    data: blogs,
    isError,
    isLoading,
  } = useGetAllBlogsQuery({ page: currentPage });
  const { data: categories } = useGetBlogsByCategoryQuery();
  console.log("categories", categories);
  const t = useTranslations();
  const locale = useLocale();
  const totalPages = blogs?.pagination?.totalPages;
  console.log("blogs", blogs);
  return (
    <>
      <Layout
        breadcrumbTitle={t("BlogTitlepage")}
        image={"assets/images/blog.jpg"}
      >
        <>
          {/* sidebar-page-container */}
          <section className="sidebar-page-container blog-list-one sec-pad">
            <div className="auto-container">
              <div className="row clearfix">
                <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                  <div className="blog-list-content">
                    {blogs?.data.map((blog, index) => (
                      <div className="news-block-two" key={index}>
                        <div className="inner-box">
                          <div className="image-box">
                            <figure className="image">
                              <Link href="/blog-details">
                                <img
                                  src={blog?.photo || DefaultImg.src}
                                  alt=""
                                />
                              </Link>
                            </figure>
                            <h6>{blog.title?.[locale]}</h6>
                          </div>
                          <div className="content-box">
                            <ul className="post-info clearfix">
                              <li>
                                <span>{t("On ")}</span>
                                {formatDate(blog.createdAt)}
                              </li>
                              <li>
                                <span>{t("By")}</span>{" "}
                                <Link href="/blog-details">Judy invest</Link>
                              </li>
                            </ul>
                            <h3>
                              <Link href="/blog-details">
                                {blog.title?.[locale]}
                              </Link>
                            </h3>
                            <p
                              dangerouslySetInnerHTML={{
                                __html: truncateText(
                                  blog.content?.[locale],
                                  200
                                ),
                              }}
                            />

                            <div className="link">
                              <Link href="/blog-details">
                                <span>{t("ExploreMore")}</span>
                              </Link>
                            </div>
                            <div className="share-box">
                              <Link href="/blog-details">
                                <i className="flaticon-share" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                    <Pagination
                      currentPage={currentPage}
                      totalPages={totalPages}
                      setCurrentPage={setCurrentPage}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                  <div className="blog-sidebar">
                    <div className="sidebar-widget search-widget">
                      <div className="search-inner">
                        <form method="post" action="/blog-2">
                          <div className="form-group">
                            <input
                              type="search"
                              name="search-field"
                              placeholder={t("EnterKeyword")}
                              required=""
                            />
                            <button type="submit">
                              <img
                                src="assets/images/icons/icon-32.png"
                                alt=""
                              />
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="sidebar-widget category-widget">
                      <div className="widget-title">
                        <h3>{t("Categories")}</h3>
                      </div>
                      <div className="widget-content">
                        <ul className="category-list clearfix">
                          <li>
                            <Link href="/blog-details">{t("Business")}</Link>
                            <div className="line" />
                            <span>3</span>
                          </li>
                          <li>
                            <Link href="/blog-details">{t("Consulting")}</Link>
                            <div className="line" />
                            <span>5</span>
                          </li>

                          <li>
                            <Link href="/blog-details">{t("Investment")}</Link>
                            <div className="line" />
                            <span>6</span>
                          </li>
                          <li>
                            <Link href="/blog-details">{t("Innovative")}</Link>
                            <div className="line" />
                            <span>4</span>
                          </li>
                          <li>
                            <Link href="/blog-details">{t("Management")}</Link>
                            <div className="line" />
                            <span>1</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="sidebar-widget post-widget">
                      <div className="widget-title">
                        <h3>Popular Post</h3>
                      </div>
                      <div className="post-inner">
                        <div className="post">
                          <figure className="post-thumb">
                            <Link href="/blog-details">
                              <img src="assets/images/news/post-7.jpg" alt="" />
                            </Link>
                          </figure>
                          <h6>Financial Plan</h6>
                          <h4>
                            <Link href="/blog-details">
                              Interested in Giving Backthis year? Here are some
                              tips.
                            </Link>
                          </h4>
                        </div>
                        <div className="post">
                          <figure className="post-thumb">
                            <Link href="/blog-details">
                              <img src="assets/images/news/post-8.jpg" alt="" />
                            </Link>
                          </figure>
                          <h6>Management</h6>
                          <h4>
                            <Link href="/blog-details">
                              Reports First Quarter 2022Diluted EPS of $5.45 or
                              $8.63 as adjusted
                            </Link>
                          </h4>
                        </div>
                        <div className="post">
                          <figure className="post-thumb">
                            <Link href="/blog-details">
                              <img src="assets/images/news/post-9.jpg" alt="" />
                            </Link>
                          </figure>
                          <h6>Technology</h6>
                          <h4>
                            <Link href="/blog-details">
                              How to Recover from a Market Crash if You're
                              Retired
                            </Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="sidebar-widget tags-widget">
                      <div className="widget-title">
                        <h3>Popular Tags</h3>
                      </div>
                      <div className="widget-content">
                        <ul className="tags-list clearfix">
                          <li>
                            <Link href="/blog-details">Business</Link>
                          </li>
                          <li>
                            <Link href="/blog-details">Consulting</Link>
                          </li>
                          <li>
                            <Link href="/blog-details">Finance</Link>
                          </li>
                          <li>
                            <Link href="/blog-details">Idea</Link>
                          </li>
                          <li>
                            <Link href="/blog-details">Interview</Link>
                          </li>
                          <li>
                            <Link href="/blog-details">Plans</Link>
                          </li>
                          <li>
                            <Link href="/blog-details">Press</Link>
                          </li>
                          <li>
                            <Link href="/blog-details">Retirement</Link>
                          </li>
                          <li>
                            <Link href="/blog-details">Savings</Link>
                          </li>
                          <li>
                            <Link href="/blog-details">Security</Link>
                          </li>
                          <li>
                            <Link href="/blog-details">Updates</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* sidebar-page-container end */}
        </>
      </Layout>
    </>
  );
}
