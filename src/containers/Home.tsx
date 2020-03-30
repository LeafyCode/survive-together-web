import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <div className="navbar" role="navigation" aria-label="main navigation">
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
    </div>
  );
};
