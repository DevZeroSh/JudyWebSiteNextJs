import Layout from "@/components/layout/Layout"
import TestimonialSlider04 from "@/components/slider/TestimonialSlider04"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Team">
                <div>
                    {/* team-section */}
                    <section className="team-section about-page sec-pad">
                        <div className="auto-container">
                        <div className="sec-title">
                            <span className="sub-title">Leadership</span>
                            <h2>Team Behind Company</h2>
                        </div>
                            <TestimonialSlider04 /> 
                        <div className="more-text centred">
                            <h5>
                            <a href="/team">
                                View All Members
                                <i className="flaticon-right-chevron" />
                            </a>
                            </h5>
                        </div>
                        </div>
                    </section>
                    {/* team-section end */}

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
    )
}