"use client";

import { useGetAllServicesQuery } from "@/RTK/Api/Service/ServiceApi";
import { useTranslations, useLocale } from "next-intl";

export default function Services() {
  const { data: services, isError } = useGetAllServicesQuery();
  console.log(services);

  const t = useTranslations("servicesPage");
  const locale = useLocale();

  return (
    <>
      {/* chooseus-style-three */}
      <section className="chooseus-style-three">
        <div
          className="pattern-layer"
          style={{ backgroundImage: "url(assets/images/shape/shape-27.png)" }}
        />
        <div className="auto-container">
          <div className="sec-title centred">
            <span className="sub-title">{t("subtitle")}</span>
            <h2>{t("title")}</h2>
          </div>

          <div className="row clearfix">
            {services?.data?.slice(0, 6).map((service, index) => (
              <div
                key={service._id}
                className="col-lg-4 col-md-6 col-sm-12 chooseus-block"
              >
                <div
                  className={`chooseus-block-three wow fadeIn${
                    index % 2 === 0 ? "Left" : "Right"
                  } animated`}
                  data-wow-delay={`${index * 100}ms`}
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <span className="count-text">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {/* <img
                      src={service.photo}
                      alt={locale === "ar" ? service.nameAR : service.nameEn}
                      style={{
                        maxWidth: "4em",
                        marginTop: "10px",
                        borderRadius: "8px",
                      }}
                    /> */}
                    <h3>{locale === "ar" ? service.nameAR : service.nameEn}</h3>
                    <p>
                      {locale === "ar"
                        ? service.cardDescriptionAR
                        : service.cardDescriptionEN}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* chooseus-style-three end */}
    </>
  );
}
