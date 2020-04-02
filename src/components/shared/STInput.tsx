import React from "react";
import { useTranslation } from "react-i18next";

interface STInputProps {
  register: (ref: Element | null) => void;
  name: string;
  label: string;
  help?: React.ReactNode;
  type?: "text" | "number" | "email";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors?: any;
  errorField?: string;
}

export const STInput = ({
  register,
  name,
  type = "text",
  errors,
  errorField,
  help,
}: STInputProps) => {
  const { t } = useTranslation();

  return (
    <div className="field">
      <label className="label">
        {t(`${name.replace(/ *\[[^]*\] */g, "")}InputLabel`)}
      </label>
      <div className="control">
        <input
          name={name}
          ref={register}
          className={`input ${
            errors && errors[errorField || name]?.message ? "is-danger" : ""
          }`}
          type={type}
        />
      </div>
      {errors && errors[errorField || name]?.message && (
        <p className="help is-danger">{errors[errorField || name]?.message}</p>
      )}
      {!(errors && errors[errorField || name]) && help && (
        <p className="help">{help}</p>
      )}
    </div>
  );
};
