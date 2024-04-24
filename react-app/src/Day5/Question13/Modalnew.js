import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <div className="modal-content">{children}</div>
      </div>
    </div>,
    document.body
  );
};

const Modalnew = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <button onClick={toggleModal}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={toggleModal}>
        <h2>Modal</h2>
        <p>Hi there!!!!</p>
        <button onClick={toggleModal}>Close Modal</button>
      </Modal>
    </div>
  );
};

export default Modalnew;
