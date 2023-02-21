import * as Yup from "yup";

export const schema = Yup.object().shape({
  accountId: Yup.string()
    .required("Cannot be empty")
    .matches(
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
      "Account ID must be a valid UUIDv4"
    ),
  amount: Yup.number()
    .integer("Number must be an integer")
    .test("not-zero", "Number cannot be 0", (value) => value !== 0)
    .required("Cannot be empty"),
});

export const initialValue = {
  accountId: "",
  amount: "",
};
