import React, { useState } from "react";
import styled from "styled-components";
import { useFieldArray, useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { useToasts } from "react-toast-notifications";
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

const STFormContainer = styled.div`
  padding: 20px;
`;

const STFormArrayRemoveButton = styled.button`
  margin-top: 31px;
`;

export const CreateDistributor = () => {
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
        title="Add distributor"
        subTitle="Enter new distributor details"
      />

      <STFormContainer className="container">
        {citiesDataError || itemCategoriesDataError ? (
          <div className="notification is-danger">
            Something went wrong! Please try again in few minutes. Maybe our
            systems got overloaded. Trust me they are working really hard.
          </div>
        ) : (
          <div>
            <article className="message is-info">
              <div className="message-header">
                <p>Info</p>
              </div>
              <div className="message-body">
                <p>
                  Please make sure the content is correct. We will{" "}
                  <strong>approve</strong> distributors only after validating
                  the information. If the information is incorrect, we will not
                  approve it.
                </p>
              </div>
            </article>

            <form onSubmit={onSubmit}>
              <div className="columns is-multiline">
                <div className="column">
                  <STInput
                    register={register}
                    name="name"
                    label="Distributor name *"
                    errors={errors}
                  />

                  <STInput
                    register={register}
                    name="phoneNumber"
                    label="Phone number *"
                    errors={errors}
                  />

                  <STInput
                    register={register}
                    name="website"
                    label="Website"
                    errors={errors}
                  />

                  <STInput
                    register={register}
                    name="email"
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
                    name="cities"
                    options={citiesForSelect}
                    loading={citiesDataLoading}
                    isAsync
                    help="Showing the most matching 100 cities based on your input."
                    errors={errors}
                  />
                </div>
              </div>

              <hr />

              <article className="message is-info">
                <div className="message-header">
                  <p>Info</p>
                </div>
                <div className="message-body">
                  <p>
                    There should be at least one item or one item pack. Make
                    sure you fill all the required fields denoted by *
                  </p>
                </div>
              </article>

              <hr />

              <h4 className="title is-4">
                Items&nbsp;
                <button
                  className="button is-small"
                  type="button"
                  onClick={itemsAppend}
                >
                  Add
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
                      Remove
                    </STFormArrayRemoveButton>
                  </div>
                </div>
              ))}

              <hr />

              <h4 className="title is-4">
                Item packs&nbsp;
                <button
                  className="button is-small"
                  type="button"
                  onClick={itemPacksAppend}
                >
                  Add
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
                      help="Please add a comma separated list."
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
                      Remove
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
                        Submit for Review
                      </button>
                    </div>
                    {!isLoading && (
                      <div className="control ">
                        <Link
                          className="button is-link is-light"
                          type="button"
                          to="/"
                        >
                          Cancel
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </form>
          </div>
        )}
      </STFormContainer>
    </div>
  );
};
