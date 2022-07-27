import React from "react";
import SelectedButtonItem from "./SelectedButtonItem";

const SelectedButtons = ({ buttons, removeButton }) => {
  return (
    <div className="selected-buttons-list">
      {buttons.length > 0 &&
        buttons.map((button, i) => <SelectedButtonItem button={button} key={i} removeButton={removeButton} />)}
    </div>
  );
};

export default SelectedButtons;
