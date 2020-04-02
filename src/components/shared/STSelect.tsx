import React from "react";
import AsyncSelect from "react-select/async";
import { Control, Controller } from "react-hook-form";
import Select from "react-select";
import { STSelectOption } from "../../types";
import {useTranslation} from "react-i18next";

interface STSelectProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  name: string;
  label: string;
  options: STSelectOption[];
  loading: boolean;
  help?: string;
  isMulti?: boolean;
  isAsync?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors?: any;
  errorField?: string;
}

export const STSelect = ({
  options,
  name,
  label,
  control,
  loading,
  help,
  isMulti,
  isAsync,
  errors,
  errorField,
}: STSelectProps) => {
    const { t } = useTranslation();

  return (
    <div className="field">
      <label className="label">{t(`${name}InputLabel`)}</label>
      <div className="control">
        <Controller
          name={name}
          control={control}
          isLoading={loading}
          as={
            isAsync ? (
              <AsyncSelect
                isMulti={isMulti}
                loadOptions={(value, callback) => {
                  return callback(
                    options.filter((option) =>
                      option.label
                        .toString()
                        .toLowerCase()
                        .includes(value.toLowerCase().slice(0, 100))
                    )
                  );
                }}
                className={`basic-multi-select ${
                  errors && errors[errorField || name]?.message
                    ? "is-danger"
                    : ""
                }`}
                classNamePrefix="select"
                placeholder={t("startType")}
              />
            ) : (
              <Select
                isMulti={isMulti}
                className="basic-multi-select"
                classNamePrefix="select"
                placeholder={t("startType")}
                options={options}
              />
            )
          }
        />
      </div>
      {errors && errors[errorField || name]?.message && (
        <p className="help is-danger">{errors[errorField || name]?.message}</p>
      )}
      {help && !errors[errorField || name] && <p className="help">{help}</p>}
    </div>
  );
};
