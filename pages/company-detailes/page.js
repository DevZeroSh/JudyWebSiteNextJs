"use client"; 
import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={1}
        breadcrumbTitle="Portfolio Management"
      >
        <div>
          {/* Service Details */}
          <section className="service-details sec-pad">
            <div className="auto-container">
              <div className="row clearfix">
                <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                  <div className="service-details-content">
                    <div className="content-one">
                     
                      <div className="text-box">
                        <h2>Portfolio Management</h2>
                        <p className="bold-text">
                          “Obligations of business it will frequently occur
                          pleasure have repudiated annoyances accept wise man
                          therefore always holds in these matters beguiled and
                          demoralized”.
                        </p>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of page when
                          looking at its layout. The point of using lorem ipsum
                          is that it has more-or-less normal distribution
                          letters, as opposed to using 'Content here, content
                          here', making it look like readable english many
                          desktop publishing packages and web page editors now
                          use Lorem Ipsum as their default model versions have
                          evolved over the years.
                        </p>
                      </div>
                    </div>
                    <div className="content-three">
                      <h3>Performance Reporting</h3>
                      <p className="bold-text">
                        Extremely painful or again is there anyone who loves or
                        case pursues,
                      </p>
                      <div className="inner-box">
                        <div className="single-item">
                          <h4>Financial Planning for Executives:</h4> Fault with
                          a man who chooses to enjoy a pleasure that has no
                          annoying consequences, or one who avoids a pain that.
                        </div>
                        <div className="single-item">
                          <h4>Tax Planning &amp; Preparation:</h4> Expound the
                          actual teachings of the great explorer of the truth,
                          the master-builder of human happiness or avoids
                          pleasure itself.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </section>
          {/* Service Details End */}
        </div>
      </Layout>
    </>
  );
}
