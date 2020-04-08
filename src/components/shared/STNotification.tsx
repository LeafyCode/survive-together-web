import React from "react";
import { useTranslation } from "react-i18next";

export const STNotification = () => {
  const { t } = useTranslation();

  return (
    <div className="notification is-danger is-marginless is-radiusless is-size-7">
      {t("notificationContent")}
    </div>
  );
};
