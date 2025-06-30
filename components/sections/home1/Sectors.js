import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Sectors() {
    const t = useTranslations("sectorsPage");

    return (
        <>
        {/* chooseus-section */}
        <section className="chooseus-section sec-pad">
          <span className="big-text">
            {t("why")} <br />
            {t("chooseUs")}
          </span>
          <div className="auto-container">
            <div className="sec-title centred">
              <span className="sub-title">{t("sectors")}</span>
              <h2>{t("title")}</h2>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-6 col-sm-12 left-column">
                <div className="inner-content">
                  <div className="chooseus-block-one">
                    <div className="inner-box">
                      <div className="icon-box">
                        <i className="flaticon-knowledge" />
                      </div>
                      <div className="static-content">
                        <h3>{t("knowledge.title")}</h3>
                        <p>{t("knowledge.brief")}</p>
                      </div>
                      <div className="overlay-content">
                        <p>{t("knowledge.full")}</p>
                      </div>
                    </div>
                  </div>
                  <div className="chooseus-block-one">
                    <div className="inner-box">
                      <div className="icon-box">
                        <i className="flaticon-united" />
                      </div>
                      <div className="static-content">
                        <h3>{t("team.title")}</h3>
                        <p>{t("team.brief")}</p>
                      </div>
                      <div className="overlay-content">
                        <p>{t("team.full")}</p>
                      </div>
                    </div>
                  </div>
                  <div className="chooseus-block-one">
                    <div className="inner-box">
                      <div className="icon-box">
                        <i className="flaticon-clock" />
                      </div>
                      <div className="static-content">
                        <h3>{t("time.title")}</h3>
                        <p>{t("time.brief")}</p>
                      </div>
                      <div className="overlay-content">
                        <p>{t("time.full")}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 image-column">
                <div className="image-box">
                  <figure className="image">
                    <img src="assets/images/sectors.jpg" alt="" />
                  </figure>
                  <div className="image-shape">
                    <img src="assets/images/shape/shape-8.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 right-column">
                <div className="inner-content">
                  <div className="chooseus-block-one">
                    <div className="inner-box">
                      <div className="icon-box">
                        <i className="flaticon-risk-management" />
                      </div>
                      <div className="static-content">
                        <h3>{t("risk.title")}</h3>
                        <p>{t("risk.brief")}</p>
                      </div>
                      <div className="overlay-content">
                        <p>{t("risk.full")}</p>
                      </div>
                    </div>
                  </div>
                  <div className="chooseus-block-one">
                    <div className="inner-box">
                      <div className="icon-box">
                        <i className="flaticon-monitor" />
                      </div>
                      <div className="static-content">
                        <h3>{t("tech.title")}</h3>
                        <p>{t("tech.brief")}</p>
                      </div>
                      <div className="overlay-content">
                        <p>{t("tech.full")}</p>
                      </div>
                    </div>
                  </div>
                  <div className="chooseus-block-one">
                    <div className="inner-box">
                      <div className="icon-box">
                        <i className="flaticon-advice" />
                      </div>
                      <div className="static-content">
                        <h3>{t("advice.title")}</h3>
                        <p>{t("advice.brief")}</p>
                      </div>
                      <div className="overlay-content">
                        <p>{t("advice.full")}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* chooseus-section end */}
        </>
    );
}
