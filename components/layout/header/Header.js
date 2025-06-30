"use client";

import Link from "next/link";
import Menu from "../Menu";
import MobileMenu from "../MobileMenu";
import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

export default function Header({
  scroll,
  isMobileMenu,
  handleMobileMenu,
  isSidebar,
  handlePopup,
  handleSidebar,
}) {
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();

  const supportedLocales = ["en", "ar"];

  const pathSegments = pathname.split("/").filter(Boolean);

  const currentLang = supportedLocales.includes(pathSegments[0])
    ? pathSegments[0]
    : "en";
  const handleLanguageChange = (lang) => {
    let cleanPath = pathname;

    supportedLocales.forEach((locale) => {
      if (cleanPath.startsWith(`/${locale}/`)) {
        cleanPath = cleanPath.replace(`/${locale}`, "");
      } else if (cleanPath === `/${locale}`) {
        cleanPath = "/";
      }
    });

    let newPath;

    if (lang === "ar") {
      newPath = cleanPath === "/" ? `/${lang}` : `/${lang}${cleanPath}`;
    } else {
      newPath = cleanPath === "" ? "/" : cleanPath;
    }

    newPath = newPath.replace(/\/+/g, "/");

    router.push(newPath);

    const root = document.documentElement;
    if (lang === "ar") {
      root.classList.add("rtl");
      root.setAttribute("dir", "rtl");
    } else {
      root.classList.remove("rtl");
      root.setAttribute("dir", "ltr");
    }
  };

  useEffect(() => {
    const root = document.documentElement;
    if (currentLang === "ar") {
      root.classList.add("rtl");
      root.setAttribute("dir", "rtl");
    } else {
      root.classList.remove("rtl");
      root.setAttribute("dir", "ltr");
    }
  }, [pathname]);

  return (
    <header
      className={`main-header header-style-three ${
        scroll ? "fixed-header" : ""
      }`}
    >
      {/* header-lower */}
      <div className="header-lower" style={{height:'4.7em'}}>
        <div className="outer-container">
          <div className="outer-box">
            <div className="menu-area">
              <figure className="logo-box">
                <Link href="/">
                  <img src="/assets/images/judywhite.webp" alt="logo" />
                </Link>
              </figure>
              <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                <i className="icon-bar" />
                <i className="icon-bar" />
                <i className="icon-bar" />
              </div>
              <nav className="main-menu navbar-expand-md navbar-light">
                <div
                  className="collapse navbar-collapse show clearfix"
                  id="navbarSupportedContent"
                >
                  <Menu />
                </div>
              </nav>
            </div>
            <div className="menu-right-content">
              <div className="language-box">
                <h5>
                  <img src="/assets/images/icons/icon-11.png" alt="lang-icon" />
                  {t("global")} :
                </h5>
                <div className="select-box">
                  <select
                    className="selectmenu"
                    value={currentLang}
                    onChange={(e) => handleLanguageChange(e.target.value)}
                  >
                    <option value="en">{t("selectEn")}</option>
                    <option value="ar">{t("selectAr")}</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Header */}
      <div className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}>
        <div className="header-lower">
          <div className="outer-container">
            <div className="outer-box">
              <div className="menu-area">
                <figure className="logo-box">
                  <Link href="/">
                    <img src="/assets/images/judywhite.webp" alt="logo" />
                  </Link>
                </figure>
                <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                  <i className="icon-bar" />
                  <i className="icon-bar" />
                  <i className="icon-bar" />
                </div>
                <nav className="main-menu navbar-expand-md navbar-light">
                  <div
                    className="collapse navbar-collapse show clearfix"
                    id="navbarSupportedContent"
                  >
                    <Menu />
                  </div>
                </nav>
              </div>
              <div className="menu-right-content">
                <div className="language-box">
                  <h5>
                    <img
                      src="/assets/images/icons/icon-11.png"
                      alt="lang-icon"
                    />
                    {t("global")} :
                  </h5>
                  <div className="select-box">
                    <select
                      className="selectmenu"
                      value={currentLang}
                      onChange={(e) => handleLanguageChange(e.target.value)}
                    >
                      <option value="en">{t("selectEn")}</option>
                      <option value="ar">{t("selectAr")}</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        handleMobileMenu={handleMobileMenu}
        handleSidebar={handleSidebar}
        isSidebar={isSidebar}
      />
    </header>
  );
}
