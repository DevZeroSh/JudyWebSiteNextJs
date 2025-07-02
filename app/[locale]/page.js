import Layout from "@/components/layout/Layout";
import Banner from "@/components/sections/home1/Banner";
import About from "@/components/sections/home3/About";
import Sectors from "@/components/sections/home1/Sectors";

import Countries from "@/components/sections/home3/Countries";
import Funds from "@/components/sections/home1/Funds";
import Companies from "@/components/sections/home1/Companies";
import Services from "@/components/sections/home3/Services";
import News from "@/components/sections/home2/News";
import ChooseUs from "@/components/sections/home4/Chooseus";
import CaseStudiesSlider from "@/components/slider/CaseStudiesSlider";
import CaseStudies from "@/components/sections/home2/CaseStudies";
import Project from "@/components/sections/home1/Project";
import Industries from "@/components/sections/home1/Industries";
import Clients from "@/components/sections/home2/Clients";
import Working from "@/components/sections/home2/Working";

export default function Home() {
  return (
    <>
      <Layout>
        <Banner />
        <About />
        <Services />
        <Sectors />
        <Industries />
        <News />
        <Project />
        <Working />
        <Countries />
        {/* <Companies /> */}

        <Clients />
      </Layout>
    </>
  );
}
