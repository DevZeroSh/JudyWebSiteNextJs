import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Project Details">
        <div>
          {/* project-details */}
          <section className="project-details">
            <div className="auto-container">
              <div className="row clearfix">
                <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                  <div className="project-sidebar">
                    <div className="project-info-box">
                      <h3>
                        Project <br />
                        Information
                      </h3>
                    </div>
                    <div className="project-share-option">
                      <h5>Share this Project</h5>
                      <ul className="social-links clearfix">
                        <li>
                          <a href="/">
                            <i className="fa-brands fa-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <i className="fa-brands fa-square-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <i className="fa-brands fa-square-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <i className="fa-brands fa-square-pinterest" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 col-md-12 col-sm-12 sidebar-side">
                  <div className="project-details-content">
                    <div className="content-one">
                      <h2>Investing in Emerging Markets</h2>
                      <div className="text-box">
                        <p>
                          <span>S</span>imply dummy text of the printing and
                          typesetting industry lorem Ipsum has been the
                          industry's standard dummy text ever since the 2000,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book it has
                          survived not only
                        </p>
                        <p>
                          {" "}
                          five centuries, but also the leap into electronic
                          typesetting, remaining essentially unchanged all it
                          was popularised in the release of Letraset sheets.
                        </p>
                      </div>
                      <div className="image-box">
                        <div className="row clearfix">
                          <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                            <figure className="image">
                              <Link
                                href="assets/images/project/project-30.jpg"
                                className="lightbox-image"
                                data-fancybox="gallery"
                              >
                                <img
                                  src="assets/images/project/project-30.jpg"
                                  alt=""
                                />
                              </Link>
                            </figure>
                            <figure className="image">
                              <Link
                                href="assets/images/project/project-31.jpg"
                                className="lightbox-image"
                                data-fancybox="gallery"
                              >
                                <img
                                  src="assets/images/project/project-31.jpg"
                                  alt=""
                                />
                              </Link>
                            </figure>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                            <figure className="image">
                              <Link
                                href="assets/images/project/project-32.jpg"
                                className="lightbox-image"
                                data-fancybox="gallery"
                              >
                                <img
                                  src="assets/images/project/project-32.jpg"
                                  alt=""
                                />
                              </Link>
                            </figure>
                            <figure className="image">
                              <Link
                                href="assets/images/project/project-33.jpg"
                                className="lightbox-image"
                                data-fancybox="gallery"
                              >
                                <img
                                  src="assets/images/project/project-33.jpg"
                                  alt=""
                                />
                              </Link>
                            </figure>
                          </div>
                        </div>
                      </div>
                      <div className="lower-text">
                        <p>
                          Obligations of business it will frequently occur
                          pleasure have repudiated annoyances accept wise man
                          therefore always holds in these matters beguiled and
                          demoralized by the charms pleasure of the moment, so
                          blinded by desire, that they cannot foresee right to
                          find fault with a man chooses to enjoy a pleasure that
                          has no annoying consequences.
                        </p>
                      </div>
                    </div>
                    <div className="content-two">
                      <div className="single-item">
                        <div className="icon-box">
                          <i className="flaticon-difficulties" />
                        </div>
                        <h3>The Challenges</h3>
                        <p>
                          How all this mistaken idea of denouncing pleasure and
                          praising pain was born and we will give you acomplete
                          account of the system.
                        </p>
                        <h5>
                          We keep ourselves up to make your dreams come true,
                        </h5>
                        <ul className="list-item clearfix">
                          <li>Denounce with righteous indignation.</li>
                          <li>Belongs to those who fail.</li>
                          <li>Matters to this principle rejects pleasures.</li>
                        </ul>
                      </div>
                      <div className="single-item">
                        <div className="icon-box">
                          <i className="flaticon-achievement" />
                        </div>
                        <h3>The Solution</h3>
                        <p>
                          There are many variations of passages of lorem ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomised words
                          which don't look even slightly believable.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* project-details end */}
        </div>
      </Layout>
    </>
  );
}
