import React from "react";
import ReactDOM from "react-dom";

import { Icon } from "../../atoms";

export function Modal({ isOpen, onClose, children }) {
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="Modal">
      <div className="Modal__Container">
        <button onClick={onClose} className="Modal__CloseButton">
          <Icon svg="close" classes="SvgIcon--Close" title="Close" />
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("Modal")
  );
}
