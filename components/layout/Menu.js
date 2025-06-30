"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

export default function Menu() {
  const pathname = usePathname();
  const supportedLocales = ["en", "ar"];
  const firstSegment = pathname.split("/")[1];
  const locale = supportedLocales.includes(firstSegment) ? firstSegment : "en";
  const t = useTranslations();

  return (
    <>
      <ul className="navigation clearfix">
        <li className="current dropdown">
          <Link href={`/${locale}`}>{t("home")}</Link>
        </li>

        <li className="dropdown">
          <Link href={`/${locale}/about`}>{t("aboutNav")}</Link>
        </li>
        <li className="dropdown">
          <Link href={`/${locale}/service`}>{t("services")}</Link>
        </li>
        <li>
          <Link href={`/${locale}/companies`}>{t("OurCompanies")}</Link>
        </li>
        <li className="dropdown">
          <Link href={`/${locale}/blog-2`}>{t("blog")}</Link>
        </li>

        <li>
          <Link href={`/${locale}/funds`}>{t("Funds")}</Link>
        </li>

        <li>
          <Link href={`/${locale}/turkish-citizenship`}>{t("Turkish")}</Link>
        </li>
        <li>
          <Link href={`/${locale}/contact`}>{t("contact")}</Link>
        </li>
      </ul>
    </>
  );
}
