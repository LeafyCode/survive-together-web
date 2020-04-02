import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      {/* content */}
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-7 is-full-mobile">
              <div className="column is-9">
                <h1 className="title is-1 is-spaced">
                  {t("homeWelcomeTitle")}
                </h1>

                <h2 className="subtitle is-spaced">
                  {t("homeWelcomeSubTitle")}
                </h2>
                <Link
                  to="/distributor/create"
                  type="button"
                  className="button is-warning is-medium"
                >{t("addDistributor")}
                </Link>
              </div>
            </div>

            <div className="column is-4 is-full-mobile">
              <div className="card">
                <div className="card-content">
                  <p className="title is-4 ">{t("specialNote")}</p>
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

      <section className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="card">
              <div className="card-content">
                <div className="columns is-centered">
                  <div className="column is-narrow has-text-centered is-centered">
                    <div className="field">
                      <div className="control">
                        <div className="select is-primary is-centered">
                          <select>
                            <option>Select your district</option>
                            <option>district</option>
                            <option>district</option>
                            <option>district</option>
                            <option>district</option>
                            <option>district</option>
                            <option>district</option>
                            <option>district</option>
                            <option>district</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="column is-narrow has-text-centered is-centered">
                    <div className="field">
                      <div className="control">
                        <div className="select is-primary is-centered">
                          <select>
                            <option>Select your district</option>
                            <option>district</option>
                            <option>district</option>
                            <option>district</option>
                            <option>district</option>
                            <option>district</option>
                            <option>district</option>
                            <option>district</option>
                            <option>district</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="title is-3 is-spaced" >{t("popularDistributors")}</p>
          <div className="columns ">
            <div className="column is-full-mobile is-half-tablet is-one-quarter-desktop">
              <div className="card">
                <div className="card-content">
                  <div className="columns">
                    <div className="column">
                      <div>
                        <h5 className="title is-5">Keels super</h5>
                        <h6 className="title is-6 has-text-primary ">
                          Title 6
                        </h6>
                      </div>
                    </div>
                    <div className="column is-right">
                      <div className="is-pulled-right">
                        <span className="tag is-warning">
                          <h6 className="subtitle is-6 is-right">+50 Items</h6>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h6 className="subtitle is-6">Subtitle 6</h6>
                    <p>asdasdasd asdasd asdas asdasd asdasd asdasda sdasdasd</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-full-mobile is-half-tablet is-one-quarter-desktop">
              <div className="card">
                <div className="card-content">
                  <div className="columns">
                    <div className="column">
                      <div>
                        <h5 className="title is-5">Keels super</h5>
                        <h6 className="title is-6 has-text-primary ">
                          Title 6
                        </h6>
                      </div>
                    </div>
                    <div className="column is-right">
                      <div className="is-pulled-right">
                        <span className="tag is-warning">
                          <h6 className="subtitle is-6 is-right">+50 Items</h6>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h6 className="subtitle is-6">Subtitle 6</h6>
                    <p>asdasdasd asdasd asdas asdasd asdasd asdasda sdasdasd</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-full-mobile is-half-tablet is-one-quarter-desktop">
              <div className="card">
                <div className="card-content">
                  <div className="columns">
                    <div className="column">
                      <div>
                        <h5 className="title is-5">Keels super</h5>
                        <h6 className="title is-6 has-text-primary ">
                          Title 6
                        </h6>
                      </div>
                    </div>
                    <div className="column is-right">
                      <div className="is-pulled-right">
                        <span className="tag is-warning">
                          <h6 className="subtitle is-6 is-right">+50 Items</h6>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h6 className="subtitle is-6">Subtitle 6</h6>
                    <p>asdasdasd asdasd asdas asdasd asdasd asdasda sdasdasd</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-full-mobile is-half-tablet is-one-quarter-desktop">
              <div className="card">
                <div className="card-content">
                  <div className="columns">
                    <div className="column">
                      <div>
                        <h5 className="title is-5">Keels super</h5>
                        <h6 className="title is-6 has-text-primary ">
                          Title 6
                        </h6>
                      </div>
                    </div>
                    <div className="column is-right">
                      <div className="is-pulled-right">
                        <span className="tag is-warning">
                          <h6 className="subtitle is-6 is-right">+50 Items</h6>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h6 className="subtitle is-6">Subtitle 6</h6>
                    <p>asdasdasd asdasd asdas asdasd asdasd asdasda sdasdasd</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
