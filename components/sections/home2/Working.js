import Link from "next/link";

export default function Working() {
  return (
    <>
      {/* working-style-two */}
      <section className="working-style-two sec-pad">
        <div className="auto-container">
          <div className="sec-title centred">
            <span className="sub-title">How we works</span>
            <h2>We Plan for your Growth</h2>
          </div>
          <div className="inner-container">
            <div className="row clearfix">
              <div className="col-lg-3 col-md-6 col-sm-12 working-block">
                <div className="working-block-two">
                  <div className="inner-box">
                    <div className="upper-box centred">
                      <span className="count-text">01</span>
                      <div className="icon-box">
                        <i className="flaticon-meeting" />
                      </div>
                      <p>
                        Disbursement of $500,000 from the Central Bank and
                        purchase of shares from the Fund
                      </p>
                    </div>
                    <div className="lower-box">
                      <Link href="">
                        <span>First Step</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 working-block">
                <div className="working-block-two">
                  <div className="inner-box">
                    <div className="upper-box centred">
                      <span className="count-text">02</span>
                      <div className="icon-box">
                        <i className="flaticon-paper" />
                      </div>
                      <p>
                        Applying for permanent residence after obtaining the
                        conformity document
                      </p>
                    </div>
                    <div className="lower-box">
                      <Link href="">
                        <span>Second Step</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 working-block">
                <div className="working-block-two">
                  <div className="inner-box">
                    <div className="upper-box centred">
                      <span className="count-text">03</span>
                      <div className="icon-box">
                        <i className="flaticon-analysis" />
                      </div>
                      <p>Apply for Turkish citizenship</p>
                    </div>
                    <div className="lower-box">
                      <Link href="">
                        <span>Third Step</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 working-block">
                <div className="working-block-two">
                  <div className="inner-box">
                    <div className="upper-box centred">
                      <span className="count-text">04</span>
                      <div className="icon-box">
                        <i className="flaticon-submit" />
                      </div>
                      <p>
                        The duration of obtaining conformity and residency and
                        then citizenship ranges between 6-8 months.
                      </p>
                    </div>
                    <div className="lower-box">
                      <Link href="">
                        <span>Fourth Step</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* working-style-two end */}
    </>
  );
}
