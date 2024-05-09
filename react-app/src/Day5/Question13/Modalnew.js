import React, { useState } from "react";
import { CustomModal } from "./CustomModal";

export const Modalnew = () => {
  const [modalWithTextAndTitle, setModalWithTextAndTitle] = useState(false);
  const [modalWithTitle, setModalWithTitle] = useState(false);
  const [modalWithTextButtonsTitle, setModalWithTextButtonsTitle] =
    useState(false);

  const toggleModalWithTextAndTitle = () => {
    setModalWithTextAndTitle((prev) => !prev);
  };

  const toggleModalWithTitle = () => {
    setModalWithTitle((prev) => !prev);
  };

  const toggleModalWithTextButtonsTitle = () => {
    setModalWithTextButtonsTitle((prev) => !prev);
  };

  const handleConfirm = () => {
    console.log("Confirmed");
    setModalWithTextButtonsTitle(false);
  };

  return (
    <div>
      <button onClick={toggleModalWithTextAndTitle}>
        Modal with title and text
      </button>
      <br />
      <br />
      <CustomModal
        isOpen={modalWithTextAndTitle}
        onClose={toggleModalWithTextAndTitle}
        title="Example Modal 1"
        text="This is an example modal. You can add your custom text here."
      />
      <button onClick={toggleModalWithTitle}>Modal With title</button>
      <br />
      <br />
      <CustomModal
        isOpen={modalWithTitle}
        onClose={toggleModalWithTitle}
        title="Example Modal 2"
      />
      <button onClick={toggleModalWithTextButtonsTitle}>
        Modal with title, text & button
      </button>
      <br />
      <CustomModal
        isOpen={modalWithTextButtonsTitle}
        onClose={toggleModalWithTextButtonsTitle}
        title="Example Modal 3"
        text="This is an example modal. You can add your custom text here."
        buttons={{ label: "Confirm", onClick: handleConfirm }}
      />
    </div>
  );
};
