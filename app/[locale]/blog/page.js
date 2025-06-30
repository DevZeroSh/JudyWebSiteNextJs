import Layout from "@/components/layout/Layout";
import { useGetAllBlogsQuery } from "@/RTK/Api/Category/CategoryApi";
import { useTranslations } from "next-intl";
import Link from "next/link";
export default function Home() {
  const { data, isError, isLoading } = useGetAllBlogsQuery();
  console.log(data);

  const t = useTranslations();

  return (
    <>
      <Layout breadcrumbTitle={t("BlogTitle")}>
        <div>
          {/* blog-grid */}
          <section className="blog-grid sec-pad">
            <div className="auto-container">
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
                <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                  <div
                    className="news-block-one wow fadeInUp animated"
                    data-wow-delay="600ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <div className="upper-box">
                        <span className="category">Financial Plan</span>
                        <ul className="post-info clearfix">
                          <li>
                            <span>On</span> Feb 05, 2023
                          </li>
                          <li>
                            <span>By</span>{" "}
                            <Link href="/blog-details">Boone Gerardo</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="image-box">
                        <figure className="image">
                          <Link href="/blog-details">
                            <img src="assets/images/news/news-3.jpg" alt="" />
                          </Link>
                        </figure>
                        <div className="view-btn">
                          <Link
                            href="assets/images/news/news-3.jpg"
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
                            Interested in Giving Back this year? Here are some
                            tips
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
                    data-wow-delay="00ms"
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
                            <img src="assets/images/news/news-8.jpg" alt="" />
                          </Link>
                        </figure>
                        <div className="view-btn">
                          <Link
                            href="assets/images/news/news-8.jpg"
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
                <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                  <div
                    className="news-block-one wow fadeInUp animated"
                    data-wow-delay="300ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <div className="upper-box">
                        <span className="category">Financial Plan</span>
                        <ul className="post-info clearfix">
                          <li>
                            <span>On</span> Feb 05, 2023
                          </li>
                          <li>
                            <span>By</span>{" "}
                            <Link href="/blog-details">Boone Gerardo</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="image-box">
                        <figure className="image">
                          <Link href="/blog-details">
                            <img src="assets/images/news/news-9.jpg" alt="" />
                          </Link>
                        </figure>
                        <div className="view-btn">
                          <Link
                            href="assets/images/news/news-9.jpg"
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
                            Interested in Giving Back this year? Here are some
                            tips
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
                    data-wow-delay="600ms"
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
                            <img src="assets/images/news/news-10.jpg" alt="" />
                          </Link>
                        </figure>
                        <div className="view-btn">
                          <Link
                            href="assets/images/news/news-10.jpg"
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
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <div className="upper-box">
                        <span className="category">Financial Plan</span>
                        <ul className="post-info clearfix">
                          <li>
                            <span>On</span> Feb 05, 2023
                          </li>
                          <li>
                            <span>By</span>{" "}
                            <Link href="/blog-details">Boone Gerardo</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="image-box">
                        <figure className="image">
                          <Link href="/blog-details">
                            <img src="assets/images/news/news-11.jpg" alt="" />
                          </Link>
                        </figure>
                        <div className="view-btn">
                          <Link
                            href="assets/images/news/news-11.jpg"
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
                            Interested in Giving Back this year? Here are some
                            tips
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
                            <img src="assets/images/news/news-12.jpg" alt="" />
                          </Link>
                        </figure>
                        <div className="view-btn">
                          <Link
                            href="assets/images/news/news-12.jpg"
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
                    data-wow-delay="600ms"
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
                            <img src="assets/images/news/news-13.jpg" alt="" />
                          </Link>
                        </figure>
                        <div className="view-btn">
                          <Link
                            href="assets/images/news/news-13.jpg"
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
              </div>
              <div className="pagination-wrapper centred">
                <ul className="pagination clearfix">
                  <li className="prev-btn">
                    <Link href="/blog">
                      <i className="flaticon-right-chevron" />
                      Prev Page
                    </Link>
                  </li>
                  <li className="count-page">
                    <Link href="/blog" className="current">
                      <span>01</span>
                    </Link>
                  </li>
                  <li className="count-page">
                    <Link href="/blog">
                      <span>02</span>
                    </Link>
                  </li>
                  <li className="count-page">
                    <Link href="/blog">
                      <span>03</span>
                    </Link>
                  </li>
                  <li className="count-page">
                    <Link href="/blog">
                      <span>04</span>
                    </Link>
                  </li>
                  <li className="next-btn">
                    <Link href="/blog">
                      Next Page <i className="flaticon-right-chevron" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          {/* blog-grid end */}
          {/* cta-section */}
          <section className="cta-section alternat-2">
            <div className="outer-container">
              <div
                className="pattern-layer"
                style={{
                  backgroundImage: "url(assets/images/shape/shape-25.png)",
                }}
              />
              <div className="image-box-one">
                <figure className="image">
                  <img src="assets/images/resource/cta-1.jpg" alt="" />
                </figure>
                <div className="phone">
                  <h4>
                    Call: <Link href="tel:41888765432">(+41) 888.76.5432</Link>
                  </h4>
                </div>
              </div>
              <div className="image-box-two">
                <figure className="image">
                  <img src="assets/images/resource/cta-2.jpg" alt="" />
                </figure>
                <div className="text-box">
                  <h6>
                    Do you Have <br />
                    any idea to Join <br />
                    With Us
                  </h6>
                </div>
              </div>
              <div className="auto-container">
                <div className="row clearfix">
                  <div className="col-lg-8 col-md-12 col-sm-12 offset-lg-2 content-column">
                    <div className="content-box">
                      <h2>
                        Believe us when <br />
                        it comes to investment
                      </h2>
                      <div className="inner-box">
                        <figure className="image-box">
                          <img src="assets/images/resource/cart-1.jpg" alt="" />
                        </figure>
                        <p>
                          The moment, so blinded by desire, that they cannot
                          foresee and trouble that are bound to ensue.
                        </p>
                        <Link href="/index-3" className="theme-btn btn-two">
                          Send Request
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* cta-section end */}
        </div>
      </Layout>
    </>
  );
}
