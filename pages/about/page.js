"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import TestimonialSlider04 from "@/components/slider/TestimonialSlider04";
import About from "@/components/sections/home3/About";
import { useTranslations } from "next-intl";

export default function Home() {
   const  t  = useTranslations();
 
  return (
    <>
      <Layout  breadcrumbTitle={t("aboutTitle")} image={'/assets/images/about-banner.jpg'}>
        <About />

        {/* team-section */}
        <section className="team-section about-page sec-pad">
          <div className="auto-container">
            <div className="sec-title">
              <span className="sub-title">{t("title")}</span>
              <h2>{t("sub")}</h2>
            </div>
            <TestimonialSlider04 />
           
          </div>
        </section>
        {/* team-section end */}
      </Layout>
    </>
  );
}
