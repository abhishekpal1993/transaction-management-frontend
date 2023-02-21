import Head from "next/head";

import {
  Button,
  Card,
  SectionHeader,
  CardText,
  InputLabel,
} from "../src/components/atoms";

import { Input } from "../src/components/molecules";
import { TransactionForm } from "../src/features/TransactionManagement/TransactionForm";
import { TransactionList } from "../src/features/TransactionManagement/TransactionList";
import { TransactionCard } from "../src/features/TransactionManagement/TransactionList/TransactionCard";

/**
 * !!!Faster alternative to storybook for the coding test!!!
 **/

export default () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Storybook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-start w-full flex-1 px-20 text-center">
        {/* !!! ATOMS !!! */}
        <div className="border-2 py-2 px-4 w-full rounded mb-6">
          <h1 className="text-3xl font-bold leading-tight underline">Atoms</h1>
          <br />
          <Button className="mb-4">Click Me!</Button>
          <Card className="mb-4">
            <CardText>Some Text in Card</CardText>
          </Card>
          <SectionHeader className="mb-4">SectionHeader</SectionHeader>
          <InputLabel className="mb-4">Label</InputLabel>
        </div>
        {/* !!! MOLECULES !!! */}
        <div className="border-2 py-2 px-4 w-full rounded mb-6">
          <h1 className="text-3xl font-bold leading-tight underline">
            Molecules
          </h1>
          <br />
          <Input inputClassName="mb-4" placeholder="Enter your name" />
          <Input
            isError={true}
            labelClassName="mb-4"
            placeholder="Enter your name(Error)"
            error={"some error!"}
          />
          <Input
            labelClassName="mb-4"
            placeholder='"Peter Griffin" or "Lois Griffin"'
            label="Name"
          />
          <Input
            isError={true}
            labelClassName="mb-4"
            placeholder='"Peter Griffin" or "Lois Griffin" (Error)'
            label="Name"
            error={"some error!"}
          />
        </div>
        {/* !!! SUBMIT FORM !!! */}
        <div className="flex flex-col items-start border-2 py-2 px-4 w-full rounded mb-6">
          <SectionHeader className="mb-2">Submit new transaction</SectionHeader>
          <TransactionForm onSubmit={console.log} />
        </div>
        {/* !!! TRANSACTION CARDS !!! */}
        <div className="border-2 py-2 px-4 w-full rounded mb-6">
          <h1 className="text-3xl font-bold leading-tight underline">
            Transaction Cards
          </h1>
          <br />
          <TransactionCard
            className="mb-4"
            accountId={"0afd02d3-6c59-46e7-b7bc-893c5e0b7ac2"}
            amount={7}
            currentAccountBalance={460}
            showBalance={false}
          />
          <TransactionCard
            className="mb-4"
            accountId={"0afd02d3-6c59-46e7-b7bc-893c5e0b7ac2"}
            amount={-7}
            currentAccountBalance={460}
            showBalance={false}
          />
          <TransactionCard
            className="mb-4"
            accountId={"0afd02d3-6c59-46e7-b7bc-893c5e0b7ac2"}
            amount={-7}
            currentAccountBalance={-460}
            showBalance={true}
          />
          <TransactionCard
            accountId={"0afd02d3-6c59-46e7-b7bc-893c5e0b7ac2"}
            amount={7}
            currentAccountBalance={-460}
            showBalance={true}
          />
        </div>
        {/* !!! TRANSACTION HISTORY !!! */}
        <div className="flex flex-col items-start border-2 py-2 px-4 w-full rounded mb-6">
          <SectionHeader className="mb-2">Transaction history</SectionHeader>
          <TransactionList
            data={[
              {
                transaction_id: "63136564-c576-403b-ac2c-9b9a22d7fa27",
                account_id: "0afd02d3-6c59-46e7-b7bc-893c5e0b7ac2",
                amount: 7,
                balance: 10,
                created_at: "2023-02-20T19:37:05.659523+00:00",
              },
              {
                transaction_id: "5a67b5ba-396a-43e6-bd96-713ec51aac22",
                account_id: "5ae0ef78-e902-4c40-9f53-8cf910587312",
                amount: -4,
                balance: 10,
                created_at: "2023-02-19T21:36:32.639946+00:00",
              },
              {
                transaction_id: "8694dbaa-3b21-4d20-bdd7-8184566041f1",
                account_id: "0afd02d3-6c59-46e7-b7bc-893c5e0b7ac2",
                amount: 7,
                balance: 10,
                created_at: "2023-02-19T21:20:59.891688+00:00",
              },
              {
                transaction_id: "4fd46e12-f34d-4b68-8b89-f91bc1637e80",
                account_id: "eac4329f-a342-4659-b270-0bc88d634731",
                amount: -5,
                balance: 10,
                created_at: "2023-02-17T13:52:07.773292+00:00",
              },
            ]}
          />
        </div>
      </main>
    </div>
  );
};
