var calculator = document.getElementsByClassName("calculator")[0];
var keys = calculator.getElementsByClassName("calculator__keys")[0];
keys.addEventListener("click", function (event) {
    var target = event.target;
    if (target.matches("button")) {
        console.log(target.innerText.split(/\s+/).join(''));
    }
});
