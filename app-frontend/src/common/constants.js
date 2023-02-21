export const BACKEND_BASEURL = "https://infra.devskills.app/api/";

export const ACCOUNTING_SERVICE = "accounting";

export const TRANSACTIONS_ENDPOINT = `${ACCOUNTING_SERVICE}/transactions`;

export const TRANSACTION_ENDPOINT = (id) => `${TRANSACTIONS_ENDPOINT}/${id}`;
export const ACCOUNT_ENDPOINT = (id) => `${ACCOUNTING_SERVICE}/accounts/${id}`;

export const CREATE_TRANSACTION_BODY = {
  accountId: "account_id",
  amount: "amount",
};

export const BACKEND_RESPONSE_KEYS = {
  transactionId: "transaction_id",
  accountId: "account_id",
  amount: "amount",
  createdAt: "created_at",
  balance: "balance",
};
