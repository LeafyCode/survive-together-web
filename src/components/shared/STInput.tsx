import React from "react";

interface STInputProps {
  register: (ref: Element | null) => void;
  name: string;
  label: string;
  help?: string;
  type?: "text" | "number" | "email";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors?: any;
  errorField?: string;
}

export const STInput = ({
  register,
  name,
  label,
  type = "text",
  errors,
  errorField,
  help,
}: STInputProps) => {
  return (
    <div className="field">
      <label className="label">{label}</label>
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
