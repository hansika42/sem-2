let heading = document.getElementById("heading");
let input = document.getElementById("userText");
let para = document.getElementById("para");

let fontsize = 32;

// change heading text
document.getElementById("changeTextBtn").onclick =
function () {
    heading.innerText = input.value;
};

// input change event
input.onchange = function () {
    console.log("input changed:", input.value);
};

// change background color
document.getElementById("bgColorBtn")
.addEventListener("click", function () {

    document.body.style.backgroundColor = "lightblue";
    document.body.style.fontFamily = "Arial";
});

// change font size
document.getElementById("fontSizeBtn")
.addEventListener("click", function () {

    fontsize += 2;
    heading.style.fontSize = fontsize + "px";
});

// show/hide paragraph
let isVisible = true;

document.getElementById("toggleBtn").onclick =
function () {

    if (isVisible) {
        para.style.display = "none";
        isVisible = false;
    } else {
        para.style.display = "block";
        isVisible = true;
    }
};

// reset page
document.getElementById("resetBtn").onclick =
function () {

    heading.innerText = "Welcome to My Page";
    document.body.style.backgroundColor = "#f4f4f4";
    heading.style.fontSize = "32px";
    heading.style.color = "black";
    para.style.display = "block";

    input.value = "";

    fontsize = 32;
    isVisible = true;
};

// mouse hover event
heading.onmouseover = function () {
    heading.style.color = "red";
};