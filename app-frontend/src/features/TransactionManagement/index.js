import { TransactionForm } from "./TransactionForm";
import { TransactionList } from "./TransactionList";
import { SectionHeader } from "../../components/atoms";
import { useTransactionHistory } from "./useTransactionHistory";

export const TransactionManagement = ({
  transactions = [],
  accounts = [],
  isPrefetched = false,
}) => {
  const { transactionList, onSubmitHandler, isLoading } = useTransactionHistory(
    {
      transactions,
      accounts,
      isPrefetched,
    }
  );
  return (
    <div className="grid grid-cols-3 min-h-screen">
      <div className="flex flex-col items-start border py-2 px-4 w-full">
        <SectionHeader className="mb-2">Submit new transaction</SectionHeader>
        <TransactionForm onSubmit={onSubmitHandler} isLoading={isLoading} />
      </div>
      <div className="col-span-2 flex flex-col items-start border py-2 px-4 w-full">
        <SectionHeader className="mb-2">Transaction history</SectionHeader>
        <TransactionList data={transactionList} />
      </div>
    </div>
  );
};
