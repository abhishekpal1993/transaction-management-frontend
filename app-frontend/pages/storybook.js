import Head from "next/head";

import {
  Button,
  Card,
  SectionHeader,
  CardText,
  InputLabel,
} from "../src/components/atoms";

import { Input } from "../src/components/molecules";

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
        <div className="border-2 py-2 px-4 w-full rounded">
          <h1 className="text-3xl font-bold leading-tight">Atoms</h1>
          <br />
          <Button>Click Me!</Button>
          <Card>
            <CardText>Some Text in Card</CardText>
          </Card>
          <SectionHeader>SectionHeader</SectionHeader>
          <InputLabel>Label</InputLabel>
        </div>
        <br />
        <div className="border-2 py-2 px-4 w-full rounded">
          <h1 className="text-3xl font-bold leading-tight">Molecules</h1>
          <br />
          <Input
            labelClassName=""
            inputClassName=""
            placeholder="enter your name"
            label="Name"
          />
        </div>
      </main>
    </div>
  );
};
