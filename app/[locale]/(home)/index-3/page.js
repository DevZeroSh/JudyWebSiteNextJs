import Layout from "@/components/layout/Layout";
import Banner from "@/components/sections/home1/Banner";
import Services from "@/components/sections/home3/Countries";
import About from "@/components/sections/home3/About";
import Funfact from "@/components/sections/home3/Funfact";
import Cta from "@/components/sections/home3/Cta";
import Team from "@/components/sections/home3/Team";
import Chooseus from "@/components/sections/home3/Services";
import Pricing from "@/components/sections/home3/Pricing";
import Subscribe from "@/components/sections/home3/Subscribe";
import Testimonial from "@/components/sections/home3/Testimonial";
import Clients from "@/components/sections/home3/Clients";

import News from "@/components/sections/home3/News";

export default function Home() {
  return (
    <div className="home_3">
      <Layout headerStyle={3} footerStyle={3}>
        <Banner />
        <About />
        <Services />
        <Funfact />
        <Cta />
        <Team />
        <Chooseus />
        <Pricing />
        <Subscribe />
        <Testimonial />
        <Clients />
        <News />
      </Layout>
    </div>
  );
}
