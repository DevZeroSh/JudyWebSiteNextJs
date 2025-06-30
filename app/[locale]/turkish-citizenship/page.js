"use client";
import Layout from "@/components/layout/Layout";

import Skills from "@/components/sections/home2/Skills";
import Working from "@/components/sections/home2/Working";
import Faq from "@/components/sections/home1/Faq";
import Industries from "@/components/sections/home1/Industries";
import TestimonialSlider03 from "@/components/slider/TestimonialSlider03";
import FundsWork from "@/components/sections/home2/FundsWork";

export default function Home() {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={1}
        breadcrumbTitle="Turkish Citizenship"
      >
        <Skills />
        <FundsWork />
        <Industries />
        <section className="chooseus-style-five sec-pad">
          <div className="auto-container">
            <div className="sec-title centred light">
              <span className="sub-title">Advantages</span>
              <h2>Advantages of investing in funds</h2>
            </div>
            <TestimonialSlider03 />
          </div>
        </section>
        <Working />
        <Faq />
      </Layout>
    </>
  );
}
