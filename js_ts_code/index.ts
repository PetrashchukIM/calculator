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

        console.log(action);
        console.log(keyContent);
        console.log(displayedNum);
    }
});
