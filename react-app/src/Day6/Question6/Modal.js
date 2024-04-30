import React from "react";
import "./Modal.css";

export const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleClose = () => {
    onClose();
  };

  return (
    <>
    {isOpen && (
      <div className="modal-overlay">
        <div className="modal-content">
          <button className="close-btn" onClick={handleClose}>
            Close
          </button>
          <h2>Modal Content</h2>
          <p>This is a demo modal content. Write your content.</p>
        </div>
      </div>
    )}
  </>
  );
};
