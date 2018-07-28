// Set up context menu at install time.
chrome.runtime.onInstalled.addListener(function() {
  var context = "all";
  var title = "POP ME BABY!"; //change me before submitting
  var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                         "id": "context" + context});
});

// add click event
chrome.contextMenus.onClicked.addListener(onClickHandler);

//Function below selects the text
// The onClicked callback function.
function onClickHandler(info, tab) {
  var sText = info.selectionText;
  var url = "https://www.google.com/search?q=" + encodeURIComponent(sText);
  window.open(url, '_blank'); //opens in new tab
};
