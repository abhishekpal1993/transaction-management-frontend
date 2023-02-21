import Head from "next/head";
import { TransactionManagement } from "../src/features/TransactionManagement";
import { fetchAllData } from "../src/services/accounting";

/**
 * !!!This is just a proof of concept for the coding test!!!
 * Ideally, pages which don't need SEO shouldn't be prioritized for prefetch on server side.
 **/
export const getServerSideProps = async () => {
  try {
    const { transactions, accounts } = await fetchAllData();

    // Pass data to the page via props
    return { props: { transactions, accounts, isPrefetched: true } };
  } catch (err) {
    console.error(err);
    return { props: { isPrefetched: false } };
  }
};

export default ({ transactions, accounts, isPrefetched }) => (
  <>
    <Head>
      <title>Transaction Management</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <TransactionManagement
      isPrefetched={isPrefetched}
      transactions={transactions}
      accounts={accounts}
    />
  </>
);
