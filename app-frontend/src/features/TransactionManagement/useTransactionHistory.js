import { useEffect, useState, useMemo, useCallback } from "react";
import {
  fetchAllData,
  getAccountById,
  getTransactionById,
  createTransaction,
} from "../../services/accounting";
import { BACKEND_RESPONSE_KEYS } from "../../common/constants";

export const useTransactionHistory = (props) => {
  const [transactions, setTransactions] = useState(props.transactions);
  const [accounts, setAccounts] = useState(props.accounts);
  const [isLoading, setLoading] = useState(false);

  const refetchData = useCallback(async () => {
    try {
      const res = await fetchAllData();
      setTransactions(res.transactions);
      setAccounts(res.accounts);
    } catch (err) {
      console.error(err);
    }
  }, []);

  const transactionList = useMemo(
    () =>
      transactions.map((trnx) => ({
        ...trnx,
        balance: accounts[trnx[BACKEND_RESPONSE_KEYS.accountId]],
      })),
    [transactions, accounts]
  );

  const onSubmitHandler = useCallback(async (values) => {
    try {
      setLoading(true);
      const { data: createTrnxRes } = await createTransaction(values);
      const [transaction, account] = await Promise.all([
        getTransactionById(
          createTrnxRes[BACKEND_RESPONSE_KEYS.transactionId]
        ).then((res) => res.data),
        getAccountById(createTrnxRes[BACKEND_RESPONSE_KEYS.accountId]).then(
          (res) => res.data
        ),
      ]);

      setTransactions((st) => [transaction, ...st]);
      setAccounts((accts) => ({
        ...accts,
        [account[BACKEND_RESPONSE_KEYS.accountId]]: account.balance,
      }));
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  // If prefetching data failed then try to fetch data on browser
  useEffect(() => {
    (async () => {
      if (!props.isPrefetched) {
        await refetchData();
      }
    })();
  }, []);

  return { transactionList, onSubmitHandler, isLoading };
};
