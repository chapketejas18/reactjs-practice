import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ShowModal } from "./ShowModal";
import { Modal } from "./Modal";

describe("Show Modal dialog", () => {
  test("Should render Modal Form component correctly", () => {
    render(<ShowModal />);
    const element = screen.getByText("This is Modal example");
    expect(element).toBeInTheDocument();
  });
});

test("opens when isOpen is true", () => {
  render(<Modal isOpen={true} onClose={() => {}}></Modal>);

  const modalContent = screen.getByText("Modal Content");
  console.log(modalContent);
  const modalData = screen.getByText(
    "This is a demo modal content. Write your content."
  );
  expect(modalContent).toBeInTheDocument();
  expect(modalData).toBeInTheDocument();
});

test("closes when Close button is clicked", () => {
  const onCloseMock = jest.fn();

  render(<Modal isOpen={true} onClose={onCloseMock}></Modal>);

  const closeButton = screen.getByText("Close");
  fireEvent.click(closeButton);

  expect(onCloseMock).toHaveBeenCalled();
});
