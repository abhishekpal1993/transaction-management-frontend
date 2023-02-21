import { queryHelpers, buildQueries } from "@testing-library/react";

const queryAllByAccountId = queryHelpers.queryAllByAttribute.bind(
  null,
  "data-account-id"
);
const getMultipleAccountIdError = (c, dataCyValue) =>
  `Found multiple elements with the data-account-id attribute of: ${dataCyValue}`;
const getMissingAccountIdError = (c, dataCyValue) =>
  `Unable to find an element with the data-account-id attribute of: ${dataCyValue}`;
const [
  queryByAccountId,
  getAllByAccountId,
  getByAccountId,
  findAllByAccountId,
  findByAccountId,
] = buildQueries(
  queryAllByAccountId,
  getMultipleAccountIdError,
  getMissingAccountIdError
);

export {
  queryByAccountId,
  getAllByAccountId,
  getByAccountId,
  findAllByAccountId,
  findByAccountId,
};
