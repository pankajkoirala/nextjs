import * as yup from "yup";

export const validationSchema = yup.object({
  fullName: yup.string().required("Fullname is required"),
  email: yup
    .string()
    .matches(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "invalid email"
    )
    .required("Email is required"),
  mobileNo: yup.string().required("Mobile no is required"),
  address: yup.string().required("Address is required"),
});
