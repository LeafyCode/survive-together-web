import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import surviveTogetherLogoInverted from "../../assets/survive-together-logo-inverted-small.png";

export const NavBar = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const [isMobileMenuActive, setIsMobileMenuActive] = useState<boolean>(false);

  return (
    <div
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <img
            alt="Survive Together Logo"
            src={surviveTogetherLogoInverted}
            width="28"
            height="28"
            style={{ marginRight: 9 }}
          />
          <h1>{t("surviveTogetherNavBar")}</h1>
        </Link>

        <span
          role="button"
          className={`navbar-burger burger ${
            isMobileMenuActive ? "is-active" : ""
          }`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={() => {
            setIsMobileMenuActive(!isMobileMenuActive);
          }}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </span>
      </div>

      <div className={`navbar-menu ${isMobileMenuActive ? "is-active" : ""}`}>
        <div className="navbar-start">
          <Link className="navbar-item" to="/distributors">
            {t("requestDistributorInputLabel")}
          </Link>

          <Link className="navbar-item" to="/requests">
            {t("requestPageInputLabel")}
          </Link>

          <Link className="navbar-item" to="/about">
            {t("aboutUsInputLabel")}
          </Link>

          <Link className="navbar-item" to="/contact">
            {t("contactInputLabel")}
          </Link>

          <div className="buttons  are-small has-addons navbar-item">
            <button
              type="button"
              className={`button is-outlined ${
                i18n.language === "si" ? "is- is-inverted" : ""
              }`}
              onClick={() => {
                i18n.changeLanguage("si");
              }}
            >
              සිංහල
            </button>
            <button
              type="button"
              className={`button ${isMobileMenuActive ? "" : "is-outlined"} ${
                i18n.language === "en"
                  ? `is-primary ${isMobileMenuActive ? "" : "is-inverted"}`
                  : ""
              }`}
              onClick={() => {
                i18n.changeLanguage("en");
              }}
            >
              English
            </button>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <Link
              className={`button ${
                isMobileMenuActive ? "is-warning" : "is-white"
              }`}
              to="/distributor/create"
            >
              {t("newDistributorNavBar")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
