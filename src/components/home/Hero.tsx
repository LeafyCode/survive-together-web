import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="section">
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column is-6 is-full-mobile">
            <div className="column is-9">
              <h1 className="title is-1 is-spaced">{t("homeWelcomeTitle")}</h1>

              <h2 className="subtitle is-spaced">{t("homeWelcomeSubTitle")}</h2>
              <Link
                to="/request/create"
                type="button"
                className="button is-warning is-medium"
              >
                {t("requestForHelp")}
              </Link>
            </div>
          </div>

          <div className="column is-3 is-full-mobile">
            <div className="card">
              <div className="card-content">
                <p className="title is-4 ">{t("FirstSpecialNote")}</p>
                <div className="content">
                  {t("FirstSpecialNoteDetailsHome")}
                  <Link to="/about">About Us page.</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="column is-3 is-full-mobile">
            <div className="card">
              <div className="card-content">
                <p className="title is-4 ">{t("SecondSpecialNote")}</p>
                <div className="content">
                  <div>
                    <p>{t("SecondSpecialNoteDetailsHome")}</p>
                    <p className="subtitle is-size-6 has-text-weight-semibold is-marginless">
                      {t("FirstSpecialNoteItem")}
                    </p>
                    <p className="subtitle is-size-6 has-text-weight-semibold  is-marginless">
                      {t("SecondSpecialNoteItem")}
                    </p>
                    <p className="subtitle is-size-6 has-text-weight-semibold  is-marginless">
                      {t("ThirdSpecialNoteItem")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
