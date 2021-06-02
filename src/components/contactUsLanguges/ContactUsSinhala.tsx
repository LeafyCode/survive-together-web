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

export const ContactUsSinhala = () => {
  const { t } = useTranslation();

  return (
    <div>
      <STPageHeader title={t("contact")} subTitle={t("howToContact")} />

      <STPageContainer className="container">
        <STPageContentWrapper>
          <ContactContent className="content">
            <p>
              <a href="mailto:hello@leafycode.com">hello@leafycode.com</a>
              &nbsp;වෙත විද්‍යුත් තැපෑලක් එවීමෙන් හෝ ෆේස්බුක්&nbsp;
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/LeafyCode"
              >
                https://www.facebook.com/LeafyCode
              </a>
              &nbsp;හරහා පණිවුඩයක් යැවීමෙන් ඔබට Survive Together පිටුපස සිටින
              කණ්ඩායම සම්බන්ධ කර ගත හැකිය.
            </p>
            <ContactIcon role="img">💌</ContactIcon>
          </ContactContent>
        </STPageContentWrapper>
      </STPageContainer>
    </div>
  );
};
