import Layout from "@/components/layout/Layout";
import Banner from "@/components/sections/home1/Banner";
import About from "@/components/sections/home3/About";
import Sectors from "@/components/sections/home1/Sectors";

import Countries from "@/components/sections/home3/Countries";
import Funds from "@/components/sections/home1/Funds";
import Companies from "@/components/sections/home1/Companies";
import Services from "@/components/sections/home3/Services";

export default function Home() {
  return (
    <>
      <Layout>
        <Banner />
        <About />
        <Services />
        <Sectors />
        <Countries />
        <Funds />
        <Companies />
      </Layout>
    </>
  );
}
