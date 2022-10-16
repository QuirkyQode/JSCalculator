let num = document.querySelectorAll(".num")
let ops = document.querySelectorAll(".op")
let display = document.querySelector(".display")
let clear = document.querySelector(".clear")
let back = document.querySelector(".back")
let equal = document.querySelector(".op-equal")

num.forEach((n) => {
    n.addEventListener('click', () => {
        display.innerText = display.innerText+n.innerText
   })
}
);


ops.forEach((o) => {
    o.addEventListener('click', () => {
            display.innerText = display.innerText+o.innerText;
        })
   });

equal.addEventListener('click', () => {
    display.innerText = eval(display.innerText);
});

back.addEventListener('click', () => {
    display.innerText = display.innerText.slice(0, -1)
});

clear.addEventListener('click', () => {
    display.innerText = ""
});