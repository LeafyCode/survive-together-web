import { TableCellProps } from "react-virtualized";
import { Need_need } from "./graphql-types/generated/Need";

export type STSelectOption = {
  label: string;
  value: string;
};

export type DistributorItemDataType = {
  name: string;
  category: STSelectOption;
  price: string;
  deliveryFee: string;
};

export type DistributorItemPacksDataType = {
  name: string;
  content: string;
  price: string;
  deliveryFee: string;
};

export type DistributorDataType = {
  name: string;
  phoneNumber: string;
  website: string;
  email: string;
  cities: STSelectOption[];
  bannerImageUrl: string;
  items: DistributorItemDataType[];
  itemPacks: DistributorItemPacksDataType[];
};

export type RequestDataType = {
  contactPersonName: string;
  contactNumber: string;
  city: STSelectOption;
  numberOfPeople: number;
  categories: STSelectOption[];
  agreeToTerms: boolean;
};

export interface RequestTableRowDataType extends TableCellProps {
  rowData: Need_need;
}
