import React from "react";
import { render } from "@testing-library/react";
import Hero from "../src/components/Hero";

test("renders header", () => {
  const { getByText } = render(<Hero />);
  const headerElement = getByText(/Frontend Boilerplate React with/);
  expect(headerElement).toBeInTheDocument();
});
