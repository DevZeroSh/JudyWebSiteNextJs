"use client";
import Layout from "@/components/layout/Layout";
import { useTranslations } from "next-intl";
import Chooseus from "@/components/sections/home3/Services";
import ContactForm from "../../contact/contactForm";

export default function Home() {
  const t = useTranslations();

  return (
    <>
      <Layout
        breadcrumbTitle={t("ServicesTitl")}
        image={"/assets/images/sevice-1.webp"}
      >
        <div>
          <Chooseus />

          <ContactForm />
        </div>
      </Layout>
    </>
  );
}
