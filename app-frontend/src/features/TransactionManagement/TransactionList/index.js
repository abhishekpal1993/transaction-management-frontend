import { TransactionCard } from "./TransactionCard";
import { BACKEND_RESPONSE_KEYS } from "../../../common/constants";

export const TransactionList = ({ data }) => {
  if (!Array.isArray(data) || data.length < 1) {
    return <div>No Transactions!</div>;
  }

  const [firstItem, ...rest] = data;

  return [
    <TransactionCard
      key={firstItem[BACKEND_RESPONSE_KEYS.transactionId]}
      accountId={firstItem[BACKEND_RESPONSE_KEYS.accountId]}
      amount={firstItem.amount}
      currentAccountBalance={firstItem.balance}
      showBalance={true}
    />,
    ...rest.map((transaction) => (
      <TransactionCard
        className="mt-4"
        key={transaction[BACKEND_RESPONSE_KEYS.transactionId]}
        accountId={transaction[BACKEND_RESPONSE_KEYS.accountId]}
        amount={transaction.amount}
        currentAccountBalance={transaction.balance}
      />
    )),
  ];
};
