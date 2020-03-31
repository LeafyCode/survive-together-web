import React from "react";

interface STPageHeaderProps {
  title: string;
  subTitle: string;
}

export const STPageHeader = ({ title, subTitle }: STPageHeaderProps) => {
  return (
    <section className="hero is-light">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">{title}</h1>
          <h2 className="subtitle">{subTitle}</h2>
        </div>
      </div>
    </section>
  );
};
