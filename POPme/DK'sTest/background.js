// When the chrome extension button is clicked, execute
chrome.browserAction.onClicked.addListener(function () {
	function openWin() {
		myWindow = window.open("popped-page.html", "", "width=880, height=520");
	}
	openWin();
	window.location.href = "popped-page.html";

	// Opens a new window of the given url
    // chrome.windows.create({ url: chrome.runtime.getURL("popped-page.html") });
});

/* Windows on top function 'currently does not work'
chrome.windows.getCurrent(function(window){
    chrome.windows.update(window.id,{top:0,left:0,width:screen.width,height:100})
});
*/

/*
chrome.app.window.create('window.html', {
  alwaysOnTop: true,
}, function (appWindow) {
  // Window created and will remain on top of others.

  // Change the property programmatically via:
  //appWindow.setAlwaysOnTop();
});

*/