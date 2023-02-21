import { Button } from "../../../components/atoms";
import { Input } from "../../../components/molecules";
import { Form } from "../../../components/renderprops";

import { schema, initialValue } from "./static";

export const TransactionForm = ({ onSubmit }) => {
  return (
    <form
      className="w-full border py-2 px-4 rounded"
      onSubmit={(e) => e.preventDefault()}
    >
      <Form
        validateOnBlur={true}
        initialValues={initialValue}
        validationSchema={schema}
        onSubmitHandler={onSubmit}
      >
        {({ values, handleChange, handleSubmit }) => {
          return (
            <>
              <Input
                type="text"
                inputClassName="mb-4"
                data-type="account-id"
                label="Account ID:"
                name="accountId"
                value={values.accountId ?? ""}
                onChange={handleChange}
              />
              <Input
                type="number"
                inputClassName="mb-4"
                data-type="amount"
                label="Amount:"
                name="amount"
                value={values.amount ?? ""}
                onChange={handleChange}
              />
              <Button
                className="w-1/2"
                data-type="transaction-submit"
                onClick={handleSubmit}
                disabled={!values.amount || !values.accountId}
              >
                Submit
              </Button>
            </>
          );
        }}
      </Form>
    </form>
  );
};
