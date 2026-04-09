let newheading = document.getElementById("heading");
newheading.textContent="DOM Manipulation in javascript";
newheading.style.color="red";
newheading.style.fontSize="50px";

let paragraph= document.getElementsByClassName("paragraph");
paragraph[0].innerHTML="<strong>this paragraph has been updated</strong>";