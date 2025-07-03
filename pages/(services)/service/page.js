"use client";
import Layout from "@/components/layout/Layout";
import { useTranslations } from "next-intl";
import Chooseus from "@/components/sections/home3/Services";
import About from "@/components/sections/home3/About";
import Funfact from "@/components/sections/home3/Funfact";
import Cta from "@/components/sections/home3/Cta";

export default function Home() {
  const t = useTranslations();

  return (
    <>
      <Layout
        breadcrumbTitle={t("ServicesTitl")}
        image={"/assets/images/sevice-1.webp"}
      >
        <div>
          <About />
          <Chooseus />
          <Funfact />
          <Cta />
        </div>
      </Layout>
    </>
  );
}
