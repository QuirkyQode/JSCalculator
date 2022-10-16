let num = document.querySelectorAll(".num")
let ops = document.querySelectorAll(".op")
let display = document.querySelector(".display")
let clear = document.querySelector(".clear")
let back = document.querySelector(".back")
let equal = document.querySelector(".op-equal")
let neg = document.querySelector(".op-neg")

num.forEach((n) => {
    n.addEventListener('click', () => {
        if(curstate == "final") {
            curstate = "init"
            display.innerText = n.innerText
        }
        else {
            display.innerText = display.innerText+n.innerText
        }
   })
}
);

//  ["init", "op1", "op", "dec", "final" ];
let curstate = "init";
let op;
ops.forEach((o) => {
    o.addEventListener('click', () => {
        if(curstate == "init") {
            display.innerText = display.innerText+o.innerText;
            op = o.innerText;
            curstate = "op1"
        }
   })
}
);

equal.addEventListener('click', () => {
    if(op != undefined) {
        vals = display.innerText.split(op);
        console.log(vals);
        switch(op){
            case '+':
                display.innerText = Number(vals[0]) + Number(vals[1])
                break
            case '-':
                display.innerText = Number(vals[0]) - Number(vals[1])
                break;
            case '÷':
                display.innerText = Number(vals[0]) / Number(vals[1])
                break;
            case 'x':
                display.innerText = Number(vals[0]) * Number(vals[1])
                break;
        }
    }
    curstate = "final"
    op = undefined;
});

back.addEventListener('click', () => {
    display.innerText = display.innerText.slice(0, -1)
});

clear.addEventListener('click', () => {
    display.innerText = ""
});