import React from "react";
import {useTranslation} from "react-i18next";

interface STPageHeaderProps {
  title: string;
  subTitle: string;
}

export const STPageHeader = ({ title, subTitle }: STPageHeaderProps) => {
  const { t } = useTranslation();

  return (
    <section className="hero is-light">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">{t(`${title}InputLabel`)}</h1>
          <h2 className="subtitle">{t(`${subTitle}InputLabel`)}</h2>
        </div>
      </div>
    </section>
  );
};
