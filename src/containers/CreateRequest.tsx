import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "@apollo/react-hooks";
import { Link, useHistory } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { useTranslation } from "react-i18next";
import { STPageHeader } from "../components/shared/STPageHeader";
import { STPageContainer } from "../components/shared/styledComponents";
import { STInput } from "../components/shared/STInput";
import { RequestDataType, STSelectOption } from "../types";
import { RequestValidationSchema } from "../validations";
import { STSelect } from "../components/shared/STSelect";
import { City } from "../graphql-types/generated/City";
import { CITIES } from "../graphql-types/city";
import {
  getCitiesForSelect,
  getItemCategoriesForSelect,
} from "../helpers/sharedHelpers";
import { ItemCategory } from "../graphql-types/generated/ItemCategory";
import { ITEM_CATEGORIES } from "../graphql-types/itemCategory";
import { executeCreateNeedMutation } from "../helpers/requestHelpers";

export const CreateRequest = () => {
  const { t } = useTranslation();

  const { addToast } = useToasts();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // React hook form
  const { register, handleSubmit, control, errors } = useForm<RequestDataType>({
    validationSchema: RequestValidationSchema,
    defaultValues: {
      agreeToTerms: false,
    },
  });

  // Graphql queries
  const {
    loading: citiesDataLoading,
    error: citiesDataError,
    data: citiesData,
  } = useQuery<City>(CITIES);
  const {
    loading: itemCategoriesDataLoading,
    error: itemCategoriesDataError,
    data: itemCategoriesData,
  } = useQuery<ItemCategory>(ITEM_CATEGORIES);

  const citiesForSelect: STSelectOption[] = getCitiesForSelect(
    citiesData?.city
  );
  const itemCategoriesForSelect: STSelectOption[] = getItemCategoriesForSelect(
    itemCategoriesData?.item_category
  );

  const onSubmit = handleSubmit((requestData) => {
    if (!isLoading) {
      if (!requestData.agreeToTerms) {
        addToast(t("agreeToTerms"), {
          appearance: "error",
          autoDismiss: true,
        });
      } else {
        executeCreateNeedMutation(
          requestData,
          addToast,
          setIsLoading,
          history
        ).then();
      }
    }
  });

  return (
    <div>
      <STPageHeader
        title={t("addNewRequest")}
        subTitle={t("addNewRequestSubtitle")}
      />

      <STPageContainer className="container">
        {citiesDataError || itemCategoriesDataError ? (
          <div className="notification is-danger">
            Something went wrong! Please try again in few minutes. Maybe our
            systems got overloaded. Trust me they are working really hard.
          </div>
        ) : (
          <div>
            <article className="message is-info">
              <div className="message-header">
                <p> {t("infoTitle")}</p>
              </div>
              <div className="message-body">
                <p>
                  {t("info")}&nbsp;
                  <span role="img" aria-label="monkey-face">
                    🙊
                  </span>
                  .
                </p>
              </div>
            </article>

            <form onSubmit={onSubmit}>
              <div className="columns is-multiline">
                <div className="column">
                  <STInput
                    register={register}
                    name="contactPersonName"
                    label="Contact person name *"
                    errors={errors}
                  />

                  <STInput
                    register={register}
                    name="contactNumber"
                    label="Contact number *"
                    errors={errors}
                    help={t("requestContactHelp")}
                  />

                  <STSelect
                    control={control}
                    label="City *"
                    name="city"
                    options={citiesForSelect}
                    loading={citiesDataLoading}
                    errors={errors}
                    isAsync
                    help={t("helpContent")}
                  />
                </div>

                <div className="column">
                  <STInput
                    register={register}
                    name="numberOfPeople"
                    label="Number of people *"
                    errors={errors}
                    type="number"
                  />

                  <STSelect
                    isMulti
                    control={control}
                    label="Items needed *"
                    name="categories"
                    options={itemCategoriesForSelect}
                    loading={itemCategoriesDataLoading}
                    errors={errors}
                  />
                </div>
              </div>

              <div className="columns">
                <div className="column">
                  <label className="checkbox">
                    <input type="checkbox" ref={register} name="agreeToTerms" />
                    &nbsp; {t("termsAndConditionDetails")}&nbsp;&nbsp;
                    <Link to="/terms" target="_blank">
                      {t("termsAndConditionLink")}
                    </Link>
                  </label>
                </div>
              </div>

              <div className="columns is-multiline">
                <div className="column">
                  <div className="field is-grouped">
                    <div className="control">
                      <button
                        className={`button is-link ${
                          isLoading ? "is-loading" : ""
                        }`}
                        type="submit"
                      >
                        {t("submitButton")}
                      </button>
                    </div>

                    {!isLoading && (
                      <div className="control ">
                        <Link
                          className="button is-link is-light"
                          type="button"
                          to="/"
                        >
                          {t("cancelButton")}
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </form>
          </div>
        )}
      </STPageContainer>
    </div>
  );
};
