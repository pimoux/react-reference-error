import React from "react";

const ButtonItem = ({ button, addButton }) => {
  return (
    <button className="button-list__item" value={button.value} onClick={() => addButton(button)}>
      {button.label}
    </button>
  );
};

export default ButtonItem;
