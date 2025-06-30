"use client";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { useGetAllCompaniesQuery } from "@/RTK/Api/Companies/CompaniesApi";

export default function Companies() {
  const { data, isError, isLoading } = useGetAllCompaniesQuery();
  const locale = useLocale();
  const t = useTranslations("companiesPage");

  if (isLoading) return <p>{t("loading")}</p>;
  if (isError || !data?.data) return <p>{t("error")}</p>;

  return (
    <>
      {/* service-section */}
      <section className="service-section">
        <div className="pattern-layer">
          <div
            className="pattern-2"
            style={{ backgroundImage: "url(assets/images/shape/shape-24.png)" }}
          />
        </div>
        <div className="auto-container">
          <div className="sec-title centred">
            <span className="sub-title">{t("ourCompanies")}</span>
            <h2>{t("title")}</h2>
          </div>
          <div className="services-grid">
            {data.data.slice(0, 6).map((company) => (
              <div key={company._id} className="service-block-one block-one max-h-30">
                <div className="inner-box">
                  <div className="icon-box">
                    <div className="icon">
                      <img
                        src={company.photo}
                        alt={locale === "ar" ? company.nameAR : company.nameEn}
                      />
                    </div>
                  </div>
                  <h3>
                    <Link href={`/company-detailes/${company._id}`}>
                      {company.title}
                      {locale === "ar" ? company.nameAR : company.nameEn}
                    </Link>
                  </h3>
                  <div className="link">
                    <Link href={`/service-details/${company._id}`}>
                      <span>{t("exploreCompany")}</span>
                    </Link>
                  </div>
                  <p>
                    {locale === "ar"
                      ? company.cardDescriptionAR
                      : company.cardDescriptionEN}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* service-section end */}
    </>
  );
}
