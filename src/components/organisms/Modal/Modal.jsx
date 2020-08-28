import React from "react";
import ReactDOM from "react-dom";

import { Icon } from "../../atoms";

export function Modal({ isOpen, onClose, children }) {
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="Modal">
      <div ClassName="Modal__Container">
        <button onClick={onClose} className="Modal__CloseButton">
          <Icon svg="close" classes="svg-icon-close" title="Close" />
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("Modal")
  );
}
