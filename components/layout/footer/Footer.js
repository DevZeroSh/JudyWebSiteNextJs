import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <>
      {/* footer-style-three */}
      <section className="footer-style-three" style={{ marginTop: "100px" }}>
        <div className="widget-section">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget logo-widget">
                  <h3>
                    <span>{t("talk_to_us")}</span>
                    <i className="flaticon-chat" />
                    <br />
                    <span>{t("we_are_here_to_listen")}</span>
                  </h3>
                  <p>{t("hesitate_help")}</p>
                  <h5>
                    <Link href="/contact">{t("get_in_touch")}</Link>
                  </h5>
                  <div className="footer-logo">
                    <Link href="/index-3">
                      <img
                        src="/assets/images/judywhite.webp"
                        alt="Judy White"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget links-widget">
                  <div className="widget-title">
                    <h3>{t("company")}</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="links-list clearfix">
                      <li>
                        <Link href="/">{t("home")}</Link>
                      </li>
                      <li>
                        <Link href="/about">{t("about_us")}</Link>
                      </li>
                      <li>
                        <Link href="/index-3">{t("professionals")}</Link>
                      </li>
                      <li>
                        <Link href="/index-3">{t("insights")}</Link>
                      </li>
                      <li>
                        <Link href="/service">{t("services")}</Link>
                      </li>
                      <li>
                        <Link href="/index-3">{t("why_choose")}</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget links-widget">
                  <div className="widget-title">
                    <h3>{t("essentials")}</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="links-list clearfix">
                      <li>
                        <Link href="/index-3">{t("how_it_works")}</Link>
                      </li>
                      <li>
                        <Link href="/index-3">{t("partners")}</Link>
                      </li>
                      <li>
                        <Link href="/index-3">{t("testimonials")}</Link>
                      </li>
                      <li>
                        <Link href="/index-3">{t("case_studies")}</Link>
                      </li>
                      <li>
                        <Link href="/index-3">{t("free_quote")}</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget gallery-widget">
                  <div className="widget-title">
                    <h3>{t("instagram_post")}</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="image-list clearfix">
                      <li>
                        <figure className="image">
                          <Link
                            href="assets/images/resource/footer-2.jpg"
                            className="lightbox-image"
                            data-fancybox="gallery"
                          >
                            <img
                              src="/assets/images/resource/footer-2.jpg"
                              alt=""
                            />
                          </Link>
                        </figure>
                      </li>
                      <li>
                        <figure className="image">
                          <Link
                            href="/assets/images/resource/footer-3.jpg"
                            className="lightbox-image"
                            data-fancybox="gallery"
                          >
                            <img
                              src="/assets/images/resource/footer-3.jpg"
                              alt=""
                            />
                          </Link>
                        </figure>
                      </li>
                      <li>
                        <figure className="image">
                          <Link
                            href="/assets/images/resource/footer-4.jpg"
                            className="lightbox-image"
                            data-fancybox="gallery"
                          >
                            <img
                              src="/assets/images/resource/footer-4.jpg"
                              alt=""
                            />
                          </Link>
                        </figure>
                      </li>
                      <li>
                        <figure className="image">
                          <Link
                            href="/assets/images/resource/footer-5.jpg"
                            className="lightbox-image"
                            data-fancybox="gallery"
                          >
                            <img
                              src="/assets/images/resource/footer-5.jpg"
                              alt=""
                            />
                          </Link>
                        </figure>
                      </li>
                      <li>
                        <figure className="image">
                          <Link
                            href="/assets/images/resource/footer-6.jpg"
                            className="lightbox-image"
                            data-fancybox="gallery"
                          >
                            <img
                              src="/assets/images/resource/footer-6.jpg"
                              alt=""
                            />
                          </Link>
                        </figure>
                      </li>
                      <li>
                        <figure className="image">
                          <Link
                            href="/assets/images/resource/footer-7.jpg"
                            className="lightbox-image"
                            data-fancybox="gallery"
                          >
                            <img
                              src="/assets/images/resource/footer-7.jpg"
                              alt=""
                            />
                          </Link>
                        </figure>
                      </li>
                    </ul>
                    <h5>
                      <Link href="/index-3">{t("join_with_us")}</Link>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="auto-container">
            <div className="bottom-inner">
              <div className="left-column">
                <p>© 2024, {t("all_rights_reserved")}</p>
                <ul className="footer-nav clearfix">
                  <li>
                    <Link href="/index-3">{t("terms_conditions")}</Link>
                  </li>
                  <li>
                    <Link href="/index-3">{t("privacy_policy")}</Link>
                  </li>
                  <li>
                    <Link href="/index-3">{t("investor_rights")}</Link>
                  </li>
                </ul>
              </div>
              <ul className="social-links clearfix">
                <li>
                  <h5>{t("follow_us")}</h5>
                </li>
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
                    <i className="fa-solid fa-basketball" />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <i className="fa-brands fa-youtube" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* footer-style-three end */}
    </>
  );
}
