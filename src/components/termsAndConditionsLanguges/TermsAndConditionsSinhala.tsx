import React from "react";
import {STPageHeader} from "../shared/STPageHeader";
import {STPageContainer, STPageContentWrapper} from "../shared/styledComponents";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

export const TermsAndConditionsSinhala = () =>{
    const { t } = useTranslation();

    return(<div>
        <STPageHeader
            title={t('termsAndConditionPage')}
            subTitle={t('termsAndConditionSubtitlePage')}
        />

        <STPageContainer className="container">
            <STPageContentWrapper>
                <br />
                <p>
                    මෙම නියමයන් සහ කොන්දේසි මගින් Survive Together වෙබ් අඩවිය භාවිතා කිරීම සඳහා වන නීති රීති ගෙනහැර දක්වයි, පිවිසෙන්න &nbsp;
                    <a href="https://survivetogether.org">
                        https://survivetogether.org
                    </a>
                    .
                </p>

                <p>
                    මෙම වෙබ් අඩවියට පිවිසීමෙන් ඔබ මෙම නියමයන් පිළිගන්නා බව අපි උපකල්පනය කරමු
                    කොන්දේසි. මෙම පිටුවේ දක්වා ඇති සියලුම නියමයන් සහ කොන්දේසි ගැනීමට ඔබ එකඟ නොවන්නේ නම් දිගටම Survive Together භාවිතා නොකරන්න. අපගේ රහස්‍යතා ප්‍රතිපත්තිය මෙතැනින් සොයාගත හැකිය:{" "}
                    <Link to="/privacy">https://survivetogether.org/privacy</Link>.
                </p>

                <h3 className="title is-3">
                    <strong>{t('cookiesTermsAndConditionPage')}</strong>
                </h3>

                <p>
                    අපි කුකීස් භාවිතය භාවිතා කරමු. Survive Together වෙත ප්‍රවේශ වීමෙන්, ඔබ Survive Together හි රහස්‍යතා ප්‍රතිපත්තියට එකඟව කුකීස් භාවිතා කිරීමට එකඟ විය.
                </p>

                <p>
                    බොහෝ අන්තර්ක්‍රියාකාරී වෙබ් අඩවි කුකීස් භාවිතා කරන්නේ එක් එක් සංචාරය සඳහා පරිශීලකයාගේ තොරතුරු ලබා ගැනීමට අපට ඉඩ සලසමිනි. අපගේ වෙබ් අඩවියට පිවිසෙන පුද්ගලයින්ට පහසු කිරීම සඳහා ඇතැම් ප්‍රදේශවල ක්‍රියාකාරිත්වය සක්‍රීය කිරීම සඳහා කුකීස් අපගේ වෙබ් අඩවිය භාවිතා කරයි. අපගේ සමහර අනුබද්ධ / ප්‍රචාරණ හවුල්කරුවන් ද කුකීස් භාවිතා කළ හැකිය.
                </p>

                <h3 className="title is-3">
                    <strong>ඔබේ පෞද්ගලිකත්වය</strong>
                </h3>

                <p>කරුණාකර රහස්‍යතා ප්‍රතිපත්තිය කියවන්න</p>

                <p>
                    වෙබ් අඩවිය සහ වෙබ් අඩවියේ තොරතුරු සහ සේවාවන් නොමිලේ ලබා දෙන තාක් කල්, කිසිදු ආකාරයක අලාභයක් හෝ හානියක් සම්බන්ධයෙන් අප වගකිව යුතු නොවේ.
                </p>
            </STPageContentWrapper>
        </STPageContainer>
    </div>);
};