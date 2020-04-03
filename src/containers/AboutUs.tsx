import React from "react";
import { useTranslation } from "react-i18next";
import { AboutUsEnglish } from "../components/aboutUsLanguges/AboutUSEnglish";
import { AboutUsSinhala } from "../components/aboutUsLanguges/AboutUsSinhala";

export const AboutUs = () => {
  const { i18n } = useTranslation();

  if (i18n.language === "si") {
    return <AboutUsSinhala />;
  }

  return <AboutUsEnglish />;
};
