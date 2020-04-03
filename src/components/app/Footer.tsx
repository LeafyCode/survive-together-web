import React from "react";
import GitHubButton from "react-github-btn";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {useTranslation} from "react-i18next";

const STGithubButtonWrapper = styled.div`
  padding: 2px;
  display: inline-block;
  position: relative;
  top: 4px;
`;

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <Link to="/terms">{t("termsAndConditionLink")}</Link> |{" "}
          <Link to="/privacy">{t("privacyPolicy")}</Link> |{" "}
          <Link to="/contact">{t("contactUs")}</Link>
        </p>
      </div>
      <div className="content has-text-centered">
        <p>
          {t("bottomGitHubDetails")}&nbsp;
          <STGithubButtonWrapper>
            <GitHubButton
              href="https://github.com/LeafyCode/survive-together-web"
              data-color-scheme="no-preference: light; light: light; dark: light;"
              data-size="small"
              data-show-count
              aria-label="Star LeafyCode/survive-together-web on GitHub"
            >
              Star
            </GitHubButton>
          </STGithubButtonWrapper>
        </p>
      </div>
      <div className="content has-text-centered">
        <p>
          This project is initiated with <span role="img">❤</span>️ by{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://leafycode.com"
          >
            LeafyCode
          </a>
        </p>
      </div>
    </footer>
  );
};
