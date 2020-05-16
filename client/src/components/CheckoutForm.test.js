import React from "react";
import {
  render,
  fireEvent,
  getByTestId,
  getByText,
} from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  const { getByTestId } = render(<CheckoutForm />);
  const header = getByTestId("form-header");
  expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
  const { getByTestId, container } = render(<CheckoutForm />);

  const firstNameInput = getByTestId("firstName");
  const lastNameInput = getByTestId("lastName");
  const addressInput = getByTestId("address");
  const cityInput = getByTestId("city");
  const stateInput = getByTestId("state");
  const zipInput = getByTestId("zip");
  const checkout = getByTestId("checkoutBtn");

  fireEvent.change(firstNameInput, { target: { value: "Jane" } });

  fireEvent.change(lastNameInput, { target: { value: "Doe" } });

  fireEvent.change(addressInput, { target: { value: "1234 Middle of" } });

  fireEvent.change(cityInput, { target: { value: "nowhereville" } });

  fireEvent.change(stateInput, { target: { value: "jupiter" } });

  fireEvent.change(zipInput, { target: { value: "54321" } });

  expect(firstNameInput.value).toBe("Jane");
  expect(lastNameInput.value).toBe("Doe");
  expect(addressInput.value).toBe("1234 Middle of");
  expect(cityInput.value).toBe("nowhereville");
  expect(stateInput.value).toBe("jupiter");
  expect(zipInput.value).toBe("54321");

  fireEvent.click(checkout);

  expect(getByTestId("successMessage")).toBeInTheDocument();
});
