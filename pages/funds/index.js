"use client";
import Layout from "@/components/layout/Layout";

import Funds from "@/components/sections/home1/Funds";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Layout
        breadcrumbTitle={t("InvestmentFunds")}
        image={"/assets/images/funds.jpg"}
      >
        <Funds />
      </Layout>
    </>
  );
}
