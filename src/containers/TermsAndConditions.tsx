import React from "react";
import { useTranslation } from "react-i18next";
import { TermsAndConditionsEnglish } from "../components/termsAndConditionsLanguges/TermsAndConditionsEnglish";
import { TermsAndConditionsSinhala } from "../components/termsAndConditionsLanguges/TermsAndConditionsSinhala";

export const TermsAndConditions = () => {
  const { i18n } = useTranslation();

  if (i18n.language === "si") {
    return <TermsAndConditionsSinhala />;
  }

  return <TermsAndConditionsEnglish />;
};
