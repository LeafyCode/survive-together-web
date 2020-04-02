import * as Yup from "yup";

export const STSelectOptionSchema: Yup.ObjectSchema = Yup.object().shape({
  label: Yup.string().required("Name is required."),
  value: Yup.string().required("Name is required."),
});

export const DistributorValidationSchema: Yup.ObjectSchema = Yup.object().shape(
  {
    name: Yup.string().required("Name is required."),
    cities: Yup.array(STSelectOptionSchema)
      .nullable()
      .required("Please add at lease one city."),
    phoneNumber: Yup.string().required("Phone number is required."),
  }
);

export const RequestValidationSchema: Yup.ObjectSchema = Yup.object().shape({
  contactPersonName: Yup.string().required("Contact person name is required."),
  contactNumber: Yup.string().required("Contact number is required."),
  numberOfPeople: Yup.number()
    .typeError("Number of people should be a number.")
    .required("Number of people value is required.")
    .min(1, "Number of people should be greater than 0."),
  categories: Yup.array(STSelectOptionSchema).required(
    "Please add at least one item."
  ),
});
