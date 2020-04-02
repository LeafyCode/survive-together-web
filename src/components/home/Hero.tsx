import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="section">
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column is-7 is-full-mobile">
            <div className="column is-9">
              <h1 className="title is-1 is-spaced">{t("homeWelcomeTitle")}</h1>

              <h2 className="subtitle is-spaced">{t("homeWelcomeSubTitle")}</h2>
              <Link
                to="/request/create"
                type="button"
                className="button is-warning is-medium"
              >
                Request for Help
              </Link>
            </div>
          </div>

          <div className="column is-4 is-full-mobile">
            <div className="card">
              <div className="card-content">
                <p className="title is-4 ">Special note</p>
                <div className="content">
                  This website is free for everyone to use. Please do not abuse
                  it&apos;s capabilities. Currently, some areas get all the
                  required items. There are deliveries, mobile stores, online
                  stores, etc. But for some areas there&apos;s nothing. The main
                  target of this website is to identify such areas and make sure
                  everyone survives this crisis together. Learn more on our{" "}
                  <Link to="/about">About Us</Link> page.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
