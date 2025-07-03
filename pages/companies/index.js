"use client";
import ContactForm from "../contact/contactForm";
import Layout from "@/components/layout/Layout";
import Companies from "@/components/sections/home1/Companies";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Layout
        breadcrumbTitle={t("OurCompaniesTitle")}
        image={"/assets/images/companies.jpg"}
      >
        <Companies />
        <ContactForm />
      </Layout>
    </>
  );
}
