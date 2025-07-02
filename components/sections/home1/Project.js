"use client";
import { useState } from "react";
import TestimonialSlider07 from "@/components/slider/TestimonialSlider07";
import TestimonialSlider02 from "@/components/slider/TestimonialSlider02";
import TestimonialSlider03 from "@/components/slider/TestimonialSlider03";
import TestimonialSlider04 from "@/components/slider/TestimonialSlider04";

export default function Project() {
  const [activeTab, setActiveTab] = useState("#tab-5");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  return (
    <>
      {/* project-section */}
      <section className="project-section">
        <div className="auto-container">
          <div className="sec-title">
            <span className="sub-title">our companies</span>
            <h2>Companies we’re proud of</h2>
          </div>
          <div className="project-tab">
            <div
              className="shape"
              style={{
                backgroundImage: `url(/assets/images/shape/shape-10.png)`,
              }}
            />
            <div className="row clearfix">
              <div className="col-lg-3 col-md-12 col-sm-12 btn-column">
                <div className="tab-btn-box">
                  <ul className="tab-btns project-tab-btns clearfix">
                    <li
                      className={`p-tab-btn ${
                        activeTab === "#tab-5" ? "active-btn" : ""
                      }`}
                      onClick={() => handleTabClick("#tab-5")}
                    >
                      View All Companies
                    </li>
                    <li
                      className={`p-tab-btn ${
                        activeTab === "#tab-6" ? "active-btn" : ""
                      }`}
                      onClick={() => handleTabClick("#tab-6")}
                    >
                      Noonmar
                    </li>
                    <li
                      className={`p-tab-btn ${
                        activeTab === "#tab-7" ? "active-btn" : ""
                      }`}
                      onClick={() => handleTabClick("#tab-7")}
                    >
                      Noontek
                    </li>
                    <li
                      className={`p-tab-btn ${
                        activeTab === "#tab-8" ? "active-btn" : ""
                      }`}
                      onClick={() => handleTabClick("#tab-8")}
                    >
                      Smartinb
                    </li>
                    <li
                      className={`p-tab-btn ${
                        activeTab === "#tab-9" ? "active-btn" : ""
                      }`}
                      onClick={() => handleTabClick("#tab-9")}
                    >
                      Soonkitchen
                    </li>
                    <li
                      className={`p-tab-btn ${
                        activeTab === "#tab-10" ? "active-btn" : ""
                      }`}
                      onClick={() => handleTabClick("#tab-10")}
                    >
                      Nooncar
                    </li>
                    <li
                      className={`p-tab-btn ${
                        activeTab === "#tab-10" ? "active-btn" : ""
                      }`}
                      onClick={() => handleTabClick("#tab-10")}
                    >
                      GameFlask
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-9 col-md-12 col-sm-12 content-column">
                <div className="p-tabs-content">
                  <div
                    className={`p-tab ${
                      activeTab === "#tab-5" ? "active-tab" : ""
                    }`}
                    id="tab-5"
                  >
                    <TestimonialSlider07 />
                  </div>
                  <div
                    className={`p-tab ${
                      activeTab === "#tab-6" ? "active-tab" : ""
                    }`}
                    id="tab-6"
                  >
                    <TestimonialSlider07 />
                  </div>
                  <div
                    className={`p-tab ${
                      activeTab === "#tab-7" ? "active-tab" : ""
                    }`}
                    id="tab-7"
                  >
                    <TestimonialSlider07 />
                  </div>
                  <div
                    className={`p-tab ${
                      activeTab === "#tab-8" ? "active-tab" : ""
                    }`}
                    id="tab-8"
                  >
                    <TestimonialSlider07 />
                  </div>
                  <div
                    className={`p-tab ${
                      activeTab === "#tab-9" ? "active-tab" : ""
                    }`}
                    id="tab-9"
                  >
                    <TestimonialSlider07 />
                  </div>
                  <div
                    className={`p-tab ${
                      activeTab === "#tab-10" ? "active-tab" : ""
                    }`}
                    id="tab-10"
                  >
                    <TestimonialSlider07 />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* project-section end */}
    </>
  );
}
