import React, { useState } from "react";
import { CustomModal } from "./CustomModal";

export const Modalnew = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const toggleModal1 = () => {
    setIsOpen1((prev) => !prev);
  };

  const toggleModal2 = () => {
    setIsOpen2((prev) => !prev);
  };

  const toggleModal3 = () => {
    setIsOpen3((prev) => !prev);
  };

  const handleClose1 = () => {
    setIsOpen1(false);
  };

  const handleClose2 = () => {
    setIsOpen2(false);
  };

  const handleClose3 = () => {
    setIsOpen3(false);
  };

  const handleConfirm = () => {
    console.log("Confirmed");
    setIsOpen3(false);
  };

  return (
    <div>
      <button onClick={toggleModal1}>Modal with title and text</button>
      <br />
      <br />
      <CustomModal
        isOpen={isOpen1}
        onClose={handleClose1}
        title="Example Modal 1"
        text="This is an example modal. You can add your custom text here."
      />
      <button onClick={toggleModal2}>Modal With title</button>
      <br />
      <br />
      <CustomModal
        isOpen={isOpen2}
        onClose={handleClose2}
        title="Example Modal 2"
      />
      <button onClick={toggleModal3}>Modal with title, text & button</button>
      <br />
      <CustomModal
        isOpen={isOpen3}
        onClose={handleClose3}
        title="Example Modal 3"
        text="This is an example modal. You can add your custom text here."
        buttons={{ label: "Confirm", onClick: handleConfirm }}
      />
    </div>
  );
};
