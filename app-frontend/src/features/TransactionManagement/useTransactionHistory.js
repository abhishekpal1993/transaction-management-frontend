import { useEffect, useState, useMemo, useCallback } from "react";
import {
  fetchAllData,
  getAccountById,
  getTransactionById,
  createTransaction,
} from "../../services/accounting";

export const useTransactionHistory = (props) => {
  const [transactions, setTransactions] = useState(props.transactions);
  const [accounts, setAccounts] = useState(props.accounts);
  const [isLoading, setLoading] = useState(false);

  const refetchData = useCallback(async () => {
    const res = await fetchAllData();
    setTransactions(res.transactions);
    setAccounts(res.accounts);
  }, []);

  const transactionList = useMemo(
    () =>
      transactions.map((trnx) => ({
        ...trnx,
        balance: accounts[trnx.account_id],
      })),
    [transactions, accounts]
  );

  const onSubmitHandler = useCallback(async (values) => {
    console.log("submit:", values);
    setLoading(true);
    const { data: createTrnxRes } = await createTransaction(values);
    const [transaction, account] = await Promise.all([
      getTransactionById(createTrnxRes.transaction_id).then((res) => res.data),
      getAccountById(createTrnxRes.account_id).then((res) => res.data),
    ]);

    console.log("after process:", transaction, account);

    setTransactions((st) => [transaction, ...st]);
    setAccounts((accts) => ({
      ...accts,
      [account.account_id]: account.balance,
    }));
    setLoading(false);
  }, []);

  // If prefetching data failed then try to fetch data on browser
  useEffect(() => {
    (async () => {
      console.log("onMounting:", props, transactionList);

      if (!props.isPrefetched) {
        await refetchData();
      }
    })();
  }, []);

  return { transactionList, onSubmitHandler, isLoading };
};
