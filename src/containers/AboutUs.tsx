import React from "react";
import { STPageHeader } from "../components/shared/STPageHeader";
import {
  STPageContainer,
  STPageContentWrapper,
} from "../components/shared/styledComponents";
import surviveTogetherLogo from "../assets/survive-together-logo.png";

export const AboutUs = () => {
  return (
    <div>
      <STPageHeader
        title="About Us"
        subTitle="Who we are and what we are trying to do"
      />

      <STPageContainer className="container">
        <STPageContentWrapper>
          <br />
          <div className="columns">
            <div className="column is-one-fifth">
              <img src={surviveTogetherLogo} alt="Survive Together Logo" />
            </div>
            <div className="column">
              <div className="content">
                <p>
                  This website was created with the intention of helping people
                  in this country with the current situation. The site was
                  created under the theme “Survive Together”.
                </p>

                <p>
                  Due to the prevailing curfew in the country, people living in
                  certain areas are finding it difficult to get groceries,
                  vegetables, fruits, and other essential items. Through this
                  website, vendors can inform people about their services and
                  people can state their needs as well.
                </p>

                <p>
                  At the moment, for some of us, the only way to obtain food and
                  groceries is through deliveries. No one can go out of their
                  house for weeks. While there are many delivery options in some
                  areas, we noticed that most of the areas won&apos;t get
                  anything. Those people are helpless. One of the main targets
                  of this website is to gather enough information to identify
                  those key areas and make sure everyone gets what they need.
                </p>

                <p>
                  We have one big request from everyone. Please try your best to
                  help those in need. This is not the time to make profits. This
                  is not the time to think about marketing. People are dying
                  from a pandemic. We don&apos;t anyone dying from hunger. So
                  please get together, put aside your differences and help
                  whoever you can.
                </p>

                <p>
                  If you are a developer, our code is on GitHub:
                  <a
                    href="https://github.com/LeafyCode/survive-together-web"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://github.com/LeafyCode/survive-together-web
                  </a>
                  . Please have a look and see how you can help.
                </p>
              </div>
            </div>
          </div>
        </STPageContentWrapper>
      </STPageContainer>
    </div>
  );
};
