import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const NavBar = () => {
  const { i18n } = useTranslation();

  return (
    <div
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <h1>Survive Together</h1>
        </Link>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to="/">
            Home
          </Link>

          <div className="buttons  are-small has-addons navbar-item">
            <button
              type="button"
              className={`button is-outlined ${
                i18n.language === "si" ? "is-primary is-inverted" : ""
              }`}
              onClick={() => {
                i18n.changeLanguage("si");
              }}
            >
              සිංහල
            </button>
            <button
              type="button"
              className={`button is-outlined ${
                i18n.language === "en" ? "is-primary is-inverted" : ""
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
            <Link className="button is-primary" to="/login">
              <strong>Sign up</strong>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
