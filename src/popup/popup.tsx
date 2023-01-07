import React from "react";
import Switch from "react-switch";

import "./popup.css";

export default function Popup() {
  const [enabled, setEnabled] = React.useState(true);

  // get the value from chrome storage
  chrome.storage.sync.get(["enabled"]).then((result) => {
    if (result.enabled != undefined) {
      setEnabled(result.enabled);
    }
  });

  function toggleSwitch() {
    setEnabled(!enabled);

    // store the value in chrome storage
    chrome.storage.sync.set({ enabled: !enabled });
  }

  return (
    <div className="popupContainer">
      <Switch onChange={toggleSwitch} checked={enabled} />
    </div>
  );
}
