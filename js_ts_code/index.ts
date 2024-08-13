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

        if (action === Action.add || action === Action.subtract || action === Action.multiply || action === Action.divide) {
            calculator.dataset.previousKeyType = action;
            calculator.dataset.firstValue = displayedNum;
            display.textContent = "0";
        }

        if (action === Action.calculate) {
            const firstValue: number = Number(calculator.dataset.firstValue);
            const operator: string = calculator.dataset.previousKeyType;
            const secondValue: number = Number(displayedNum);

            display.textContent = calculate(firstValue, operator, secondValue);

            clearAll();
        }
        if (action === Action.clear) {
            display.textContent = "0";
            clearAll();
        }
    }
});

