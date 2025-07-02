"use client";
import Link from "next/link";
import { useState } from "react";

export default function Industries() {
  // State to manage active tab
  const [activeTab, setActiveTab] = useState("tab-1");

  // Handle tab change
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };
  return (
    <>
      {/* industries-section */}
      <section className="industries-section">
        <div className="outer-container">
          <div
            className="bg-layer"
            style={{
              backgroundImage:
                "url(/assets/images/background/industries-bg.jpg)",
            }}
          ></div>
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
                      <div
                        className={`tab-btn ${
                          activeTab === "tab-1" ? "active-btn" : ""
                        }`}
                        onClick={() => handleTabChange("tab-1")}
                      >
                        <span className="count-text">01</span>
                        <h3>Entrepreneurship Sector</h3>
                        <Link href="/">
                          <i className="flaticon-diagonal-arrow"></i>
                        </Link>
                      </div>
                      <div
                        className={`tab-btn ${
                          activeTab === "tab-2" ? "active-btn" : ""
                        }`}
                        onClick={() => handleTabChange("tab-2")}
                      >
                        <span className="count-text">02</span>
                        <h3>Technology Sector</h3>
                        <Link href="/">
                          <i className="flaticon-diagonal-arrow"></i>
                        </Link>
                      </div>
                      <div
                        className={`tab-btn ${
                          activeTab === "tab-3" ? "active-btn" : ""
                        }`}
                        onClick={() => handleTabChange("tab-3")}
                      >
                        <span className="count-text">03</span>
                        <h3>Food Industries Sector</h3>
                        <Link href="/">
                          <i className="flaticon-diagonal-arrow"></i>
                        </Link>
                      </div>
                      <div
                        className={`tab-btn ${
                          activeTab === "tab-4" ? "active-btn" : ""
                        }`}
                        onClick={() => handleTabChange("tab-4")}
                      >
                        <span className="count-text">04</span>
                        <h3>Automotive Sector</h3>
                        <Link href="/">
                          <i className="flaticon-diagonal-arrow"></i>
                        </Link>
                      </div>
                      {/* <div
                        className={`tab-btn ${
                          activeTab === "tab-5" ? "active-btn" : ""
                        }`}
                        onClick={() => handleTabChange("tab-5")}
                      >
                        <span className="count-text">05</span>
                        <h3>Profit distribution</h3>
                        <Link href="/">
                          <i className="flaticon-diagonal-arrow"></i>
                        </Link>
                      </div> */}
                    </div>
                  </div>
                </div>

                {/* Inner Column */}
                <div className="col-lg-4 col-md-12 col-sm-12 inner-column">
                  <div className="tabs-content">
                    <div
                      className={`tab ${
                        activeTab === "tab-1" ? "active-tab" : ""
                      }`}
                      id="tab-1"
                    >
                      <div className="inner-box">
                        <h3>Entrepreneurship Sector</h3>
                        <p>
                          Entrepreneurship Sector” is the formal term used to
                          describe the ecosystem that fosters innovation,
                          startup development, and entrepreneurial activity
                          within an economy.
                        </p>
                      </div>
                    </div>
                    <div
                      className={`tab ${
                        activeTab === "tab-2" ? "active-tab" : ""
                      }`}
                      id="tab-2"
                    >
                      <div className="inner-box">
                        <h3>Technology Sector</h3>
                        <p>
                          Technology Sector” refers to the industry segment
                          focused on innovation in computing, digital
                          infrastructure, and electronic systems, covering
                          companies that develop products or services in IT,
                          software, AI, and tech-based solutions.
                        </p>
                      </div>
                    </div>
                    <div
                      className={`tab ${
                        activeTab === "tab-3" ? "active-tab" : ""
                      }`}
                      id="tab-3"
                    >
                      <div className="inner-box">
                        <h3>Food Industries Sector</h3>
                        <p>
                          Food Industries Sector” refers to the industry
                          involved in the manufacturing, processing, packaging,
                          and distribution of food and beverage products,
                          transforming raw agricultural materials into
                          consumable goods on an industrial scale.
                        </p>
                      </div>
                    </div>
                    <div
                      className={`tab ${
                        activeTab === "tab-4" ? "active-tab" : ""
                      }`}
                      id="tab-4"
                    >
                      <div className="inner-box">
                        <h3>Automotive Sector</h3>
                        <p>
                          Automotive Sector” refers to the industry involved in
                          the design, development, manufacturing, marketing, and
                          sale of motor vehicles, including cars, trucks, and
                          buses, as well as parts suppliers and related
                          services.
                        </p>
                      </div>
                    </div>
                    {/* <div
                      className={`tab ${
                        activeTab === "tab-5" ? "active-tab" : ""
                      }`}
                      id="tab-5"
                    >
                      <div className="inner-box">
                        <h3>Profit distribution</h3>
                        <p>
                          Profit distribution is made annually to the investor's
                          bank account.
                        </p>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* industries-section end */}
    </>
  );
}
