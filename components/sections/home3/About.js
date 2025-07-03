"use client";
import Link from "next/link";
import TestimonialSlider1 from "@/components/slider/TestimonialSlider01";
import { useTranslation } from "react-i18next";
import { aboutUs } from "@/StaticData/Home";

export default function About() {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  return (
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
                <img src="/assets/images/about-2.jpg" alt="about" />
              </figure>
              <figure className="image image-2">
                <img src="/assets/images/about-1.jpg" alt="about" />
              </figure>
              <div className="image-content">
                <h6>2013</h6>
                <div className="icon-box">
                  <i className="flaticon-diagonal-arrow" />
                </div>
                <h2>
                  10<span>M</span>
                </h2>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-md-12 col-sm-12 content-column">
            <div className="content-box">
              <div className="sec-title">
                <span className="sub-title">{aboutUs.title[lang]}</span>
                <h2>{aboutUs.title[lang]}</h2>
              </div>
              <div className="text-box">
                <p>{aboutUs.content[lang]}</p>
              </div>
              <TestimonialSlider1 />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
