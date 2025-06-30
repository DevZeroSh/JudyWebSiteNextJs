"use client";
import Link from "next/link";
import TestimonialSlider1 from "@/components/slider/TestimonialSlider01";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("aboutStyleThree");

  return (
    <>
      {/* about-style-three */}
      <section className="about-style-three sec-pad">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-7 col-md-12 col-sm-12 image-column">
              <div className="image-box">
                <div
                  className="image-shape"
                  style={{
                    backgroundImage: "url(/assets/images/shape/shape-24.png)",
                  }}
                />
                <figure className="image image-1">
                  <img src="/assets/images/about-2.jpg" alt="" />
                </figure>
                <figure className="image image-2">
                  <img src="/assets/images/about-1.jpg" alt="" />
                </figure>
                <div className="image-content">
                  <h6>{t("date")}</h6>
                  <div className="icon-box">
                    <i className="flaticon-diagonal-arrow" />
                  </div>
                  <h2>
                    {t("number")}
                    <span>{t("million")}</span>
                  </h2>
                  <p>{t("benefit")}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12 content-column">
              <div className="content-box">
                <div className="sec-title">
                  <span className="sub-title">{t("subTitle")}</span>
                  <h2>{t("heading")}</h2>
                </div>
                <div className="text-box">
                  <p>{t("paragraph")}</p>
                </div>
                <TestimonialSlider1 />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about-style-three end */}
    </>
  );
}
