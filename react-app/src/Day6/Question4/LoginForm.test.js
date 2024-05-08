import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { LoginForm } from "./LoginForm";

describe("User Login Form", () => {
  test("Should render Login Form component correctly", () => {
    render(<LoginForm />);
    const element = screen.getByText("Login Form");
    expect(element).toBeInTheDocument();
  });

  test("Should display error message if username or password is not filled", () => {
    render(<LoginForm />);
    const submitButton = screen.getByText("Submit");
    fireEvent.click(submitButton);
    const errorMessage = screen.getByText(
      "Username and password are required."
    );
    expect(errorMessage).toBeInTheDocument();
  });

  test("Should submit form when both username and password fields are filled", () => {
    render(<LoginForm />);
    const usernameInput = screen.getByTestId("username");
    const passwordInput = screen.getByTestId("password");

    fireEvent.change(usernameInput, { target: { value: "user" } });
    fireEvent.change(passwordInput, { target: { value: "pass" } });

    const submitButton = screen.getByText("Submit");
    fireEvent.click(submitButton);

    const successMessage = screen.getByText("Submitted successfully....");
    expect(successMessage).toBeInTheDocument();
  });
});
