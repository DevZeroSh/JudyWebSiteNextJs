import Link from "next/link";

export default function Clients() {
  return (
    <>
      {/* clients-style-two */}
      <section className="clients-style-two" style={{ marginTop: "100px" }}>
        <div className="auto-container">
          <div className="sec-title centred">
            <span className="sub-title">Our Clients</span>
            <h2>People Who Trusted Us</h2>
          </div>
          <div className="inner-container">
            <ul className="clients-list clearfix">
              <li>
                <figure className="clients-logo">
                  <Link href="/index-2">
                    <img src="assets/images/clients/clients-1.png" alt="" />
                  </Link>
                </figure>
              </li>
              <li>
                <figure className="clients-logo">
                  <Link href="/index-2">
                    <img src="assets/images/clients/clients-2.png" alt="" />
                  </Link>
                </figure>
              </li>
              <li>
                <figure className="clients-logo">
                  <Link href="/index-2">
                    <img src="assets/images/clients/clients-3.png" alt="" />
                  </Link>
                </figure>
              </li>
              <li>
                <figure className="clients-logo">
                  <Link href="/index-2">
                    <img src="assets/images/clients/clients-4.png" alt="" />
                  </Link>
                </figure>
              </li>
              <li>
                <figure className="clients-logo">
                  <Link href="/index-2">
                    <img src="assets/images/clients/clients-5.png" alt="" />
                  </Link>
                </figure>
              </li>
            </ul>
            <ul className="clients-list clearfix">
              <li>
                <figure className="clients-logo">
                  <Link href="/index-2">
                    <img src="assets/images/clients/clients-6.png" alt="" />
                  </Link>
                </figure>
              </li>
              <li>
                <figure className="clients-logo">
                  <Link href="/index-2">
                    <img src="assets/images/clients/clients-7.png" alt="" />
                  </Link>
                </figure>
              </li>
              <li>
                <figure className="clients-logo">
                  <Link href="/index-2">
                    <img src="assets/images/clients/clients-8.png" alt="" />
                  </Link>
                </figure>
              </li>
              <li>
                <figure className="clients-logo">
                  <Link href="/index-2">
                    <img src="assets/images/clients/clients-9.png" alt="" />
                  </Link>
                </figure>
              </li>
              <li>
                <figure className="clients-logo">
                  <Link href="/index-2">
                    <img src="assets/images/clients/clients-10.png" alt="" />
                  </Link>
                </figure>
              </li>
            </ul>
          </div>
          <div className="more-text centred">
            <h5>
              2.6k Companies &amp; Individuals Trusted Us.{" "}
              <Link href="/index-2">
                <i className="flaticon-right-chevron" />
                View All Clients
              </Link>
            </h5>
          </div>
        </div>
      </section>
      {/* clients-style-two end */}
    </>
  );
}
