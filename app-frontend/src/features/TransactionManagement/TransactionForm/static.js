import * as Yup from "yup";

export const schema = Yup.object().shape({
  accountId: Yup.string()
    .required("Cannot be empty")
    .matches(
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
      "Account ID must be a valid UUIDv4"
    ),
  amount: Yup.number().required("Must be a number"),
});

export const initialValue = {
  accountId: "",
  amount: 0,
};
