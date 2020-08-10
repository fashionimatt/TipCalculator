// Get the modal
let modal = document.getElementById("myModal");

let modalContainer = document.querySelector(".modal-container");

let button = document.querySelector("#calculate");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

let text = document.querySelector("#modalText");

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    fadeOut(modal);
    fadeOut(modalContainer)
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        fadeOut(modal);
        fadeOut(modalContainer)
        modal.style.display = "none";
    }
}

function calculate() {
    let amount = document.querySelector("#billamt").value;
    let tipRatio = document.querySelector("#a2");
    let tipRatioV = tipRatio.options[tipRatio.selectedIndex].value;
    let personCnt = document.querySelector("#personamt").value;

    let result = (amount * tipRatioV) / personCnt;

    text.innerHTML = personCnt + "명이 " + result + "원을 결제해주시면 되겠습니다 :D";
}

button.addEventListener("click", function (e) {
    calculate();
    modal.style.display = "block";
    fadeIn(modal);
    fadeIn(modalContainer);
});

function fadeIn(target) {
    let level = 0;
    let inTimer = null;
    inTimer = setInterval(function () {
        level = fadeInAction(target, level, inTimer);
    }, 25);
}

function fadeInAction(target, level, inTimer) {
    level = level + 0.1;
    changeOpacity(target, level);
    if (level > 1) clearInterval(inTimer);
    return level;
}

function fadeOut(target) {
    let level = 1;
    let outTimer = null;
    outTimer = setInterval(function () {
        level = fadeOutAction(target, level, outTimer);
    }, 50);
}

function fadeOutAction(target, level, outTimer) {
    level = level - 0.1;
    changeOpacity(target, level);
    if (level < 0) {
        clearInterval(outTimer);
    }
    return level;
}

function changeOpacity(target, level) {
    let obj = target;
    obj.style.opacity = level;
    obj.style.MozOpacity = level;
    obj.style.KhtmlOpacity = level;
    obj.style.MsFilter = "'progid: DXImageTransform.Microsoft.Alpha(Opacity=" + (level * 100) + ")'";
    obj.style.filter = "alpha(Opacity=" + (level * 100) + ")";
}

