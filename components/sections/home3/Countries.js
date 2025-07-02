import TestimonialSlider02 from "@/components/slider/TestimonialSlider02";
import { useTranslations } from "next-intl";

export default function Countries() {
  const t = useTranslations("countriesPage");

  return (
    <>
      {/* service-style-three */}
      <section className="service-style-three" style={{ marginTop: "100px" }}>
        <div className="auto-container">
          <div className="sec-title centred light">
            <span className="sub-title">{t("countries")}</span>
            <h2>{t("title")}</h2>
          </div>
          <TestimonialSlider02 />
        </div>
      </section>
      {/* service-style-three end */}
    </>
  );
}
