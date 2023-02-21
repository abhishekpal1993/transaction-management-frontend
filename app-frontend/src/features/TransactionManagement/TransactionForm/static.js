import * as Yup from "yup";

export const schema = Yup.object().shape({
  accountId: Yup.string().required("Required"),
  amount: Yup.string().required("Required"),
});

export const initialValue = {
  accountId: "",
  amount: "",
};
