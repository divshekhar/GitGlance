chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed");

  // set the initial value for extension
  chrome.storage.sync.set({ enabled: true }, () => {
    setContextMenu();
  });
});

function setContextMenu() {
  const contextMenu: chrome.contextMenus.CreateProperties = {
    id: "glance",
    title: "Glance",
    contexts: ["link"],
    targetUrlPatterns: ["*://github.com/*/blob/*", "*://github.com/*/tree/*"]
  };

  // Add context menu
  chrome.contextMenus.create(contextMenu);
  chrome.contextMenus.onClicked.addListener((info, tab) => clickHandler(info, tab!));
}

function clickHandler(info: chrome.contextMenus.OnClickData, tab: chrome.tabs.Tab) {
  console.log("Glance ", info.linkUrl);

  // Send message to content script
  chrome.tabs.sendMessage(tab.id!, { url: info.linkUrl }, (response) => {
    console.log("Response: ", response);
  });
}

// Listen for changes in storage and update context menu
chrome.storage.onChanged.addListener((changes, namespace) => {
  if (namespace === "sync") {
    if (changes.enabled) {
      if (changes.enabled.newValue) {
        setContextMenu();
      } else {
        chrome.contextMenus.removeAll();
      }
    }
  }
});
