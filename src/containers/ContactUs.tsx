import React from "react";
import { useTranslation } from "react-i18next";
import { ContactUsSinhala } from "../components/contactUsLanguges/ContactUsSinhala";
import { ContactUsEnglish } from "../components/contactUsLanguges/ContactUsEnglish";

export const ContactUs = () => {
  const { i18n } = useTranslation();

  if (i18n.language === "si") {
    return <ContactUsSinhala />;
  }

  return <ContactUsEnglish />;
};
