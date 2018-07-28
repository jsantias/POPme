// Get video src
//var videoTags = document.getElementsByTagName('video')
//for (var i = 0; i < videoTags.length; i++) {
//    alert(videoTags.item(i).currentSrc)
//}
//document.getElementById('video').onclick = function () {
//    alert('click!')
//}

//document.getElementById('btn2').oncontextmenu = function () {
//    alert('right click!')
//}
// Set up context menu at install time.
chrome.runtime.onInstalled.addListener(function () {
    var context = "video";
    var title = "Open video popover";
    var id = chrome.contextMenus.create({
        "title": title, "contexts": [context],
        "id": "context" + context
    });
});

// add click event
chrome.contextMenus.onClicked.addListener(popoverVideoHandler);

//Function below selects the text
// The onClicked callback function.
function onClickHandler(info, tab) {
    var sText = info.selectionText;
    var url = "https://www.google.com/search?q=" + encodeURIComponent(sText);
    window.open(url, '_blank'); //opens in new tab
};