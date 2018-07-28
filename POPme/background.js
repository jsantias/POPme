// When the chrome extension button is clicked, execute
chrome.browserAction.onClicked.addListener(function () {
	function openWin() {
		myWindow = window.open("popped-page.html", "", "width=880, height=480");
	}
	openWin();

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

<<<<<<< Updated upstream
*/
// Set up context menu at install time.
chrome.runtime.onInstalled.addListener(function() {
  var context = "selection";
  var title = "Search on blah blah";
  var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                     "id": "context" + context});  
  var child1_id = chrome.contextMenus.create({"title": "child1", "parentId": id, "contexts":[context],
                                     "id": "child1_id"}); 
  var child2_id = chrome.contextMenus.create({"title": "child2", "parentId": id, "contexts":[context],
                                     "id": "child2_id"}); 

});

// add click event
chrome.contextMenus.onClicked.addListener(onClickHandler);

// The onClicked callback function.
function onClickHandler(info, tab) {
  var sText = info.selectionText;
  var url = "https://www.google.com/search?q=" + encodeURIComponent(sText);  
  window.open(url, '_blank');
};

// Set up context menu at install time.
// chrome.runtime.onInstalled.addListener(function() {
//   var context = "selection";
//   var title = "Search on blah blah";
//   var id = chrome.contextMenus.create({"title": title, "contexts":[context],
//                                      "id": "context" + context});  
//   var child1_id = chrome.contextMenus.create({"title": "child1", "parentId": id, "contexts":[context],
//                                      "id": "child1_id"}); 
//   var child2_id = chrome.contextMenus.create({"title": "child2", "parentId": id, "contexts":[context],
//                                      "id": "child2_id"}); 

// });

// // add click event
// chrome.contextMenus.onClicked.addListener(onClickHandler);

// // The onClicked callback function.
// function onClickHandler(info, tab) {
//   var sText = info.selectionText;
//   var url = "https://www.google.com/search?q=" + encodeURIComponent(sText);  
//   window.open(url, '_blank');
// };
