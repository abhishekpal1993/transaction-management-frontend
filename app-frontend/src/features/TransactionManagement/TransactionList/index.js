import { TransactionCard } from "./TransactionCard";

export const TransactionList = ({ data }) => {
  if (!Array.isArray(data) || data.length < 1) {
    return <div>No Transactions!</div>;
  }

  const [firstItem, ...rest] = data;

  return [
    <TransactionCard
      key={firstItem.transaction_id}
      accountId={firstItem.account_id}
      amount={firstItem.amount}
      currentAccountBalance={firstItem.balance}
      showBalance={true}
    />,
    ...rest.map((transaction) => (
      <TransactionCard
        className="mt-4"
        key={transaction.transaction_id}
        accountId={transaction.account_id}
        amount={transaction.amount}
        currentAccountBalance={transaction.balance}
      />
    )),
  ];
};
