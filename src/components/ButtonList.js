import React from "react";
import ButtonItem from "./ButtonItem";

const ButtonList = ({ buttons, addButton }) => {
  return (
    <div className="button-list">
      {buttons.length > 0 &&
        buttons.map((button, i) => <ButtonItem button={button} addButton={addButton} key={i} />)}
    </div>
  );
};

export default ButtonList;
