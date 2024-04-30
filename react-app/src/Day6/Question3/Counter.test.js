import { fireEvent, render, screen } from "@testing-library/react";
import { Counter } from "./Counter";

describe("Counter component", () => {
  test("should render Counter component correctly", () => {
    render(<Counter />);
    const element = screen.getByText("Counter");
    expect(element).toBeInTheDocument();
  });
});

test("Counter renders with initial count value is 0", () => {
  render(<Counter />);
  const count = screen.getByText("0");
  expect(count).toBeInTheDocument();
});

test("Increment counter when Increase button is clicked", () => {
  render(<Counter />);
  const incrementButton = screen.getByText("Increase");
  fireEvent.click(incrementButton);
  fireEvent.click(incrementButton);
  const count = screen.getByText("2");
  expect(count).toBeInTheDocument();
});

test("check count should be greter than 0 when Increase button is clicked", () => {
  render(<Counter />);
  const incrementButton = screen.getByText("Increase");
  fireEvent.click(incrementButton);
  const count = screen.getByTestId("showCount");
  expect(Number(count.textContent)).toBeGreaterThan(0);
});

test("Decrement counter when Decrease button is clicked", () => {
  render(<Counter />);
  const incrementButton = screen.getByText("Decrease");
  fireEvent.click(incrementButton);
  const count = screen.getByText("-1");
  console.log(count);
  expect(count).toBeInTheDocument();
});
