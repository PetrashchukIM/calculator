const calculator:Element = document.getElementsByClassName("calculator")[0];
const keys:Element = calculator.getElementsByClassName("calculator__keys")[0];

keys.addEventListener("click",  (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (target.matches("button")){
        console.log(target.innerText.split(/\s+/).join(''));
    }
});