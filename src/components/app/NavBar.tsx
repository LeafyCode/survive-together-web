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

        <span
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </span>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to="/distributors">
            Distributors
          </Link>

          <Link className="navbar-item" to="/requests">
            Requests
          </Link>

          <Link className="navbar-item" to="/about">
            About Us
          </Link>

          <Link className="navbar-item" to="/contact">
            Contact Us
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
            <Link className="button is-white" to="/distributor/create">
              Add Distributor
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
