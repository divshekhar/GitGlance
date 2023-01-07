console.log("[GitGlance]: Content script loaded!");

// listen for message from the background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // create alert
  alert(request.url);

  // send response to background script
  sendResponse("Hello from the content script!");
});
