export type STSelectOption = {
  label: string | number;
  value: string | number;
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
