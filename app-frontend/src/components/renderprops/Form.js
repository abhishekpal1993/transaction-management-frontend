import { useFormik } from "formik";

export const Form = (props) => {
  const formik = useFormik({
    validateOnBlur: props.validateOnBlur || true,
    initialValues: props.initialValue || {},
    validationSchema: props.validationSchema,
    onSubmit: props.onSubmitHandler,
  });

  return props.children({
    values: formik.values,
    errors: formik.errors,
    touched: formik.touched,
  });
};
