var timerValue = 0;
document.addEventListener('scroll', function (event) {
    timerValue = 0;
}, true);
document.addEventListener('mousedown', function (event) {
    timerValue = 0;
}, true);
document.addEventListener('mouseover', function (event) {
    timerValue = 0;
}, true);
document.addEventListener('click', function (event) {
    timerValue = 0;
}, true);
var x = setInterval(function () {
    if (timerValue == 300) {
        chrome.runtime.sendMessage({
            id: 2
        });
        alert("This tab is inactive for 5 minutes"); 
        timerValue = 0;
    } else {
        timerValue++;
    }
}, 1000);