export const getTransactionTextForDebit = (amount, accountId, currency = "$") =>
  `Transferred ${currency}${amount} from account ${accountId}`;

export const getTransactionTextForCredit = (
  amount,
  accountId,
  currency = "$"
) => `Transferred ${currency}${amount} to account ${accountId}`;

export const getAmountSign = (amount) => (Math.sign(amount) === -1 ? "-" : "");

export const getCurrentAccountBalanceText = (amount, currency = "$") =>
  `The current account balance ${getAmountSign(amount)}${currency}${Math.abs(
    amount
  )}`;
