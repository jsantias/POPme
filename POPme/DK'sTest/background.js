// When the chrome extension button is clicked, execute
chrome.browserAction.onClicked.addListener(function () {
	// Opens a new window of the given url
    chrome.windows.create({ url: chrome.runtime.getURL("newtab.html") });
});