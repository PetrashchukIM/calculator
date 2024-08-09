var Action;
(function (Action) {
    Action["decimal"] = "decimal";
    Action["clear"] = "clear";
    Action["calculate"] = "calculate";
    Action["add"] = "add";
    Action["subtract"] = "subtract";
    Action["multiply"] = "multiply";
    Action["divide"] = "divide";
    Action["is_click_operator"] = "is_click_operator";
})(Action || (Action = {}));
var calculator = document.getElementsByClassName("calculator")[0];
var keys = calculator.getElementsByClassName("calculator__keys")[0];
var display = document.getElementsByClassName("calculator__display")[0];
keys.addEventListener("click", function (event) {
    var target = event.target;
    if (target.matches("button")) {
        var action = target.dataset.action;
        var keyContent = target.innerText.split(/\s+/).join("");
        var displayedNum = display.innerText.split(/\s+/).join("");
        var previousKeyType = calculator.dataset.previousKeyType;
        if (!action) {
            if (displayedNum === "0") {
                display.textContent = keyContent;
            }
            else {
                display.textContent = displayedNum + keyContent;
            }
        }
        if (action === Action.decimal) {
            if (displayedNum.indexOf(".") === -1) {
                display.textContent = displayedNum + ".";
            }
        }
        if (action === Action.add || action === Action.subtract || action === Action.multiply || action === Action.divide) {
            calculator.dataset.previousKeyType = action;
            calculator.dataset.firstValue = displayedNum;
            display.textContent = "0";
        }
        if (action === Action.calculate) {
            var firstValue = Number(calculator.dataset.firstValue);
            var operator = calculator.dataset.previousKeyType;
            var secondValue = Number(displayedNum);
            display.textContent = calculate(firstValue, operator, secondValue);
            clearAll();
        }
        if (action === Action.clear) {
            display.textContent = "0";
            clearAll();
        }
    }
});
function clearAll() {
    delete calculator.dataset.previousKeyType;
    delete calculator.dataset.previousKeyType;
    delete calculator.dataset.firstValue;
}
function calculate(n1, operator, n2) {
    var result = 0;
    if (operator === Action.add) {
        result = n1 + n2;
    }
    else if (operator === Action.subtract) {
        result = n1 - n2;
    }
    else if (operator === Action.multiply) {
        result = n1 * n2;
    }
    else if (operator === Action.divide) {
        result = n1 / n2;
    }
    return result.toString();
}
