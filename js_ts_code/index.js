var calculator = document.getElementsByClassName("calculator")[0];
var keys = calculator.getElementsByClassName("calculator__keys")[0];
var display = document.getElementsByClassName("calculator__display")[0];
keys.addEventListener("click", function (event) {
    var target = event.target;
    if (target.matches("button")) {
        var action = target.dataset.action;
        var keyContent = target.innerText.split(/\s+/).join("");
        var displayedNum = display.innerText.split(/\s+/).join("");
        if (!action) {
            if (displayedNum === "0") {
                display.textContent = keyContent;
            }
            else {
                display.textContent = displayedNum + keyContent;
            }
        }
        console.log(action);
        console.log(keyContent);
        console.log(displayedNum);
    }
});
