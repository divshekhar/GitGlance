chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed");

  const contextMenu: chrome.contextMenus.CreateProperties = {
    id: "glance",
    title: "Glance",
    contexts: ["link"],
    targetUrlPatterns: ["*://github.com/*/blob/*", "*://github.com/*/tree/*"]
  };

  // Add context menu
  chrome.contextMenus.create(contextMenu);
  chrome.contextMenus.onClicked.addListener((info, tab) => clickHandler(info, tab!));

  console.log("Context menu added");
});

function clickHandler(info: chrome.contextMenus.OnClickData, tab: chrome.tabs.Tab) {
  console.log("Glance ", info.linkUrl);

  // Send message to content script
  chrome.tabs.sendMessage(tab.id!, { url: info.linkUrl }, (response) => {
    console.log("Response: ", response);
  });
}
