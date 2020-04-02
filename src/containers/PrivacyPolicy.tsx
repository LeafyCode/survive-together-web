import React from "react";
import { useTranslation } from "react-i18next";
import { PrivacyPolicySinhala } from "../components/privacyPolicyLanguges/PrivacyPolicySinhala";
import { PrivacyPolicyEnglish } from "../components/privacyPolicyLanguges/PrivacyPolicyEnglish";

export const PrivacyPolicy = () => {
  const { i18n } = useTranslation();

  if (i18n.language === "si") {
    return <PrivacyPolicySinhala />;
  }

  return <PrivacyPolicyEnglish />;
};
