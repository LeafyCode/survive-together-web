import React, { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { useToasts } from "react-toast-notifications";
import { useTranslation } from "react-i18next";
import { STPageHeader } from "../components/shared/STPageHeader";
import { STInput } from "../components/shared/STInput";
import { STSelect } from "../components/shared/STSelect";
import { DistributorDataType, STSelectOption } from "../types";
import {
  getCitiesForSelect,
  getItemCategoriesForSelect,
} from "../helpers/sharedHelpers";
import { executeCreateDistributorMutation } from "../helpers/distributorHelpers";
import { CITIES } from "../graphql-types/city";
import { ITEM_CATEGORIES } from "../graphql-types/itemCategory";
import { City } from "../graphql-types/generated/City";
import { ItemCategory } from "../graphql-types/generated/ItemCategory";
import { DistributorValidationSchema } from "../validations";
import {
  STFormArrayRemoveButton,
  STPageContainer,
} from "../components/shared/styledComponents";

export const CreateDistributor = () => {
  const { t } = useTranslation();

  const { addToast } = useToasts();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // React hook form
  const { register, handleSubmit, control, errors } = useForm<
    DistributorDataType
  >({
    validationSchema: DistributorValidationSchema,
    defaultValues: {
      items: [
        {
          name: "",
        },
      ],
      itemPacks: [
        {
          name: "",
        },
      ],
    },
  });
  const {
    fields: itemFields,
    append: itemsAppend,
    remove: itemsRemove,
  } = useFieldArray({
    control,
    name: "items",
  });
  const {
    fields: itemPackFields,
    append: itemPacksAppend,
    remove: itemPacksRemove,
  } = useFieldArray({
    control,
    name: "itemPacks",
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

  const onSubmit = handleSubmit((distributorData) => {
    if (!isLoading) {
      executeCreateDistributorMutation(
        distributorData,
        addToast,
        setIsLoading,
        history
      ).then();
    }
  });

  return (
    <div>
      <STPageHeader
        title={t("addNewDistributor")}
        subTitle={t("addNewDistributorSubtitle")}
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
                <p>{t("infoDistributor")}</p>
              </div>
            </article>

            <form onSubmit={onSubmit}>
              <div className="columns is-multiline">
                <div className="column">
                  <STInput
                    register={register}
                    name="distributorName"
                    label="Distributor name *"
                    errors={errors}
                  />

                  <STInput
                    register={register}
                    name="distributorPhoneNumber"
                    label="Phone number *"
                    errors={errors}
                  />

                  <STInput
                    register={register}
                    name="distributorWebsite"
                    label="Website"
                    errors={errors}
                  />

                  <STInput
                    register={register}
                    name="distributorEmail"
                    label="Email"
                    type="email"
                    errors={errors}
                  />
                </div>

                <div className="column ">
                  <STSelect
                    isMulti
                    control={control}
                    label="Distribution areas *"
                    name="distributorCities"
                    options={citiesForSelect}
                    loading={citiesDataLoading}
                    isAsync
                    help={
                      <span>
                        Showing the most matching 100 cities based on your
                        input. If your city is not there. Please{" "}
                        <Link to="/contact" target="_blank">
                          contact us
                        </Link>
                        . We&apos;ll fix it.
                      </span>
                    }
                    errors={errors}
                  />

                  <STInput
                    register={register}
                    name={t("bannerImageUrl")}
                    label="Banner image URL"
                    errors={errors}
                    help={
                      <span>
                        {t("bannerImageUploadDetails")}{" "}
                        <a
                          href="https://postimages.org/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          https://postimages.org/
                        </a>{" "}
                        {t('bannerImageUploadDetailsTwo')}
                      </span>
                    }
                  />
                </div>
              </div>

              <hr />

              <h4 className="title is-4">
                {t("items")}&nbsp;
                <button
                  className="button is-small"
                  type="button"
                  onClick={itemsAppend}
                >
                  {t("add")}
                </button>
              </h4>

              {itemFields.map((itemField, index) => (
                <div className="columns is-multiline" key={itemField.id}>
                  <div className="column ">
                    <STInput
                      register={register}
                      name={`items[${index}].name`}
                      label="Name *"
                      errorField="name"
                      errors={errors.items && errors.items[index]}
                    />
                  </div>

                  <div className="column ">
                    <STSelect
                      control={control}
                      label="Category *"
                      name={`items[${index}].category`}
                      options={itemCategoriesForSelect}
                      loading={itemCategoriesDataLoading}
                      errorField="category"
                      errors={errors.items && errors.items[index]}
                    />
                  </div>

                  <div className="column ">
                    <STInput
                      register={register}
                      name={`items[${index}].price`}
                      label="Price"
                      type="number"
                      errorField="price"
                      errors={errors.items && errors.items[index]}
                    />
                  </div>

                  <div className="column ">
                    <STInput
                      register={register}
                      name={`items[${index}].deliveryFee`}
                      label="Delivery fee"
                      type="number"
                      errorField="deliveryFee"
                      errors={errors.items && errors.items[index]}
                    />
                  </div>

                  <div className="column ">
                    <STFormArrayRemoveButton
                      className="button is-danger is-outlined"
                      type="button"
                      disabled={itemFields.length <= 1}
                      onClick={() => {
                        itemsRemove(index);
                      }}
                    >
                      {t("removeItem")}
                    </STFormArrayRemoveButton>
                  </div>
                </div>
              ))}

              <hr />

              <h4 className="title is-4">
                {t("itemsPacks")}&nbsp;
                <button
                  className="button is-small"
                  type="button"
                  onClick={itemPacksAppend}
                >
                  {t("add")}
                </button>
              </h4>

              {itemPackFields.map((itemPackField, index) => (
                <div className="columns is-multiline" key={itemPackField.id}>
                  <div className="column ">
                    <STInput
                      register={register}
                      name={`itemPacks[${index}].name`}
                      label="Name *"
                    />
                  </div>

                  <div className="column ">
                    <STInput
                      register={register}
                      name={`itemPacks[${index}].content`}
                      label="Content *"
                      help={t("helpItemPacks")}
                    />
                  </div>

                  <div className="column ">
                    <STInput
                      register={register}
                      name={`itemPacks[${index}].price`}
                      label="Price"
                      type="number"
                    />
                  </div>

                  <div className="column ">
                    <STInput
                      register={register}
                      name={`itemPacks[${index}].deliveryFee`}
                      label="Delivery fee"
                      type="number"
                    />
                  </div>

                  <div className="column ">
                    <STFormArrayRemoveButton
                      className="button is-danger is-outlined"
                      type="button"
                      disabled={itemPackFields.length <= 1}
                      onClick={() => {
                        itemPacksRemove(index);
                      }}
                    >
                      {t("removeItem")}
                    </STFormArrayRemoveButton>
                  </div>
                </div>
              ))}

              <hr />

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
                        {t("submitReview")}
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
