
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Blog Details">
            <>
  {/* sidebar-page-container */}
  <section className="sidebar-page-container blog-details sec-pad">
    <div className="auto-container">
      <div className="row clearfix">
        <div className="col-lg-8 col-md-12 col-sm-12 content-side">
          <div className="blog-details-content">
            <div className="content-one">
              <div className="author-post">
                <figure className="author-thumb">
                  <img src="assets/images/news/thumb-2.jpg" alt="" />
                </figure>
                <h6>Business</h6>
                <ul className="post-info clearfix">
                  <li>
                    <span>On</span> Feb 26, 2023
                  </li>
                  <li>
                    <span>By</span> <Link href="/blog-3">Colmin Neil</Link>
                  </li>
                  <li>
                    <span>To</span> 4 Mins Read
                  </li>
                </ul>
              </div>
              <h2>Dimensional Fund Advisors Interview with Director.</h2>
              <div className="text-box">
                <p>
                  <span>D</span>Simply dummy text of the printing and
                  typesetting industry lorem Ipsum has been the industry's
                  standard dummy text ever since the 2000, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book it has survived not only
                </p>
                <p>
                  {" "}
                  five centuries, but also the leap into electronic typesetting,
                  remaining essentially unchanged all it was popularised in the
                  release of Letraset sheets.
                </p>
                <p>
                  Obligations of business it will frequently occur pleasure have
                  repudiated annoyances accept wise man therefore always holds
                  in these matters beguiled and demoralized by the charms
                  pleasure of the moment, so blinded by desire, that they cannot
                  foresee right to find fault with a man chooses to enjoy a
                  pleasure that has no annoying consequences.
                </p>
              </div>
              <figure className="image-box">
                <img src="assets/images/news/news-21.jpg" alt="" />
              </figure>
            </div>
            <div className="content-two">
              <h3>Expertise and Experience</h3>
              <p>
                Extremely painful or again is there anyone who loves or case
                pursues or desires these cases dislike perfectlys imple and to
                distinguish.
              </p>
              <h5>We keep ourselves up to make your dreams come true,</h5>
              <div className="list-inner">
                <ul className="list-item clearfix">
                  <li>Denounce with righteous indignation.</li>
                  <li>Belongs to those who fail. </li>
                  <li>Matters to this principle rejects pleasures.</li>
                </ul>
                <ul className="list-item clearfix">
                  <li>The wise man therefore always hold.</li>
                  <li>Obligations of business it will frequently.</li>
                </ul>
              </div>
              <blockquote>
                <div className="icon-box">
                  <i className="flaticon-quote" />
                </div>
                <h4>
                  Contrary to popular belief, lorem ipsum is not simply random
                  It has roots in a piece of classical Latin literature from 45
                  BC, making it over 2000 years old.
                </h4>
                <span className="designation">Franklin Joseph</span>
              </blockquote>
            </div>
            <div className="content-three">
              <h3>Final Thoughts</h3>
              <p>
                There are many variations of passages of lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing .
              </p>
              <div className="single-item">
                <p>
                  <span>Objectivity:</span> Extremely painful or again is there
                  anyone who loves or casepursues or these cases are perfectly
                  simple and to distinguish.
                </p>
              </div>
              <div className="single-item">
                <p>
                  <span>Strategic Planning:</span> Again is there anyone who
                  loves or case pursues or desires all simple and to
                  distinguish. a free hours when our power choice is nothing.
                </p>
              </div>
              <div className="post-tags">
                <ul className="tags-list clearfix">
                  <li>
                    <h5>
                      <img src="assets/images/icons/icon-33.png" alt="" />
                      Post Tags:
                    </h5>
                  </li>
                  <li>
                    <Link href="/blog-details">Business</Link>
                  </li>
                  <li>
                    <Link href="/blog-details">Consulting</Link>
                  </li>
                  <li>
                    <Link href="/blog-details">Finance</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="author-box">
              <figure className="author-thumb">
                <img src="assets/images/news/author-1.jpg" alt="" />
              </figure>
              <h6>Post By</h6>
              <h3>Colmin Neil</h3>
              <p>
                Denouncing pleasure &amp; praising pain was born and will
                complete all account of the system &amp; expound.
              </p>
              <h5>
                <Link href="/blog-details">Read All Post</Link>
              </h5>
              <ul className="social-links clearfix">
                <li>
                  <Link href="/blog-details">
                    <i className="fab fa-facebook-f" />
                  </Link>
                </li>
                <li>
                  <Link href="/blog-details">
                    <i className="fab fa-twitter" />
                  </Link>
                </li>
                <li>
                  <Link href="/blog-details">
                    <i className="fab fa-linkedin-in" />
                  </Link>
                </li>
                <li>
                  <Link href="/blog-details">
                    <i className="fab fa-instagram" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="post-nav-btn">
              <div className="post-btn">
                <div className="single-btn prev-btn">
                  <h6>Prev Post</h6>
                  <h4>
                    <Link href="/blog-details">
                      Interested in Giving Backthis year? Here <br />
                      are some tips.
                    </Link>
                  </h4>
                </div>
                <div className="single-btn next-btn">
                  <h6>Next Post</h6>
                  <h4>
                    <Link href="/blog-details">
                      How to Recover from a Market Crash <br />
                      if You're Retired.
                    </Link>
                  </h4>
                </div>
              </div>
              <div className="btn-box">
                <Link href="/blog-details">
                  <span>Back to Blog Post</span>
                </Link>
              </div>
            </div>
            <div className="comment-form-area">
              <div className="text-box">
                <h3>Leave Your Comments</h3>
                <p>
                  Your email address will not be published. Required fields are
                  marked *
                </p>
              </div>
              <div className="form-inner">
                <form action="/blog-details" method="post">
                    <div className="row clearfix">
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                        <textarea
                            name="message"
                            placeholder="Comments"
                            defaultValue=""
                        />
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name*"
                            required
                        />
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email*"
                            required
                        />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                        <div className="check-box">
                            <input
                            className="check"
                            type="checkbox"
                            id="checkbox1"
                            />
                            <label htmlFor="checkbox1">
                            Save my name, email, and website in this browser for
                            the next time I comment.
                            </label>
                        </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                        <button type="submit" className="theme-btn btn-two">
                            Post Comment
                        </button>
                        </div>
                    </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </section>
  {/* sidebar-page-container end */}
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
</>


            </Layout>
        </>
    )
}
