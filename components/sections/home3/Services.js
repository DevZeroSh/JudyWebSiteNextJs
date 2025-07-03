"use client";

import { useGetAllServicesQuery } from "@/RTK/Api/Service/ServiceApi";
import { useTranslation } from "react-i18next";

export default function Services() {
  const { data: services, isError } = useGetAllServicesQuery();
  console.log(services);

  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

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
            <span className="sub-title">{t("Services")}</span>
            <h2>{t("We Can offer everything")}</h2>
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
                    <h3>
                      {currentLang === "ar" ? service.nameAR : service.nameEn}
                    </h3>
                    <p>
                      {currentLang === "ar"
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
