var clickCount = 0;
var totalClickCount = 0;
var showClicks = document.getElementById("showClicks");

function changeStyle() {
    var list = document.getElementById("list");
    var showClicks = document.getElementById("showClicks");
    clickCount++;
    totalClickCount++;
    showClicks.innerHTML = totalClickCount;

    if (clickCount == 1) {
        list.style.fontSize = "20px";
    }
    if (clickCount == 2) {
        list.style.fontSize = "24px"
    }
    if (clickCount == 3) {
        list.style.fontSize = "28px";
    }
    if (clickCount == 4) {
        list.style.fontSize = "32px";
    }
    if (clickCount == 5) {
        list.style.fontSize = "20px";
    }

}