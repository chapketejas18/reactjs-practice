import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { UserProfile } from "./UserProfile";

describe("User Profile Page", () => {
  test("Should render Login Form component correctly", () => {
    render(<UserProfile />);
    const element = screen.getByText("User Profile");
    expect(element).toBeInTheDocument();
  });
});

test("User profile information should correctly displayed on to component", () => {
  render(<UserProfile />);
  const userData = {
    name: "Tejas",
    username: "tejas18",
    gender: "Male",
    address: "Akola",
    contact: 9960733381,
  };

  render(<UserProfile {...userData} />);

  const fullName = screen.getByText(`Full Name:${userData.name}`);
  const username = screen.getByText(`Username:${userData.username}`);
  const gender = screen.getByText(`Gender:${userData.gender}`);
  const address = screen.getByText(`Address:${userData.address}`);
  const contactNO = screen.getByText(`Contact No:${userData.contact}`);

  expect(fullName).toBeInTheDocument();
  expect(username).toBeInTheDocument();
  expect(gender).toBeInTheDocument();
  expect(address).toBeInTheDocument();
  expect(contactNO).toBeInTheDocument();
});

test("Should display 'No data available for user profile.' when no data is provided", () => {
  render(<UserProfile />);
  const fullName = screen.getByText(`Full Name:`);
  const username = screen.getByText(`Username:`);
  const gender = screen.getByText(`Gender:`);
  const address = screen.getByText(`Address:`);
  const contactNO = screen.getByText(`Contact No:`);

  expect(fullName).toBeInTheDocument();
  expect(username).toBeInTheDocument();
  expect(gender).toBeInTheDocument();
  expect(address).toBeInTheDocument();
  expect(contactNO).toBeInTheDocument();
});
