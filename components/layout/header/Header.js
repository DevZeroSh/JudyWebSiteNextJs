"use client";

import Link from "next/link";
import Menu from "../Menu";
import MobileMenu from "../MobileMenu";
import { useTranslation } from "react-i18next";

export default function Header({
  scroll,
  isMobileMenu,
  handleMobileMenu,
  isSidebar,
  handlePopup,
  handleSidebar,
}) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    const dir = lng === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
    document.documentElement.lang = lng;
  };

  return (
    <header
      className={`main-header header-style-three ${
        scroll ? "fixed-header" : ""
      }`}
    >
      {/* header-lower */}
      <div className="header-lower" style={{ height: "4.7em" }}>
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
                    onChange={(e) => changeLanguage(e.target.value)}
                  >
                    <option value="en">{t("English")}</option>
                    <option value="ar">{t("Arabic")}</option>
                    <option value="tr">{t("Turkish")}</option>
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
                      onChange={(e) => changeLanguage(e.target.value)}
                    >
                      <option value="en">{t("English")}</option>
                      <option value="ar">{t("Arabic")}</option>
                      <option value="tr">{t("Turkish")}</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* <MobileMenu
        handleMobileMenu={handleMobileMenu}
        handleSidebar={handleSidebar}
        isSidebar={isSidebar}
      /> */}
    </header>
  );
}
