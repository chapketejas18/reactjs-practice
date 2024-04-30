import React, { useState } from "react";
import { Modal } from "./Modal";

export const ShowModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div>
      <h1>This is Modal example</h1>
      <button onClick={toggleModal}>Toggle Modal</button>
      <Modal isOpen={isModalOpen} onClose={toggleModal}></Modal>
    </div>
  );
};
