let heading = document.getElementById("heading");
let input = document.getElementById("inputText");
let para = document.getElementById("para");

//change heading text 
document.getElementById("changeTextBtn").onclick= 
function () {
    heading.innerText = input.value;
};

//input change event 
input.onchange = function () {
    console.log("input changed:", input.value);
};

//change background color
document.getElementById("bgColorBtn").
addEventListener("click", function() {
    document.body.style.backgroundColor = "lightblue";
    document.body.style.fontFamily = "Arial";
});

//change font size of heading
document.getElementById("fontSizeBtn").
addEventListener("click", function() {
    fontsize +=2;
    heading.style.fontsize = fontsize + "px";
    heading.style.maxFontSize = "80px";
});

// show/ hide
let isvisible = true;

document.getElementById("toggleParaBtn").onclick = function () {
    if (isVisible) {
        para.style.display = "none";
        isVisible = false;
    }

};

// reset page 
document.getElementById("resetBtn").onclick = 
function () {
    onhover
};

//mouse hover event
heading.onmouseover = function (){
    heading.style.color = "red";
};