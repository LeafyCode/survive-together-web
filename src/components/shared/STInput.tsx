import React from "react";

interface STInputProps {
  register: (ref: Element | null) => void;
  name: string;
  label: string;
  type?: "text" | "number";
}

export const STInput = ({
  register,
  name,
  label,
  type = "text",
}: STInputProps) => {
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <input name={name} ref={register} className="input" type={type} />
      </div>
    </div>
  );
};
