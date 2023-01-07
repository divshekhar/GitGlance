import React from "react";
import { createRoot } from "react-dom/client";
import Modal from "../modal/Modal";

console.log("[GitGlance]: Content script loaded!");

// listen for message from the background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // Open Modal
  const root = createRoot(document.body);
  root.render(<Modal />);

  // send response to background script
  sendResponse("Hello from the content script!");
});
