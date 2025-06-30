import Layout from "@/components/layout/Layout";
import About from "@/components/sections/home2/About";
import Banner from "@/components/sections/home2/Banner";
import Pricing from "@/components/sections/home2/Pricing";
import Funfacts from "@/components/sections/home2/Funfacts";
import Services from "@/components/sections/home2/Services";
import Skills from "@/components/sections/home2/Skills";
import Chooseus from "@/components/sections/home2/FundsWork";
import Working from "@/components/sections/home2/Working";
import CaseStudies from "@/components/sections/home2/CaseStudies";
import Testimonial from "@/components/sections/home2/Testimonial";
import News from "@/components/sections/home2/News";
import Clients from "@/components/sections/home2/Clients";
import Subscribe from "@/components/sections/home2/Subscribe";

export default function Home() {
  return (
    <div className="home_2">
      <Layout headerStyle={2} footerStyle={2}>
        <Banner />
        <About />
        <Funfacts />
        <Services />
        <Skills />
        <Chooseus />
        <Working />
        <CaseStudies />
        <Pricing />
        <Testimonial />
        <News />
        <Clients />
        <Subscribe />
      </Layout>
    </div>
  );
}
