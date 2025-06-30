"use client"
import { useState } from "react";
import TestimonialSlider07 from "@/components/slider/TestimonialSlider07";

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
                <span className="sub-title">Case Studies</span>
                <h2>Thinking Forward for your Results</h2>
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
                        View All Recents
                        </li>
                        <li
                        className={`p-tab-btn ${
                            activeTab === "#tab-6" ? "active-btn" : ""
                        }`}
                        onClick={() => handleTabClick("#tab-6")}
                        >
                        Business
                        </li>
                        <li
                        className={`p-tab-btn ${
                            activeTab === "#tab-7" ? "active-btn" : ""
                        }`}
                        onClick={() => handleTabClick("#tab-7")}
                        >
                        Consulting
                        </li>
                        <li
                        className={`p-tab-btn ${
                            activeTab === "#tab-8" ? "active-btn" : ""
                        }`}
                        onClick={() => handleTabClick("#tab-8")}
                        >
                        Innovative
                        </li>
                        <li
                        className={`p-tab-btn ${
                            activeTab === "#tab-9" ? "active-btn" : ""
                        }`}
                        onClick={() => handleTabClick("#tab-9")}
                        >
                        Investment
                        </li>
                        <li
                        className={`p-tab-btn ${
                            activeTab === "#tab-10" ? "active-btn" : ""
                        }`}
                        onClick={() => handleTabClick("#tab-10")}
                        >
                        Management
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="col-lg-9 col-md-12 col-sm-12 content-column">
                    <div className="p-tabs-content">
                    <div
                        className={`p-tab ${activeTab === "#tab-5" ? "active-tab" : ""}`}
                        id="tab-5"
                    >
                        <TestimonialSlider07 />
                    </div>
                    <div
                        className={`p-tab ${activeTab === "#tab-6" ? "active-tab" : ""}`}
                        id="tab-6"
                    >
                        <TestimonialSlider07 />
                    </div>
                    <div
                        className={`p-tab ${activeTab === "#tab-7" ? "active-tab" : ""}`}
                        id="tab-7"
                    >
                        <TestimonialSlider07 />
                    </div>
                    <div
                        className={`p-tab ${activeTab === "#tab-8" ? "active-tab" : ""}`}
                        id="tab-8"
                    >
                        <TestimonialSlider07 />
                    </div>
                    <div
                        className={`p-tab ${activeTab === "#tab-9" ? "active-tab" : ""}`}
                        id="tab-9"
                    >
                        <TestimonialSlider07 />
                    </div>
                    <div
                        className={`p-tab ${activeTab === "#tab-10" ? "active-tab" : ""}`}
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
    )
}
