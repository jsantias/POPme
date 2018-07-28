// When the chrome extension button is clicked, execute
chrome.browserAction.onClicked.addListener(function () {
	// Opens a new window of the given url
    chrome.windows.create({ url: chrome.runtime.getURL("popped-page.html") });
});


chrome.app.window.create('window.html', {
  alwaysOnTop: true,
}, function (appWindow) {
  // Window created and will remain on top of others.

  // Change the property programmatically via:
  //appWindow.setAlwaysOnTop();
});