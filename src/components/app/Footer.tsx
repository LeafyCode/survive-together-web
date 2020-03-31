import React from "react";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-one-quarter">
              <div className="is-pulled-left">
                <h1 className="title is-1">LOGO</h1>
              </div>
            </div>
            <div className="column is-one-fifth">
              <div className="is-pulled-left">
                <p className="title is-4">“Help the people When They Need”</p>
              </div>
            </div>
            <div className="column ">
              <div className="is-pulled-right">
                <div className="columns ">
                  <div className="column">
                    <button
                      type="button"
                      className="button is-primary is-medium"
                    >
                      Make a request
                    </button>
                    <br />
                    <br />
                    <h6 className="subtitle is-6">Or</h6>

                    <button
                      type="button"
                      className="button is-warning is-medium"
                    >
                      Enroll as a distributor
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
