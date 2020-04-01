import React from "react";
import { Link } from "react-router-dom";
import { STPageHeader } from "../components/shared/STPageHeader";
import {
  STPageContainer,
  STPageContentWrapper,
} from "../components/shared/styledComponents";

export const TermsAndConditions = () => {
  return (
    <div>
      <STPageHeader
        title="Terms and Conditions"
        subTitle="Terms and Conditions for Survive Together"
      />

      <STPageContainer className="container">
        <STPageContentWrapper>
          <br />
          <p>
            These terms and conditions outline the rules and regulations for the
            use of Survive Together&apos;s Website, located at&nbsp;
            <a href="https://survivetogether.org">
              https://survivetogether.org
            </a>
            .
          </p>

          <p>
            By accessing this website we assume you accept these terms and
            conditions. Do not continue to use Survive Together if you do not
            agree to take all of the terms and conditions stated on this page.
            Our Privacy Policy can be found here:{" "}
            <Link to="/privacy">https://survivetogether.org/privacy</Link>.
          </p>

          <h3 className="title is-3">
            <strong>Cookies</strong>
          </h3>

          <p>
            We employ the use of cookies. By accessing Survive Together, you
            agreed to use cookies in agreement with the Survive Together&apos;s
            Privacy Policy.
          </p>

          <p>
            Most interactive websites use cookies to let us retrieve the user’s
            details for each visit. Cookies are used by our website to enable
            the functionality of certain areas to make it easier for people
            visiting our website. Some of our affiliate/advertising partners may
            also use cookies.
          </p>

          <h3 className="title is-3">
            <strong>Your Privacy</strong>
          </h3>

          <p>Please read Privacy Policy</p>

          <p>
            As long as the website and the information and services on the
            website are provided free of charge, we will not be liable for any
            loss or damage of any nature.
          </p>
        </STPageContentWrapper>
      </STPageContainer>
    </div>
  );
};
