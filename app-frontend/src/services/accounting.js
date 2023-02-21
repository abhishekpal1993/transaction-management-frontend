import axios from "axios";
import {
  ACCOUNT_ENDPOINT,
  BACKEND_BASEURL,
  CREATE_TRANSACTION_BODY,
  TRANSACTIONS_ENDPOINT,
  TRANSACTION_ENDPOINT,
} from "../common/constants";

const accounting = axios.create({ baseURL: BACKEND_BASEURL });

export const getAllTransactions = () => accounting.get(TRANSACTIONS_ENDPOINT);
export const createTransaction = (accountId, amount) =>
  accounting.post(TRANSACTIONS_ENDPOINT, {
    [CREATE_TRANSACTION_BODY.accountId]: accountId,
    [CREATE_TRANSACTION_BODY.amount]: amount,
  });

export const getTransactionById = (id) =>
  accounting.get(TRANSACTION_ENDPOINT(id));

export const getAccountById = (id) => accounting.get(ACCOUNT_ENDPOINT(id));
