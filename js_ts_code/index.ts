enum Action {
    decimal = "decimal",
    clear = "clear",
    calculate = "calculate",
    add = "add",
    subtract = "subtract",
    multiply = "multiply",
    divide = "divide",
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

        if (action === Action.add || action === Action.subtract || action === Action.multiply || action === Action.multiply) {
            target.classList.add("is-depressed");
        }

        console.log(action);
        console.log(keyContent);
        console.log(displayedNum);
    }
});
