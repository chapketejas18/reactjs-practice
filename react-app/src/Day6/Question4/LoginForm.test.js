import { fireEvent, render, screen } from "@testing-library/react";
import { LoginForm } from "./LoginForm";

describe("User Login Form", () => {
  test("Should render Login Form component correctly", () => {
    render(<LoginForm />);
    const element = screen.getByText("Login Form");
    expect(element).toBeInTheDocument();
  });
});

test("Should username and password fields  of component to be fillied", () => {
  render(<LoginForm />);
  const usernameInput = screen.getByTestId("username");
  const passwordInput = screen.getByTestId("password");

  fireEvent.change(usernameInput, { target: { value: "user" } });
  fireEvent.change(passwordInput, { target: { value: "pass" } });
});

test("Submit button should click on component correctly", () => {
  render(<LoginForm />);
  const submitButton = screen.getByText("Submit");
  fireEvent.click(submitButton);
  const checkMessage = screen.getByText("Submitted sucessfully....");
  expect(checkMessage).toBeInTheDocument();
});
