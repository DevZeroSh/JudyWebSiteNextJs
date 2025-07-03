"use client";

import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const MobileMenu = ({ isSidebar, handleMobileMenu, handleSidebar }) => {
  const { t } = useTranslation();
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
    subMenuKey: "",
  });

  const handleToggle = (key, subMenuKey = "") => {
    if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
      setIsActive({ status: false, key: "", subMenuKey: "" });
    } else {
      setIsActive({ status: true, key, subMenuKey });
    }
  };

  return (
    <>
      <div className="mobile-menu">
        <div className="menu-backdrop" onClick={handleMobileMenu} />
        <div className="close-btn" onClick={handleMobileMenu}>
          <i className="fas fa-times"></i>
        </div>

        <nav className="menu-box">
          <div className="nav-logo">
            <Link href="/">
              <img src="/assets/images/judywhite.webp" alt="logo" />
            </Link>
          </div>

          <div className="menu-outer">
            <div
              className="collapse navbar-collapse show clearfix"
              id="navbarSupportedContent"
            >
              <ul className="navigation clearfix">
                {/* Home */}
                <li
                  className={
                    isActive.key == 1 ? "dropdown current" : "dropdown"
                  }
                >
                  <Link href="#" onClick={() => handleToggle(1)}>
                    {t("home")}
                  </Link>
                </li>

                {/* Services */}

                <li>
                  <Link href="/about" onClick={handleMobileMenu}>
                    {t("services")}
                  </Link>
                </li>

                <li>
                  <Link href="/service" onClick={handleMobileMenu}>
                    {t("aboutNav")}
                  </Link>
                </li>
                <li
                  className={
                    isActive.subMenuKey == 21 ? "dropdown current" : "dropdown"
                  }
                >
                  <Link onClick={handleMobileMenu} href="/companies">
                    {t("OurCompanies")}
                  </Link>
                </li>

                <li
                  className={
                    isActive.subMenuKey == 22 ? "dropdown current" : "dropdown"
                  }
                >
                  <Link onClick={handleMobileMenu} href="/blog-2">
                    {t("blog")}
                  </Link>
                </li>

                <li
                  className={
                    isActive.subMenuKey == 23 ? "dropdown current" : "dropdown"
                  }
                >
                  <Link onClick={handleMobileMenu} href="/funds">
                    {t("Funds")}
                  </Link>
                </li>
                {/* Projects */}
                <li
                  className={
                    isActive.key == 3 ? "dropdown current" : "dropdown"
                  }
                >
                  <Link href="/turkish-citizenship" onClick={handleMobileMenu}>
                    {t("Turkish")}
                  </Link>
                </li>

                {/* Blog */}
                <li
                  className={
                    isActive.key == 4 ? "dropdown current" : "dropdown"
                  }
                >
                  <Link href="/contact" onClick={handleMobileMenu}>
                    {t("contact")}
                  </Link>
                </li>

                {/* Contact */}
              </ul>
            </div>
          </div>

          <div className="contact-info">
            <h4>{t("contact")}</h4>
            <ul>
              <li>Chicago 12, Melborne City, USA</li>
              <li>
                <Link href="tel:+8801682648101">+880 168 264 8101</Link>
              </li>
              <li>
                <Link href="mailto:info@example.com">info@example.com</Link>
              </li>
            </ul>
          </div>

          <div className="social-links">
            <ul className="clearfix">
              <li>
                <a href="#">
                  <span className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fab fa-pinterest-p" />
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fab fa-instagram" />
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fab fa-youtube" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;
