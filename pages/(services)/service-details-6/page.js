"use client"; // Add this line
import { useState } from 'react';
import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function Home() {
    const [activeTab, setActiveTab] = useState('#tab-1');

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Fiduciary Consulting">
                <div>
                    {/* Service Details */}
                    <section className="service-details sec-pad">
                        <div className="auto-container">
                            <div className="row clearfix">
                                <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                                    <div className="service-details-content">
                                        <div className="content-one">
                                            <figure className="image-box">
                                                <img src="assets/images/service/service-13.jpg" alt="" />
                                            </figure>
                                            <div className="text-box">
                                                <h2>Fiduciary Consulting</h2>
                                                <p className="bold-text">
                                                    “Obligations of business it will frequently occur pleasure
                                                    have repudiated annoyances accept wise man therefore always
                                                    holds in these matters beguiled and demoralized”.
                                                </p>
                                                <p>
                                                    It is a long established fact that a reader will be distracted
                                                    by the readable content of page when looking at its layout.
                                                    The point of using lorem ipsum is that it has more-or-less
                                                    normal distribution letters, as opposed to using 'Content
                                                    here, content here', making it look like readable english many
                                                    desktop publishing packages and web page editors now use Lorem
                                                    Ipsum as their default model versions have evolved over the
                                                    years.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="content-two">
                                            <div className="row clearfix">
                                                <div className="col-lg-6 col-md-6 col-sm-12 chooseus-block">
                                                    <div className="chooseus-block-three">
                                                        <div className="inner-box">
                                                            <span className="count-text">01</span>
                                                            <h3>
                                                                Investment{" "}
                                                                <span>
                                                                    Policy <br />
                                                                    Statements
                                                                </span>
                                                            </h3>
                                                            <p>
                                                                Prevents our being able to do what we like best, every
                                                                circumstance less owing to the claims.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 chooseus-block">
                                                    <div className="chooseus-block-three">
                                                        <div className="inner-box">
                                                            <span className="count-text">02</span>
                                                            <h3>
                                                                Spending &amp; <br />
                                                                <span>Distribution Policies</span>
                                                            </h3>
                                                            <p>
                                                                Undertakes laborious physical except to obtain some
                                                                advantage from it right to find fault.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 chooseus-block">
                                                    <div className="chooseus-block-three">
                                                        <div className="inner-box">
                                                            <span className="count-text">03</span>
                                                            <h3>
                                                                Asset <span>Allocation</span>
                                                            </h3>
                                                            <p>
                                                                Cases are perfectly simple and easy to distinguish. In a
                                                                free hour, when all choice is untrammeled hold.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 chooseus-block">
                                                    <div className="chooseus-block-three">
                                                        <div className="inner-box">
                                                            <span className="count-text">04</span>
                                                            <h3>
                                                                Portfolio <span>Rebalancing</span>
                                                            </h3>
                                                            <p>
                                                                Take a trivial example, which of ever undertakes
                                                                laborious physical obtain some advantages.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="content-three">
                                            <h3>Performance Reporting</h3>
                                            <p className="bold-text">
                                                Extremely painful or again is there anyone who loves or case
                                                pursues,
                                            </p>
                                            <div className="inner-box">
                                                <div className="single-item">
                                                    <h4>Financial Planning for Executives:</h4> Fault with a man
                                                    who chooses to enjoy a pleasure that has no annoying
                                                    consequences, or one who avoids a pain that.
                                                </div>
                                                <div className="single-item">
                                                    <h4>Tax Planning &amp; Preparation:</h4> Expound the actual
                                                    teachings of the great explorer of the truth, the
                                                    master-builder of human happiness or avoids pleasure itself.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="content-four">
                                            <div className="upper-box">
                                                <h3>Data Aggregation</h3>
                                                <p>
                                                    Readable content of page when looking at its layout the point
                                                    of using lorem ipsum is that it has more-or-less normal
                                                    distribution letters as opposed to using.
                                                </p>
                                            </div>
                                            <div className="tabs-box">
                                                <div className="tab-btns tab-buttons clearfix">
                                                    <div
                                                        className={`tab-btn ${activeTab === '#tab-1' ? 'active-btn' : ''}`}
                                                        onClick={() => setActiveTab('#tab-1')}
                                                    >
                                                        Value Maximization
                                                    </div>
                                                    <div
                                                        className={`tab-btn ${activeTab === '#tab-2' ? 'active-btn' : ''}`}
                                                        onClick={() => setActiveTab('#tab-2')}
                                                    >
                                                        Greater Success Rate
                                                    </div>
                                                    <div
                                                        className={`tab-btn ${activeTab === '#tab-3' ? 'active-btn' : ''}`}
                                                        onClick={() => setActiveTab('#tab-3')}
                                                    >
                                                        Exit Planning
                                                    </div>
                                                </div>
                                                <div className="tabs-content">
                                                    <div className={`tab ${activeTab === '#tab-1' ? 'active-tab' : ''}`} id="tab-1">
                                                        <div className="text-box">
                                                            <p>
                                                                Must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and will
                                                                give you a complete account of the system, and expound the actual of the truth the master-builder of human
                                                                happiness.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className={`tab ${activeTab === '#tab-2' ? 'active-tab' : ''}`} id="tab-2">
                                                        <div className="text-box">
                                                            <p>
                                                            I shall outline how this misunderstanding of condemning pleasure and extolling pain arose and provide a thorough explanation of this doctrine, revealing the true nature of the principles that shape human happiness
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className={`tab ${activeTab === '#tab-3' ? 'active-tab' : ''}`} id="tab-3">
                                                        <div className="text-box">
                                                            <p>
                                                            I must clarify how this misconception of condemning pleasure and celebrating pain came into being, offering you a full explanation of the system, and laying bare the truth behind the foundation of human happiness
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                                    <div className="service-sidebar">
                                        <div className="sidebar-widget category-widget">
                                            <ul className="category-list clearfix">
                                                <li>
                                                    <Link href="/service-details">
                                                        <span>Traditional Consulting</span>
                                                        <i className="flaticon-diagonal-arrow" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/service-details-2">
                                                        <span>Portfolio Management</span>
                                                        <i className="flaticon-diagonal-arrow" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/service-details-3">
                                                        <span>Asset Allocation</span>
                                                        <i className="flaticon-diagonal-arrow" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/service-details-4">
                                                        <span>Risk Management</span>
                                                        <i className="flaticon-diagonal-arrow" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/service-details-5">
                                                        <span>Policy Development</span>
                                                        <i className="flaticon-diagonal-arrow" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/service-details-6" className="current">
                                                        <span>Fiduciary Consulting</span>
                                                        <i className="flaticon-diagonal-arrow" />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="download-widget">
                                            <ul className="download-list clearfix">
                                                <li>
                                                    <div className="icon">
                                                        <i className="flaticon-download-pdf" />
                                                    </div>
                                                    <h5>Service Brochure</h5>
                                                    <button type="button">
                                                        <i className="flaticon-download" />
                                                    </button>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <i className="flaticon-download-pdf" />
                                                    </div>
                                                    <h5>Terms &amp; Conditions</h5>
                                                    <button type="button">
                                                        <i className="flaticon-download" />
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="support-widget">
                                            <div className="icon-box">
                                                <img src="assets/images/icons/icon-31.png" alt="" />
                                            </div>
                                            <figure className="image-box">
                                                <img src="assets/images/resource/support-1.jpg" alt="" />
                                            </figure>
                                            <span className="big-text">Counsolve</span>
                                            <h3>
                                                Giving Wings <br />
                                                to your Investment.
                                            </h3>
                                            <p>Actual teachings of the great</p>
                                            <Link href="/contact" className="theme-btn btn-two">
                                                Get Support
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Service Details End */}

                    {/* cta-section */}
                    <section className="cta-section alternat-2">
                        <div className="outer-container">
                        <div
                            className="pattern-layer"
                            style={{ backgroundImage: "url(assets/images/shape/shape-25.png)" }}
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
                                    The moment, so blinded by desire, that they cannot foresee and
                                    trouble that are bound to ensue.
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
