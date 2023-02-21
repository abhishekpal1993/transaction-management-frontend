import { Card, CardText } from "../../../components/atoms";
import { append } from "../../../utils/classname";
import {
  getCurrentAccountBalanceText,
  getTransactionTextForCredit,
  getTransactionTextForDebit,
} from "../../../utils/transaction-history";

export const TransactionCard = ({
  className,
  accountId,
  amount,
  currentAccountBalance,
  showBalance = false,
  ...props
}) => {
  const transactionCardClassName = "flex flex-col items-start";
  const cardText =
    amount < 0
      ? getTransactionTextForDebit(amount, accountId)
      : getTransactionTextForCredit(amount, accountId);
  const currentBalanceText = getCurrentAccountBalanceText(
    currentAccountBalance
  );
  return (
    <Card
      data-type="transaction"
      data-account-id={accountId}
      data-amount={amount}
      data-balance={currentAccountBalance}
      className={append(transactionCardClassName, className)}
      {...props}
    >
      <CardText>{cardText}</CardText>
      {!!showBalance && (
        <CardText className="mt-4">{currentBalanceText}</CardText>
      )}
    </Card>
  );
};
