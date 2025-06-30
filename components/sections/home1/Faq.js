"use client";
import { useState } from "react";
import Link from "next/link";

export default function Faq() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({ status: false, key });
    } else {
      setIsActive({ status: true, key });
    }
  };

  return (
    <section className="faq-section sec-pad">
      <span className="big-text">faq’s</span>
      <div className="auto-container">
        <div className="row clearfix">
          {/* Image Column */}
          <div className="col-lg-6 col-md-12 col-sm-12 image-column">
            <div className="image-box">
              <figure className="image">
                <img src="/assets/images/faq-1.jpg" alt="FAQ" />
              </figure>
              <div className="btn-box">
                <Link href="/faq" className="theme-btn btn-one">
                  Read More Q&A
                </Link>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="col-lg-6 col-md-12 col-sm-12 content-column">
            <div className="content-box">
              <div className="sec-title">
                <span className="sub-title">Faq’s</span>
                <h2>
                  Get the Answers <br />
                  to Common Questions
                </h2>
              </div>
              <ul className="accordion-box">
                {/* Question 1 */}
                <li
                  className={`accordion block ${
                    isActive.key === 0 ? "active-block" : ""
                  }`}
                >
                  <div
                    className={`acc-btn ${isActive.key === 0 ? "active" : ""}`}
                    onClick={() => handleToggle(0)}
                  >
                    <div className="icon-box">
                      <i className="flaticon-right-chevron"></i>
                    </div>
                    <h4>Investment guide</h4>
                  </div>
                  <div
                    className={`acc-content ${
                      isActive.key === 0 ? "current" : ""
                    }`}
                  >
                    <p>
                      In this method, the investor entrusts the fund management
                      with following up on investment operations and is subject
                      to the law of profit and loss. The investor receives
                      annual profits from the fund, ranging between 5% and 15%.
                      The investor also benefits from the increase in the market
                      value of the investment.
                    </p>
                  </div>
                </li>

                {/* Question 2 */}
                <li
                  className={`accordion block ${
                    isActive.key === 1 ? "active-block" : ""
                  }`}
                >
                  <div
                    className={`acc-btn ${isActive.key === 1 ? "active" : ""}`}
                    onClick={() => handleToggle(1)}
                  >
                    <div className="icon-box">
                      <i className="flaticon-right-chevron"></i>
                    </div>
                    <h4>Deposit for the purpose of citizenship</h4>
                  </div>
                  <div
                    className={`acc-content ${
                      isActive.key === 1 ? "current" : ""
                    }`}
                  >
                    <p>
                      Our power of choice is untrammelled and when nothing
                      prevents our being able to do what we like best, every
                      circumstance owing to the claims.
                    </p>
                  </div>
                </li>

                {/* Question 3 */}
                <li
                  className={`accordion block ${
                    isActive.key === 2 ? "active-block" : ""
                  }`}
                >
                  <div
                    className={`acc-btn ${isActive.key === 2 ? "active" : ""}`}
                    onClick={() => handleToggle(2)}
                  >
                    <div className="icon-box">
                      <i className="flaticon-right-chevron"></i>
                    </div>
                    <h4>Can you guarantee for growth?</h4>
                  </div>
                  <div
                    className={`acc-content ${
                      isActive.key === 2 ? "current" : ""
                    }`}
                  >
                    <p>
                      Our power of choice is untrammelled and when nothing
                      prevents our being able to do what we like best, every
                      circumstance owing to the claims.
                    </p>
                  </div>
                </li>

                {/* Question 4 */}
                <li
                  className={`accordion block ${
                    isActive.key === 3 ? "active-block" : ""
                  }`}
                >
                  <div
                    className={`acc-btn ${isActive.key === 3 ? "active" : ""}`}
                    onClick={() => handleToggle(3)}
                  >
                    <div className="icon-box">
                      <i className="flaticon-right-chevron"></i>
                    </div>
                    <h4>What makes your business plans so special?</h4>
                  </div>
                  <div
                    className={`acc-content ${
                      isActive.key === 3 ? "current" : ""
                    }`}
                  >
                    <p>
                      Our power of choice is untrammelled and when nothing
                      prevents our being able to do what we like best, every
                      circumstance owing to the claims.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
