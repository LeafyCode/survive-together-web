import { STSelectOption } from "../types";
import {
  City_city,
  City_city_city_translations,
} from "../graphql-types/generated/City";
import { ItemCategory_item_category } from "../graphql-types/generated/ItemCategory";

export const getCitiesForSelect = (cities?: City_city[]): STSelectOption[] => {
  if (cities) {
    return cities.map((city) => {
      const cityNameSI = city?.city_translations.find(
        (cityTranslation: City_city_city_translations) => {
          return cityTranslation.language === "si";
        }
      );

      return {
        value: city.id,
        label: `${city.name}${cityNameSI?.text ? ` ${cityNameSI.text}` : ""}`,
      };
    });
  }

  return [];
};

export const getItemCategoriesForSelect = (
  itemCategories?: ItemCategory_item_category[]
): STSelectOption[] => {
  if (itemCategories) {
    return itemCategories.map((itemCategory) => ({
      value: itemCategory.id,
      label: itemCategory.name,
    }));
  }

  return [];
};
