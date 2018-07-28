function getVidLink() {
    var linkFrontVar = "https://www.youtube.com/embed/";
    var nameValue = document.getElementById("uniqueID").value;
    var matchedVal = linkFrontVar.match(/watch?v=(.*)/);

    var fullLink = linkFrontVar + matchedVal[1];
    document.getElementById("demo").innerHTML = fullLink;
//    document.getElementById('videoLink').src = nameValue;
}
