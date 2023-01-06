// Add Context Menu when extension is installed
chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed");

  // create context menu
  const contextMenu: chrome.contextMenus.CreateProperties = {
    id: "glance",
    title: "Glance",
    contexts: ["link"]
  };

  // Add context menu
  chrome.contextMenus.create(contextMenu);
  chrome.contextMenus.onClicked.addListener((info, tab) => clickHandler(info, tab));
});

function clickHandler(info: chrome.contextMenus.OnClickData, tab?: chrome.tabs.Tab) {
  console.log("Glance ", info.linkUrl);
}
