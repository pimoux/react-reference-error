import { useState } from "react";
import ButtonList from "./components/ButtonList";
import buttons from "./data/buttons";
import "./assets/style.css";
import SelectedButtons from "./components/SelectedButtons";

function App() {
  const [buttonList, setButtonList] = useState(buttons);

  const addButton = (button) => {
    let newButtons = [...buttonList];
    const buttonIndex = newButtons.findIndex((b) => b.value === button.value);
    newButtons[buttonIndex].selected = true;
    setButtonList(newButtons);
  };

  const removeButton = (button) => {
    let newButtons = Array.from(buttonList);
    const buttonIndex = newButtons.findIndex((b) => b.value === button.value);
    newButtons[buttonIndex].selected = false;
    setButtonList(newButtons);
  }

  return (
    <div className="App">
      <ButtonList
        buttons={buttonList.filter((button) => !button.selected)}
        addButton={addButton}
      />
      <p className="selected-values-title">Selected values:</p>
      <SelectedButtons
        buttons={buttonList.filter((button) => button.selected)}
        removeButton={removeButton}
      />
    </div>
  );
}

export default App;
