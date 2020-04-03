import React from "react";
import { useTranslation } from "react-i18next";
import { STPageHeader } from "../shared/STPageHeader";
import {
  STPageContainer,
  STPageContentWrapper,
} from "../shared/styledComponents";
import surviveTogetherLogo from "../../assets/survive-together-logo.png";

export const AboutUsSinhala = () => {
  const { t } = useTranslation();

  return (
    <div>
      <STPageHeader title={t("aboutUs")} subTitle={t("aboutUsSubtitle")} />

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
                  මෙම වෙබ් අඩවිය නිර්මාණය කරන ලද්දේ වර්තමාන තත්වය සමඟ මේ රටේ ජනතාවට උපකාර කිරීමේ අරමුණින් ය. වෙබ් අඩවිය නිර්මාණය කර ඇත්තේ "සැවොම එක්ව බේරාගනිමු - Survive Together " යන තේමාව යටතේ ය.

                </p>

                <p>
                  රට තුළ පවතින ඇඳිරි නීතිය හේතුවෙන් ඇතැම් ප්‍රදේශවල වෙසෙන ජනතාවට සිල්ලර බඩු, එළවළු, පලතුරු සහ අත්‍යාවශ්‍ය භාණ්ඩ ලබා ගැනීම දුෂ්කර වී තිබේ. මෙම වෙබ් අඩවිය හරහා වෙළෙඳ මහතුන්ට ඔවුන්ගේ සේවාවන් පිළිබඳව ජනතාව දැනුවත් කළ හැකි අතර මිනිසුන්ට ද ඔවුන්ගේ අවශ්‍යතා ප්‍රකාශ කළ හැකිය.
                </p>

                <p>
                  මේ මොහොතේ, අපගෙන් සමහර අයට, ආහාර ලබා ගත හැකි එකම ක්‍රමය වන්නේ භාණ්ඩ බෙදාහැරීම් හරහා වේ. සති ගණන් කිසිවෙකුට ඔවුන්ගේ නිවසින් පිටතට යා නොහැක. සමහර ප්‍රදේශවල බෙදා හැරීමේ විකල්ප බොහොමයක් ඇති අතර, බොහෝ ප්‍රදේශවලට කිසිවක් නොලැබෙන බව අපි දුටුවෙමු. ඒ මිනිසුන් අසරණයි. මෙම වෙබ් අඩවියේ ප්‍රධාන ඉලක්කයක් වන්නේ එම ප්‍රධාන ක්ෂේත්‍ර හඳුනා ගැනීම සඳහා ප්‍රමාණවත් තොරතුරු රැස් කිරීම සහ සෑම කෙනෙකුටම අවශ්‍ය දේ ලබා ගැනීමට වග බලා ගැනීමයි.

                </p>

                <p>
                  අපට සෑම කෙනෙකුගෙන්ම එක් විශාල ඉල්ලීමක් කිරීමට තිබේ. කරුණාකර අවශ්‍යතා ඇති අයට උපකාර කිරීමට ඔබේ උපරිම දායකත්වය ලබාදෙන්න. ලාභ ලැබීමට කාලය මෙය නොවේ. අලෙවිකරණය ගැන සිතීමට කාලය මෙය නොවේ. මිනිසුන් වසංගතයකින් මිය යති. කුසගින්නෙන් මිය යන කිසිවෙකු අපට අවශ්‍ය නැත. එබැවින් කරුණාකර එකට එකතු වී, ඔබේ වෙනස්කම් පසෙකට දමා ඔබට හැකි ඕනෑම කෙනෙකුට උදව් කරන්න.

                </p>

                <p>
                  ඔබ මෘදුකා๐ඝ සංවර්ධකයෙකු නම්, අපගේ කේතය GitHub හි ඇත: &nbsp;
                  <a
                    href="https://github.com/LeafyCode/survive-together-web"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://github.com/LeafyCode/survive-together-web
                  </a>
                  &nbsp; කරුණාකර ඇවිත් ඔබට උදව් කරහැකි ආකාරය බලන්න.
                </p>
              </div>
            </div>
          </div>
        </STPageContentWrapper>
      </STPageContainer>
    </div>
  );
};
