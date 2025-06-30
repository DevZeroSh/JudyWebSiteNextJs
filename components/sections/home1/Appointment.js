import Link from "next/link";

export default function Appointment() {
  return (
    <>
      {/* appointment-section */}
      <section className="appointment-section">
        <div className="outer-container sec-pad">
          <div className="image-layer">
            <img src="/assets/images/resource/cat-1.png" alt="" />
          </div>
          <div className="image-layer">
            <img src="/assets/images/icons/growth-1.png" alt="" />
          </div>
          <div className="auto-container">
            <div className="sec-title light">
              <span className="sub-title">Appointment</span>
              <h2>Send your Proposal to us</h2>
            </div>
            <div className="row clearfix">
              <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                <div className="content-box">
                  <div className="form-inner">
                    <form method="post" action="index" className="default-form">
                      <div className="row clearfix">
                        <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                          <div className="form-group">
                            <input
                              type="text"
                              name="name"
                              placeholder="Name *"
                              required
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="email"
                              name="email"
                              placeholder="Email *"
                              required
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="text"
                              name="phone"
                              placeholder="Phone *"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                          <div className="form-group">
                            <div className="select-box">
                              <select className="selectmenu" name="subject">
                                <option value="subject">Subject</option>
                                <option value="consulting">
                                  Traditional Consulting
                                </option>
                                <option value="portfolio">
                                  Portfolio Management
                                </option>
                                <option value="asset-allocation">
                                  Asset Allocation
                                </option>
                              </select>
                            </div>
                          </div>
                          <div className="form-group">
                            <textarea
                              name="message"
                              placeholder="Message"
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                          <button type="submit" className="theme-btn btn-two">
                            Send Request
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 inner-column">
                <div className="inner-box">
                  <div className="shape"></div>
                  <div className="icon-box">
                    <i className="flaticon-customer-service"></i>
                  </div>
                  <ul className="info-list clearfix">
                    <li>
                      <h6>Off.Hrs</h6>
                      <h4>Mon - Sat: 09am to 06pm</h4>
                    </li>
                    <li>
                      <h6>Phone</h6>
                      <h4>
                        <a href="tel:80098765432">800.98.76.5432</a>
                      </h4>
                    </li>
                    <li>
                      <h6>Email</h6>
                      <h4>
                        <a href="mailto:sendmail@example.com">
                          sendmail@example.com
                        </a>
                      </h4>
                    </li>
                  </ul>
                  <ul className="social-links clearfix">
                    <li>
                      <Link href="/">
                        <i className="fa-brands fa-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fa-brands fa-square-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fa-brands fa-youtube"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* appointment-section end */}
    </>
  );
}
