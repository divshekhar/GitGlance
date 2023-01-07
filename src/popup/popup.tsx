import React from "react";
import Switch from "react-switch";

import "./popup.css";

export default function Popup() {
  const [checked, setChecked] = React.useState(true);

  // get the value from chrome storage
  chrome.storage.sync.get(["on"]).then((result) => {
    setChecked(result.on);
  });

  async function toggleSwitch() {
    setChecked(!checked);

    // store the value in chrome storage
    await chrome.storage.sync.set({ on: !checked });
  }

  return (
    <div className="popupContainer">
      <Switch onChange={toggleSwitch} checked={checked} />
    </div>
  );
}
