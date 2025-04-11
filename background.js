// Create a context menu item when the extension is installed
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "downloadWithPloud",
    title: "دانلود نیم بها با Ploud.ir",
    contexts: ["link"]
  });
});

// Handle the context menu item click
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "downloadWithPloud") {
    // Get the link URL
    const linkUrl = info.linkUrl;
    
    // Create the Ploud.ir URL - using the correct format
    const ploudUrl = `https://ploud.ir/?=${linkUrl}`;
    
    // Open the Ploud.ir URL in a new tab
    chrome.tabs.create({ url: ploudUrl });
  }
});
