chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.action === "executeContentScript") {
    // Get the current active tab
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      // Execute the content script in the active tab
      chrome.tabs.executeScript(tabs[0].id, { file: "contentScript.js" }, function() {
        console.log("Content script injected");
        sendResponse({ success: true });
      });
    });
  }
});


chrome.commands.onCommand.addListener(function(command) {
  if (command === "trigger_shortcut") {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      // Execute the content script in the active tab
      chrome.tabs.executeScript(tabs[0].id, { file: "contentScript.js" }, function() {
        console.log("Content script injected");
        sendResponse({ success: true });
      });
    });
  }
});