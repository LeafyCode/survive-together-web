import * as Yup from "yup";

export const DistributorItemSchema: Yup.ObjectSchema = Yup.object().shape({
  name: Yup.string().required("Name is required."),
});

export const DistributorCitySchema: Yup.ObjectSchema = Yup.object().shape({
  label: Yup.string().required("Name is required."),
  value: Yup.string().required("Name is required."),
});

export const DistributorValidationSchema: Yup.ObjectSchema = Yup.object().shape(
  {
    name: Yup.string().required("Name is required."),
    cities: Yup.array(DistributorCitySchema)
      .nullable()
      .required("Please add at lease one city."),
    phoneNumber: Yup.string().required("Phone number is required."),
  }
);
