"use client";
import Layout from "@/components/layout/Layout";

import Funds from "@/components/sections/home1/Funds";
import { useTranslations } from "next-intl";

export default function Home() {
    const t = useTranslations();

  return (
    <>
      <Layout  breadcrumbTitle={t("InvestmentFunds")} image={'/assets/images/funds.jpg'}>
        <Funds />
      </Layout>
    </>
  );
}
