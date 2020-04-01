import { AddToast } from "react-toast-notifications";
import { Dispatch, SetStateAction } from "react";
import { RequestDataType } from "../types";
import { apolloClient } from "../lib/apollo";
import { need_insert_input } from "../graphql-types/generated/graphql-global-types";
import { COUNTRY_ID } from "../config";
import {
  InsertNeed,
  InsertNeedVariables,
} from "../graphql-types/generated/InsertNeed";
import { INSERT_NEED } from "../graphql-types/need";

export const executeCreateNeedMutation = async (
  requestData: RequestDataType,
  addToast: AddToast,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  history: {
    push: (path: string) => void;
  }
): Promise<void> => {
  try {
    setIsLoading(true);

    const needInput: need_insert_input = {
      countryId: COUNTRY_ID,
      contactPersonName: requestData.contactPersonName,
      contactNumber: requestData.contactNumber,
      cityId: requestData.city.value,
      numberOfPeople: requestData.numberOfPeople,
      item_category_needs: {
        data: requestData.categories.map((category) => ({
          itemCategoryId: category.value,
        })),
      },
    };

    await apolloClient.mutate<InsertNeed, InsertNeedVariables>({
      mutation: INSERT_NEED,
      variables: {
        objects: [needInput],
      },
    });

    setIsLoading(false);
    history.push("/");

    return addToast("Your information successfully added!", {
      appearance: "success",
      autoDismiss: true,
    });
  } catch (error) {
    setIsLoading(false);

    return addToast("Something went wrong. Please try again later.", {
      appearance: "error",
      autoDismiss: true,
    });
  }
};
