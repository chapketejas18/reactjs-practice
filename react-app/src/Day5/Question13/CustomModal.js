import React from "react";
import { Modal, Button } from "@mui/material";
import "./Modal.css";

export const CustomModal = ({ isOpen, onClose, title, text, buttons }) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <div className="modal-overlay">
        <div className="modal">
          <Button className="close-button" onClick={onClose}>
            &times;
          </Button>
          {!!title && (
            <div className="modal-content">
              <h1>{title}</h1>
            </div>
          )}
          {!!text && (
            <div className="modal-content">
              <p>{text}</p>
            </div>
          )}
          {!!buttons && (
            <div className="modal-content">
              <Button onClick={buttons.onClick}>{buttons.label}</Button>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};
