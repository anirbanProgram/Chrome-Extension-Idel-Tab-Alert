chrome.tabs.query({
    currentWindow: true
}, function (tabArray) {
    tabArray.forEach(element => {
        chrome.tabs.reload(element.id);
    });
});
chrome.runtime.onMessage.addListener( function (request, sender, sendResponse) {
    if (request.id == 2) {
        document.write('<audio id="player" src="alarm.mp3" >');
        document.getElementById('player').play();
    }
});