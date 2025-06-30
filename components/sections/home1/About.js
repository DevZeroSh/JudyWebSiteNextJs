import Link from "next/link";

export default function About() {
    return (
        <>            
            {/* about-section */}
            <section className="about-section sec-pad">
                <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                    <div className="image-box">
                        <div className="image-shape">
                        <div
                            className="shape-1"
                            style={{
                            backgroundImage: "url(assets/images/shape/shape-1.png)"
                            }}
                        />
                        <div
                            className="shape-2"
                            style={{
                            backgroundImage: "url(assets/images/shape/shape-2.png)"
                            }}
                        />
                        <div
                            className="shape-3"
                            style={{
                            backgroundImage: "url(assets/images/shape/shape-3.png)"
                            }}
                        />
                        </div>
                        <figure className="image">
                        <img src="assets/images/resource/about-1.jpg" alt="" />
                        </figure>
                        <div className="experience-box">
                        <h2>9</h2>
                        <h6>years&nbsp;Experience</h6>
                        </div>
                        <div className="dot-box">
                        <span className="dot dot-1" />
                        <span className="dot dot-2" />
                        <span className="dot dot-3" />
                        <span className="dot dot-4" />
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                    <div className="content-box">
                        <div className="sec-title">
                        <span className="sub-title">About Us</span>
                        <h2>Experts in Providing Investment Consulting Services</h2>
                        </div>
                        <ul className="list-item clearfix">
                        <li>Investment Strategy Development</li>
                        <li>Risk Management</li>
                        </ul>
                        <div className="text-box">
                        <p>
                            Every pleasure is to be welcomed and every pain avoided. But in
                            certain circumstances and owing to the claims of duty
                            obligations of business it will frequently occur that.
                        </p>
                        </div>
                        <div className="btn-box">
                        <Link href="/about" className="theme-btn btn-two">
                            More About Us
                        </Link>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            {/* about-section end */}

        </>
    )
}
