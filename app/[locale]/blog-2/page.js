"use client";
import Layout from "@/components/layout/Layout";
import { useGetAllBlogsQuery } from "@/RTK/Api/Blog/BlogApi";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

export default function Home() {
  const { data, isError, isLoading } = useGetAllBlogsQuery();
  const t = useTranslations();
  const locale = useLocale();

  return (
    <>
      <Layout breadcrumbTitle={t("BlogTitlepage")} image={"assets/images/blog.jpg"}>
        <>
          {/* sidebar-page-container */}
          <section className="sidebar-page-container blog-list-one sec-pad">
            <div className="auto-container">
              <div className="row clearfix">
                <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                  <div className="blog-list-content">
                    {data?.data.map((blog, index) => (
                      <div className="news-block-two" key={index}>
                        <div className="inner-box">
                          <div className="image-box">
                            <figure className="image">
                              <Link href="/blog-details">
                                <img src={blog?.photo} alt="" />
                              </Link>
                            </figure>
                          </div>
                          <div className="content-box">
                            <ul className="post-info clearfix">
                              <li>
                                <span>{t("On")}</span> Mar 14, 2023
                              </li>
                              <li>
                                <span>{t("By")}</span>{" "}
                                <Link href="/blog-details">{blog?.writer}</Link>
                              </li>
                            </ul>
                            <h3>
                              <Link href="/blog-details">
                                {locale === "en" ? blog?.titleEN : blog.titleAR}
                              </Link>
                            </h3>
                            <p>
                              Power choice untrammelled when nothing prevent to
                              do what we like best.
                            </p>
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
                    <div className="pagination-wrapper centred">
                      <ul className="pagination clearfix">
                        <li className="prev-btn">
                          <Link href="/blog-2">
                            <i className="flaticon-right-chevron" />
                            {t("PrevPage")}
                          </Link>
                        </li>
                        <li className="count-page">
                          <Link href="/blog-2" className="current">
                            <span>01</span>
                          </Link>
                        </li>
                        <li className="count-page">
                          <Link href="/blog-2">
                            <span>02</span>
                          </Link>
                        </li>
                        <li className="count-page">
                          <Link href="/blog-2">
                            <span>03</span>
                          </Link>
                        </li>
                        <li className="count-page">
                          <Link href="/blog-2">
                            <span>04</span>
                          </Link>
                        </li>
                        <li className="next-btn">
                          <Link href="/blog-2">
                            {t("NextPage")} <i className="flaticon-right-chevron" />
                          </Link>
                        </li>
                      </ul>
                    </div>
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