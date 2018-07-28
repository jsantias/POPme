// Set up context menu at install time.
chrome.runtime.onInstalled.addListener(function() {
  // var context = "all";
  var title = "POP ME BABY!"; //change me before submitting
  var id = chrome.contextMenus.create({"title": title, "contexts": "picture",
                                         "id": "context" + context});  
  //more options for the context menu
  var option1 = chrome.contextMenus.create({"title": "Video", "parentId": id, "contexts":"picture",
                                     "id": "videoOption"}); 
  var option2 = chrome.contextMenus.create({"title": "Picture", "parentId": id, "contexts":[context],
                                     "id": "pictureOption"}); 
  var option3 = chrome.contextMenus.create({"title": "Whole page", "parentId": id, "contexts":[context],
                                     "id": "pageOption"}); 
  var option4 = chrome.contextMenus.create({"title": "Selected Text", "parentId": id, "contexts":[context],
                                     "id": "textOption"}); 
});

// add click event
chrome.contextMenus.onClicked.addListener(onClickHandler);

//Function below selects the text
// The onClicked callback function.
function onClickHandler(info, tab) {
  if (!info || typeof info.menuItemId === 'undefined') {
    return;
  }
  else {
    if (info.menuItemId === 'videoOption') {
      console.log("video selected");
    }
    if (info.menuItemId === 'pictureOption') {
      console.log("picture selected");
    }
    if (info.menuItemId === 'pageOption') {
      console.log("page selected");
    }
    if (info.menuItemId === 'textOption') {
      console.log("text selected");
    }
  }
  

  //if video, collect url
  // if (){
  //   var url = "https://www.google.com/search?q=" + encodeURIComponent(sText);  
  //   window.open(url, '_blank'); //opens in new tab
  // }

    
  

  //if picture, collect picture

  //if whole page, get the page' url

  //if selected text
  // var sText = info.selectionText;
  // var url = "https://www.google.com/search?q=" + encodeURIComponent(sText);  
  // window.open(url, '_blank'); //opens in new tab
};
