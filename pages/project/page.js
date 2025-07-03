'use client';
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";

export default function ProjectPage() {
    const [activeFilter, setActiveFilter] = useState("all");

    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
    };

    return (
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Project">
            <section className="project-page-section three-columns sec-pad">
                <div className="auto-container">
                    <div className="sortable-masonry">
                        {/* Filter Tabs */}
                        <div className="filters centred">
                            <ul className="filter-tabs filter-btns clearfix">
                                <li
                                    className={`filter ${activeFilter === "all" ? "active" : ""}`}
                                    onClick={() => handleFilterClick("all")}
                                >
                                    View All <span>22</span>
                                </li>
                                <li
                                    className={`filter ${activeFilter === "business" ? "active" : ""}`}
                                    onClick={() => handleFilterClick("business")}
                                >
                                    Business
                                </li>
                                <li
                                    className={`filter ${activeFilter === "consulting" ? "active" : ""}`}
                                    onClick={() => handleFilterClick("consulting")}
                                >
                                    Consulting
                                </li>
                                <li
                                    className={`filter ${activeFilter === "innovative" ? "active" : ""}`}
                                    onClick={() => handleFilterClick("innovative")}
                                >
                                    Innovative
                                </li>
                                <li
                                    className={`filter ${activeFilter === "investment" ? "active" : ""}`}
                                    onClick={() => handleFilterClick("investment")}
                                >
                                    Investment
                                </li>
                                <li
                                    className={`filter ${activeFilter === "management" ? "active" : ""}`}
                                    onClick={() => handleFilterClick("management")}
                                >
                                    Management
                                </li>
                            </ul>
                        </div>

                        {/* Masonry Items */}
                        <div className="items-container row clearfix">
                            {[
                                {
                                    id: 1,
                                    classes: "all innovative business consulting",
                                    category: "Business",
                                    title: "Investing in Emerging Markets",
                                    imgSrc: "/assets/images/project/project-10.jpg",
                                },
                                {
                                    id: 2,
                                    classes: "all business innovative investment",
                                    category: "Investment",
                                    title: "Revisiting Your Investment Goals",
                                    imgSrc: "/assets/images/project/project-11.jpg",
                                },
                                {
                                    id: 3,
                                    classes: "all innovative consulting investment management",
                                    category: "Business",
                                    title: "Dimensional Fund Advisors Interview",
                                    imgSrc: "/assets/images/project/project-12.jpg",
                                },
                                {
                                    id: 4,
                                    classes: "all business consulting investment",
                                    category: "Financial Plan",
                                    title: "Interested in Giving Back this year",
                                    imgSrc: "/assets/images/project/project-13.jpg",
                                },
                                {
                                    id: 5,
                                    classes: "all innovative consulting investment",
                                    category: "Business",
                                    title: "Investing in Emerging Markets",
                                    imgSrc: "/assets/images/project/project-14.jpg",
                                },
                                {
                                    id: 6,
                                    classes: "all business investment management",
                                    category: "Business",
                                    title: "Revisiting Your Investment Goals",
                                    imgSrc: "/assets/images/project/project-15.jpg",
                                },
                            ]
                                .filter(item => activeFilter === "all" || item.classes.includes(activeFilter))
                                .map(item => (
                                    <div key={item.id} className={`col-lg-4 col-md-6 col-sm-12 masonry-item small-column ${item.classes}`}>
                                        <div className="project-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box">
                                                    <img src={item.imgSrc} alt={item.title} />
                                                </figure>
                                                <div className="content-inner">
                                                    <div className="text-box">
                                                        <h6>{item.category}</h6>
                                                        <h3>
                                                            <Link href="/project-details">{item.title}</Link>
                                                        </h3>
                                                    </div>
                                                    <div className="link">
                                                        <Link href="/project-details">
                                                            <i className="flaticon-diagonal-arrow"></i>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                    <div className="pagination-wrapper centred">
                        <ul className="pagination clearfix">
                        <li className="prev-btn">
                            <Link href="/project">
                            <i className="flaticon-right-chevron" />
                            Prev Page
                            </Link>
                        </li>
                        <li className="count-page">
                            <Link href="/project" className="current">
                            <span>01</span>
                            </Link>
                        </li>
                        <li className="count-page">
                            <Link href="/project">
                            <span>02</span>
                            </Link>
                        </li>
                        <li className="count-page">
                            <Link href="/project">
                            <span>03</span>
                            </Link>
                        </li>
                        <li className="count-page">
                            <Link href="/project">
                            <span>04</span>
                            </Link>
                        </li>
                        <li className="next-btn">
                            <Link href="/project">
                            Next Page <i className="flaticon-right-chevron" />
                            </Link>
                        </li>
                        </ul>
                    </div>
                </div>
            </section>

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
        </Layout>
    );
}
