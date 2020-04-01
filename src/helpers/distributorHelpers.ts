import isEmpty from "lodash/isEmpty";
import { AddToast } from "react-toast-notifications";
import { Dispatch, SetStateAction } from "react";
import { DistributorDataType } from "../types";
import { apolloClient } from "../lib/apollo";
import { INSERT_DISTRIBUTOR } from "../graphql-types/distributor";
import {
  InsertDistributor,
  InsertDistributorVariables,
} from "../graphql-types/generated/InsertDistributor";
import { distributor_insert_input } from "../graphql-types/generated/graphql-global-types";
import { COUNTRY_ID } from "../config";

export const executeCreateDistributorMutation = async (
  distributorData: DistributorDataType,
  addToast: AddToast,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  history: {
    push: (path: string) => void;
  }
): Promise<void> => {
  try {
    setIsLoading(true);

    const distributorInput: distributor_insert_input = {
      countryId: COUNTRY_ID,
      name: distributorData.name,
      phoneNumber: distributorData.phoneNumber,
      website: distributorData.website,
      email: distributorData.email,
      distributor_cities: {
        data: distributorData.cities.map((city) => ({
          cityId: city.value,
        })),
      },
      distributor_items: {
        data: [],
      },
      distributor_packs: {
        data: [],
      },
    };

    distributorData.items.forEach((item) => {
      if (
        !isEmpty(item.name) &&
        !isEmpty(item.category) &&
        distributorInput.distributor_items
      ) {
        distributorInput.distributor_items.data.push({
          itemCategoryId: item.category.value,
          name: item.name,
          deliveryFee: parseInt(item.deliveryFee, 10),
          price: parseInt(item.price, 10),
        });
      }
    });

    distributorData.itemPacks.forEach((itemPack) => {
      if (
        !isEmpty(itemPack.name) &&
        !isEmpty(itemPack.content) &&
        distributorInput.distributor_packs
      ) {
        distributorInput.distributor_packs.data.push({
          name: itemPack.name,
          content: itemPack.content,
          deliveryFee: parseInt(itemPack.deliveryFee, 10),
          price: parseInt(itemPack.price, 10),
        });
      }
    });

    await apolloClient.mutate<InsertDistributor, InsertDistributorVariables>({
      mutation: INSERT_DISTRIBUTOR,
      variables: {
        objects: [distributorInput],
      },
    });

    setIsLoading(false);
    history.push("/");

    return addToast(
      "Thank you for your contribution! We will review the information and publish them shortly.",
      {
        appearance: "success",
        autoDismiss: true,
      }
    );
  } catch (error) {
    setIsLoading(false);

    return addToast("Something went wrong. Please try again later.", {
      appearance: "error",
      autoDismiss: true,
    });
  }
};
