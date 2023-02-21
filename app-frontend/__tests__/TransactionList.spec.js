import React from "react";
import { render, queries } from "@testing-library/react";
import * as customQueries from "./utils/custom-query";
import { TransactionList } from "../src/features/TransactionManagement/TransactionList";

const renderOptions = {
  queries: { ...queries, ...customQueries },
};

describe("TransactionList > Handling empty transaction lists", () => {
  test("snapshot with empty data", () => {
    const { container } = render(<TransactionList />);
    expect(container).toMatchSnapshot();
  });

  test("data prop is undefined", () => {
    const { getByText } = render(<TransactionList />);
    const notransaction = getByText("No Transactions!");
    expect(notransaction).toBeInTheDocument();
  });

  test("data prop is empty array", () => {
    const { getByText } = render(<TransactionList data={[]} />);
    const notransaction = getByText("No Transactions!");
    expect(notransaction).toBeInTheDocument();
  });

  test("data prop is empty object", () => {
    const { getByText } = render(<TransactionList data={{}} />);
    const notransaction = getByText("No Transactions!");
    expect(notransaction).toBeInTheDocument();
  });
});

describe("TransactionList > Handling non-empty transaction list", () => {
  const sampleDebit = {
    transaction_id: "18e13eed-f05e-4c86-a136-f8ea5ae6ca35",
    account_id: "a5777de7-5604-43d3-8f6c-03acac31e8ca",
    amount: -5,
    balance: 10,
    created_at: "2023-02-21T20:23:06.125272+00:00",
  };
  const sampleCredit = {
    transaction_id: "66dadc89-c8f6-4b2f-9b36-8e81057bc45d",
    account_id: "a5777de7-5604-43d3-8f6c-03acac31e8ca",
    amount: 7,
    balance: 15,
    created_at: "2023-02-21T20:23:03.060149+00:00",
  };

  test("snapshot with sample data", () => {
    const { container } = render(
      <TransactionList data={[sampleDebit, sampleCredit]} />
    );
    expect(container).toMatchSnapshot();
  });

  test("first entry showing correct debit transaction text", () => {
    const { getAllByAccountId } = render(
      <TransactionList data={[sampleDebit]} />,
      renderOptions
    );
    const element = getAllByAccountId(sampleDebit.account_id);
    expect(element[0].querySelector("p:nth-child(1)")).toHaveTextContent(
      `Transferred $${Math.abs(sampleDebit.amount)} from account ${
        sampleDebit.account_id
      }`
    );
  });

  test("first entry showing correct credit transaction text", () => {
    const { getAllByAccountId } = render(
      <TransactionList data={[sampleCredit]} />,
      renderOptions
    );
    const element = getAllByAccountId(sampleCredit.account_id);
    expect(element[0].querySelector("p:nth-child(1)")).toHaveTextContent(
      `Transferred $${Math.abs(sampleCredit.amount)} to account ${
        sampleCredit.account_id
      }`
    );
  });

  test("only first entry have balance text", () => {
    const { getAllByAccountId } = render(
      <TransactionList data={[sampleDebit, sampleCredit]} />,
      renderOptions
    );
    const element = getAllByAccountId(sampleDebit.account_id);
    expect(element[0]).toHaveTextContent(
      `The current account balance $${sampleDebit.balance}`
    );
    expect(element[1]).not.toHaveTextContent(
      `The current account balance $${sampleCredit.balance}`
    );
  });

  test("second entry showing correct credit transaction text", () => {
    const { getAllByAccountId } = render(
      <TransactionList data={[sampleDebit, sampleCredit]} />,
      renderOptions
    );
    const element = getAllByAccountId(sampleCredit.account_id);
    expect(element[1]).not.toHaveTextContent(
      `The current account balance $${sampleCredit.balance}`
    );
  });

  test("second entry showing correct debit transaction text", () => {
    const { getAllByAccountId } = render(
      <TransactionList data={[sampleCredit, sampleDebit]} />,
      renderOptions
    );
    const element = getAllByAccountId(sampleDebit.account_id);
    expect(element[1]).not.toHaveTextContent(
      `The current account balance $${sampleDebit.balance}`
    );
  });
});
