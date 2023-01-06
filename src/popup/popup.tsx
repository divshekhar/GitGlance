import React from "react";
import Switch from "react-switch";

import "./popup.css";

export default function Popup() {
  const [checked, setChecked] = React.useState(false);

  function toggleSwitch() {
    setChecked(!checked);
  }

  return (
    <div className="popupContainer">
      <Switch onChange={toggleSwitch} checked={checked} />
    </div>
  );
}
