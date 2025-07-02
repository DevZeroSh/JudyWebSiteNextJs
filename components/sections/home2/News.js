import Link from "next/link";
import NewsSlider from "@/components/slider/NewsSlider";

export default function News() {
  return (
    <>
      {/* news-style-two */}
      <section className="news-style-two sec-pad">
        <div className="auto-container">
          <div className="sec-title">
            <span className="sub-title">Blog Post</span>
            <h2>Recent from News Room</h2>
          </div>
          <NewsSlider />
        </div>
      </section>
      {/* news-style-two end */}
    </>
  );
}
