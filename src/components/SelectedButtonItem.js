import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SelectedButtonItem = ({ button, removeButton }) => {
  return (
    <div className="selected-button-item">
      button {button.label} selected&nbsp;&nbsp;
      <FontAwesomeIcon icon={faXmark} className="selected-cross" onClick={() => removeButton(button)} />
    </div>
  );
};

export default SelectedButtonItem;
