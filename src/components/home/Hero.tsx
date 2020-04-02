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

              <h2 className="subtitle is-spaced">
                {t("homeWelcomeSubTitle")}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempo
              </h2>
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
                  Lort amet, consectetur adipisdolor sit amet, consectetur
                  adipiscing elit. lorem ipsum docing elit.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
