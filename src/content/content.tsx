import React from "react";
import { createRoot } from "react-dom/client";
import Modal from "../modal/Modal";

console.log("[GitGlance]: Content script loaded!");

// listen for message from the background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // Open Modal
  const element = document.getElementById("repo-content-turbo-frame");
  const root = createRoot(element ?? document.body);
  root.render(<Modal url={request.url} />);

  // send response to background script
  sendResponse("Hello from the content script!");
});
