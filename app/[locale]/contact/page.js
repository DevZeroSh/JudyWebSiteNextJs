import ContactForm from "./contactForm";
import Layout from "@/components/layout/Layout";
import Map from "@/components/Map";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Home() {
    const t = useTranslations();

  return (
    <>
      <Layout breadcrumbTitle={t("ContactDetails")} image={'/assets/images/contact.jpg'} >
        {/* <Map /> */}
        <div>
          {/* contact-section */}
          <section className="contact-section sec-pad">
            <div className="auto-container">
              <div className="row clearfix">
                <div className="col-lg-4 col-md-12 col-sm-12 title-column">
                  <div className="sec-title">
                    <span className="sub-title">Contact</span>
                    <h2>
                      Contact us <br />
                      for Top-Notch Service.
                    </h2>
                    <Link href="/contact" className="theme-btn btn-two">
                      Our Locations
                    </Link>
                  </div>
                </div>
                <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                  <div className="content-box">
                    <div className="row clearfix">
                      <div className="col-lg-6 col-md-6 col-sm-12 info-column">
                        <div className="info-block-one">
                          <div className="inner-box">
                            <div className="upper-box">
                              <div className="light-icon">
                                <i className="flaticon-customer-service-1" />
                              </div>
                              <h3>Support</h3>
                              <p>From our expert team</p>
                            </div>
                            <div className="lower-content">
                              <div className="single-item">
                                <div className="icon-box">
                                  <i className="flaticon-chat-2" />
                                </div>
                                <h6>Phone</h6>
                                <p>
                                  Finance:{" "}
                                  <Link href="tel:80098765432">
                                    800.98.76.5432
                                  </Link>{" "}
                                  <br />
                                  Operation:{" "}
                                  <Link href="tel:4188822333">
                                    (+41) 888.22.333
                                  </Link>
                                </p>
                              </div>
                              <div className="single-item">
                                <div className="icon-box">
                                  <i className="flaticon-mail" />
                                </div>
                                <h6>Email</h6>
                                <p>
                                  <Link href="mailto:sendmail@example.com">
                                    sendmail@example.com
                                  </Link>
                                </p>
                              </div>
                              {/* <div className="link">
                                <Link href="/contact">
                                  <span>Get Call Back</span>
                                </Link>
                              </div> */}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 info-column">
                        <div className="info-block-one">
                          <div className="inner-box">
                            <div className="upper-box">
                              <div className="light-icon">
                                <i className="flaticon-cityscape" />
                              </div>
                              <h3>Address</h3>
                              <p>To visiting our company</p>
                            </div>
                            <div className="lower-content">
                              <div className="single-item">
                                <div className="icon-box">
                                  <i className="flaticon-location-1" />
                                </div>
                                <h6>Address</h6>
                                <p>
                                  280 Granite Run Drive Suite <br />
                                  Hobert, LA 90010, USA.
                                </p>
                              </div>
                              <div className="single-item">
                                <div className="icon-box">
                                  <i className="flaticon-time-management" />
                                </div>
                                <h6>Off. Hours</h6>
                                <p>Mon - Sat: 9am to 6pm</p>
                              </div>
                              {/* <div className="link">
                                <Link
                                  href="https://www.google.com/maps"
                                  target="_blank"
                                >
                                  <span>View On Map</span>
                                </Link>
                              </div> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* contact-section end */}

          {/* Contact Form Section */}
<ContactForm/>
          {/* Contact Form Section End */}
        </div>
      </Layout>
    </>
  );
}
