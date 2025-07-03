"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Menu() {
  const { t } = useTranslation();

  return (
    <>
      <ul className="navigation clearfix">
        <li className="current dropdown">
          <Link href={`/`}>{t("home")}</Link>
        </li>

        <li className="dropdown">
          <Link href={`/about`}>{t("aboutNav")}</Link>
        </li>
        <li className="dropdown">
          <Link href={`/service`}>{t("services")}</Link>
        </li>
        <li>
          <Link href={`/companies`}>{t("OurCompanies")}</Link>
        </li>
        <li className="dropdown">
          <Link href={`/blog-2`}>{t("blog")}</Link>
        </li>

        <li>
          <Link href={`/funds`}>{t("Funds")}</Link>
        </li>

        <li>
          <Link href={`/turkish-citizenship`}>{t("Turkish")}</Link>
        </li>
        <li>
          <Link href={`/contact`}>{t("contact")}</Link>
        </li>
      </ul>
    </>
  );
}
