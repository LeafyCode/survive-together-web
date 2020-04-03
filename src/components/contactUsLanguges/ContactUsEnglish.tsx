import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { STPageHeader } from "../shared/STPageHeader";
import {
  STPageContainer,
  STPageContentWrapper,
} from "../shared/styledComponents";

const ContactContent = styled.div`
  max-width: 600px;
  text-align: center;
  margin: 32px auto auto;
`;

const ContactIcon = styled.span`
  font-size: 44px;
`;

export const ContactUsEnglish = () => {
  const { t } = useTranslation();

  return (
    <div>
      <STPageHeader title={t("contact")} subTitle={t("howToContact")} />

      <STPageContainer className="container">
        <STPageContentWrapper>
          <ContactContent className="content">
            <p>
              You can contact the team behind Survive Together by sending them
              an email to{" "}
              <a href="mailto:hello@leafycode.com">hello@leafycode.com</a> or by
              sending them a message through Facebook{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/LeafyCode"
              >
                https://www.facebook.com/LeafyCode
              </a>
              .
            </p>

            <ContactIcon role="img">💌</ContactIcon>
          </ContactContent>
        </STPageContentWrapper>
      </STPageContainer>
    </div>
  );
};
