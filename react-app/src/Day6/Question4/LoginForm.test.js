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

    fireEvent.change(usernameInput, { target: { value: "tejas" } });
    fireEvent.change(passwordInput, { target: { value: "pass" } });

    const submitButton = screen.getByText("Submit");
    fireEvent.click(submitButton);

    const successMessage = screen.getByText("Submitted successfully....");
    expect(successMessage).toBeInTheDocument();
  });

  test("Should display error message for incorrect username or password", () => {
    render(<LoginForm />);
    const usernameInput = screen.getByTestId("username");
    const passwordInput = screen.getByTestId("password");

    fireEvent.change(usernameInput, { target: { value: "abc" } });
    fireEvent.change(passwordInput, { target: { value: "anfjfgn" } });

    const submitButton = screen.getByText("Submit");
    fireEvent.click(submitButton);

    const errorMessage = screen.getByText("Invalid username or password.");
    expect(errorMessage).toBeInTheDocument();
  });

  test("Should log out when logout button is clicked", () => {
    render(<LoginForm />);
    const usernameInput = screen.getByTestId("username");
    const passwordInput = screen.getByTestId("password");

    fireEvent.change(usernameInput, { target: { value: "tejas" } });
    fireEvent.change(passwordInput, { target: { value: "pass" } });

    const submitButton = screen.getByText("Submit");
    fireEvent.click(submitButton);

    const logoutButton = screen.getByText("Logout");
    fireEvent.click(logoutButton);

    const loginFormHeader = screen.getByText("Login Form");
    expect(loginFormHeader).toBeInTheDocument();
  });
});
