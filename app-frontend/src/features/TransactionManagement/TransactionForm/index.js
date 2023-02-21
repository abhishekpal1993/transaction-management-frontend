import { Button } from "../../../components/atoms";
import { Input } from "../../../components/molecules";
import { Form } from "../../../components/renderprops";

import { schema, initialValue } from "./static";

export const TransactionForm = ({ onSubmit, isLoading }) => {
  return (
    <form
      className="w-full border py-4 px-4 rounded"
      onSubmit={(e) => e.preventDefault()}
    >
      <Form
        validateOnBlur={true}
        initialValues={initialValue}
        validationSchema={schema}
        onSubmitHandler={onSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          handleBlur,
        }) => (
          <>
            <Input
              type="text"
              labelClassName="mb-4"
              data-type="account-id"
              label="Account ID:"
              name="accountId"
              value={values.accountId ?? ""}
              onChange={handleChange}
              onBlur={handleBlur}
              isError={!!errors.accountId && !!touched.accountId}
              error={errors.accountId}
            />
            <Input
              type="number"
              labelClassName="mb-4"
              data-type="amount"
              label="Amount:"
              name="amount"
              value={values.amount ?? 0}
              onChange={handleChange}
              onBlur={handleBlur}
              isError={!!errors.amount && !!touched.amount}
              error={errors.amount}
            />
            <Button
              className="w-full"
              data-type="transaction-submit"
              onClick={handleSubmit}
              isLoading={isLoading}
              disabled={
                !values.amount ||
                !values.accountId ||
                errors.amount ||
                errors.accountId
              }
            >
              Submit
            </Button>
          </>
        )}
      </Form>
    </form>
  );
};
