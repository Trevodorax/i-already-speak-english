document.addEventListener('DOMContentLoaded', function() {
  const supportButton = document.getElementById('textAnswerButton');
  supportButton.addEventListener('click', function() {
    chrome.runtime.sendMessage({ action: "executeContentScript" }, function(response) {
      console.log("Content script executed");
    });
  });
});
