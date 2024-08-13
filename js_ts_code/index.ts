enum Action {
    decimal = "decimal",
    clear = "clear",
    calculate = "calculate",
    add = "add",
    subtract = "subtract",
    multiply = "multiply",
    divide = "divide",
    is_click_operator = "is_click_operator",
}

const calculator = document.getElementsByClassName("calculator")[0] as HTMLElement;
const keys = calculator.getElementsByClassName("calculator__keys")[0] as HTMLElement;
const display = document.getElementsByClassName("calculator__display")[0] as HTMLElement;

keys.addEventListener("click", (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (target.matches("button")) {
        const action = target.dataset.action;
        const keyContent = target.innerText.split(/\s+/).join("");
        const displayedNum = display.innerText.split(/\s+/).join("");
        const previousKeyType = calculator.dataset.previousKeyType;

        if (!action) {
            if (displayedNum === "0") {
                display.textContent = keyContent;
            } else {
                display.textContent = displayedNum + keyContent;
            }
        }

        if (action === Action.decimal) {
            if (displayedNum.indexOf(".") === -1) {
                display.textContent = displayedNum + ".";
            }
        }

       
    }
});

function clearAll(): void {
    delete calculator.dataset.previousKeyType;
    delete calculator.dataset.previousKeyType;
    delete calculator.dataset.firstValue;
}

function calculate(n1: number, operator: string, n2: number): string {
    let result: number = 0;

    if (operator === Action.add) {
        result = n1 + n2;
    } else if (operator === Action.subtract) {
        result = n1 - n2;
    } else if (operator === Action.multiply) {
        result = n1 * n2;
    } else if (operator === Action.divide) {
        result = n1 / n2;
    }
    return result.toString();
}
