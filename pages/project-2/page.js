'use client';
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";

export default function ProjectPage() {
    const [activeFilter, setActiveFilter] = useState("all");

    // Function to handle filter clicks
    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
    };

    // Project data
    const projects = [
        {
            id: 1,
            category: "business innovative consulting",
            image: "/assets/images/project/project-16.jpg",
            title: "Investing in Emerging Markets",
            subtitle: "Business",
        },
        {
            id: 2,
            category: "business innovative investment",
            image: "/assets/images/project/project-17.jpg",
            title: "Revisiting Your Investment Goals",
            subtitle: "Investment",
        },
        {
            id: 3,
            category: "innovative consulting investment management",
            image: "/assets/images/project/project-18.jpg",
            title: "Dimensional Fund Advisors Interview",
            subtitle: "Business",
        },
        {
            id: 4,
            category: "business consulting investment",
            image: "/assets/images/project/project-19.jpg",
            title: "Interested in Giving Back this year",
            subtitle: "Financial Plan",
        },
        {
            id: 5,
            category: "innovative consulting investment",
            image: "/assets/images/project/project-20.jpg",
            title: "Investing in Emerging Markets",
            subtitle: "Business",
        },
        {
            id: 6,
            category: "business investment management",
            image: "/assets/images/project/project-21.jpg",
            title: "Revisiting Your Investment Goals",
            subtitle: "Investment",
        },
    ];


    return (
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Project">
            <section className="project-page-section two-columns sec-pad">
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
                            {projects
                                .filter(
                                    project =>
                                        activeFilter === "all" ||
                                        project.category.includes(activeFilter)
                                )
                                .map(project => (
                                    <div
                                        key={project.id}
                                        className={`col-lg-6 col-md-6 col-sm-12 masonry-item small-column ${project.category}`}
                                    >
                                        <div className="project-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box">
                                                    <img src={project.image} alt={project.title} />
                                                </figure>
                                                <div className="content-inner">
                                                    <div className="text-box">
                                                        <h6>{project.subtitle}</h6>
                                                        <h3>
                                                            <a href="/project-details">
                                                                {project.title}
                                                            </a>
                                                        </h3>
                                                    </div>
                                                    <div className="link">
                                                        <a href="/project-details">
                                                            <i className="flaticon-diagonal-arrow"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="view-btn">
                                                    <a
                                                        href={project.image}
                                                        className="lightbox-image"
                                                        data-fancybox="gallery"
                                                    >
                                                        <i className="flaticon-zoom-in"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                    <div className="more-btn centred">
                        <button className="theme-btn btn-two">Click to More</button>
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
