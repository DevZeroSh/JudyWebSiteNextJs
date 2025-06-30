"use client";
import ContactForm from "@/components/ContactForm";
import Layout from "@/components/layout/Layout";
import Companies from "@/components/sections/home1/Companies";
import { useTranslations } from "next-intl";

export default function Home() {
    const t = useTranslations();
  
  return (
    <>
      <Layout
       
        breadcrumbTitle={t("OurCompaniesTitle")}
        image={'/assets/images/companies.jpg'}
      >
        <Companies />
        <ContactForm/>
      </Layout>
    </>
  );
}
