import Head from "next/head";
import { getAllTransactions } from "../src/services/accounting";

/**
 * !!!This is just a proof of concept for the coding test!!!
 * Ideally, pages which don't need SEO shouldn't be prioritized for prefetch on server side.
 **/
export const getServerSideProps = async () => {
  // Fetch data from external API
  const res = await getAllTransactions();
  const { data, status } = res;

  // Pass data to the page via props
  return { props: { data, status } };
};

export default () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Transaction Management</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        Main Content
      </main>
      Footer
    </div>
  );
};
