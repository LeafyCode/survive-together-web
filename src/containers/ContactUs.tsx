import React from "react";
import styled from "styled-components";
import { STPageHeader } from "../components/shared/STPageHeader";
import {
  STPageContainer,
  STPageContentWrapper,
} from "../components/shared/styledComponents";

const ContactContent = styled.div`
  max-width: 600px;
  text-align: center;
  margin: 32px auto auto;
`;

const ContactIcon = styled.span`
  font-size: 44px;
`;

export const ContactUs = () => {
  return (
    <div>
      <STPageHeader title="Contact Us" subTitle="How to contact us" />

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
