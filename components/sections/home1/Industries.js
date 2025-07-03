"use client";

import Link from "next/link";
import { useState } from "react";
import { industries } from "@/StaticData/Home";
import { useTranslation } from "react-i18next";

export default function Industries() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const [activeTab, setActiveTab] = useState(industries[0].id);

  return (
    <section className="industries-section">
      <div className="outer-container">
        <div
          className="bg-layer"
          style={{
            backgroundImage: "url(/assets/images/background/industries-bg.jpg)",
          }}
        />
        <div className="auto-container">
          <div className="tabs-box">
            <div className="row clearfix">
              {/* Content Column */}
              <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                <div className="content-box">
                  <div className="sec-title light">
                    <span className="sub-title">invest</span>
                    <h2>Investment Sectors</h2>
                  </div>
                  <div className="tab-btns tab-buttons clearfix">
                    {industries.map((industry) => (
                      <div
                        key={industry.id}
                        className={`tab-btn ${
                          activeTab === industry.id ? "active-btn" : ""
                        }`}
                        onClick={() => setActiveTab(industry.id)}
                      >
                        <span className="count-text">{industry.count}</span>
                        <h3>{industry.title[currentLang]}</h3>
                        <Link href={industry.link}>
                          <i className="flaticon-diagonal-arrow"></i>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Inner Column */}
              <div className="col-lg-4 col-md-12 col-sm-12 inner-column">
                <div className="tabs-content">
                  {industries.map((industry) => (
                    <div
                      key={industry.id}
                      className={`tab ${
                        activeTab === industry.id ? "active-tab" : ""
                      }`}
                      id={industry.id}
                    >
                      <div className="inner-box">
                        <h3>{industry.title[currentLang]}</h3>
                        <p>{industry.description[currentLang]}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
