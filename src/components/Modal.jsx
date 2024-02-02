import React from "react";
import { createPortal } from "react-dom";
import "../Styles/Modal.css";

const Modal = () => {
  return createPortal(
    <div className="modal">
      <h2 className="modal-header">It PC's Turn...</h2>
    </div>,
    document.body
  );
};

export default Modal;
