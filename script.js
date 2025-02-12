const ButtonYes = document.querySelector(".yes");
const ButtonNo = document.querySelector(".no");

let change = ["Pls", "Sure", "Pls", "pls"];
let index = 0;

ButtonYes.addEventListener("click", function() {
     window.location.href = "final.html";
});

ButtonNo.addEventListener("click", function() {
     ButtonNo.textContent = change[index];
    index = (index + 1) % change.length;

    // Get current sizes
    let noWidth = ButtonNo.offsetWidth;
    let noHeight = ButtonNo.offsetHeight;
    let yesWidth = ButtonYes.offsetWidth;
    let yesHeight = ButtonYes.offsetHeight;

    // Shrink "No" button and its text
    if (noWidth > 30 && noHeight > 30) {
        ButtonNo.style.width = (noWidth - 5) + "px";
        ButtonNo.style.height = (noHeight - 5) + "px";
        ButtonNo.style.fontSize = (parseFloat(window.getComputedStyle(ButtonNo).fontSize) - 1) + "px"; // Reduce font size
    }

    // Grow "Yes" button
    ButtonYes.style.width = (yesWidth + 5) + "px";
    ButtonYes.style.height = (yesHeight + 5) + "px";

    // Hide "No" button when it becomes too small
    if (noWidth <= 30 || noHeight <= 30) {
        ButtonNo.style.display = "none";
    }
});

