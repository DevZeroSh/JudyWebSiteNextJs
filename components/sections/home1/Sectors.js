import { useTranslation } from "react-i18next";
import { whyChooseUs } from "@/StaticData/Home";

export default function Sectors() {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <>
      <section className="chooseus-section sec-pad">
        <span className="big-text">
          {lang === "ar" ? "لماذا" : "Why"} <br />
          {lang === "ar" ? "اخترنا" : "Choose Us"}
        </span>
        <div className="auto-container">
          <div className="sec-title centred">
            <span className="sub-title">
              {lang === "ar" ? "لماذا تختارنا" : "Why Choose Us"}
            </span>
            <h2>
              {lang === "ar"
                ? "أسباب اختيار جودي"
                : "Reasons for Choosing Judy"}
            </h2>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-6 col-sm-12 left-column">
              <div className="inner-content">
                {whyChooseUs.slice(0, 3).map((item, index) => (
                  <div className="chooseus-block-one" key={item.key}>
                    <div className="inner-box">
                      <div className="icon-box">
                        <i className={item.icon} />
                      </div>
                      <div className="static-content">
                        <h3>{item.title[lang]}</h3>
                        <p>{item.brief[lang]}</p>
                      </div>
                      <div className="overlay-content">
                        <p>{item.full[lang]}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 image-column">
              <div className="image-box">
                <figure className="image">
                  <img src="/assets/images/sectors.jpg" alt="" />
                </figure>
                <div className="image-shape">
                  <img src="/assets/images/shape/shape-8.png" alt="" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 right-column">
              <div className="inner-content">
                {whyChooseUs.slice(3, 6).map((item, index) => (
                  <div className="chooseus-block-one" key={item.key}>
                    <div className="inner-box">
                      <div className="icon-box">
                        <i className={item.icon} />
                      </div>
                      <div className="static-content">
                        <h3>{item.title[lang]}</h3>
                        <p>{item.brief[lang]}</p>
                      </div>
                      <div className="overlay-content">
                        <p>{item.full[lang]}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
