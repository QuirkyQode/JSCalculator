let num = document.querySelectorAll(".num")
let ops = document.querySelectorAll(".op")
let display = document.querySelector(".display")
let clear = document.querySelector(".clear")
let back = document.querySelector(".back")
let equal = document.querySelector(".op-equal")
let neg = document.querySelector(".op-neg")
let dec = document.querySelector(".op-dec")


//  ["init", "op1", "final" ];
// ["nodec", "dec1", "dec2", "dec12"]
let decstate = "nodec"
let curstate = "init";
let negstate = false;
let op;


num.forEach((n) => {
    n.addEventListener('click', () => {
        if(curstate == "final") {
            curstate = "init"
            negstate = false
            decstate = "nodec"
            op = undefined;
            display.innerText = n.innerText
        }
        else {
            display.innerText = display.innerText+n.innerText
        }
   })
}
);

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
        let numfunc1;
        let numfunc2;
        switch (decstate) {
            case "nodec":
                numfunc1 = Number;
                numfunc2 = Number;
                break;
            case "dec1":
                numfunc1 = parseFloat;
                numfunc2 = Number;
                break;
            case "dec2":
                numfunc1 = Number;
                numfunc2 = parseFloat;
                break;
            case "dec12":
                numfunc1 = parseFloat;
                numfunc2 = parseFloat;
                break;
        }
        switch(op){
            case '+':
                display.innerText = numfunc1(vals[0]) + numfunc2(vals[1])
                break
            case '-':
                if (negstate == true) {
                    display.innerText = - Number(vals[1]) - Number(vals[2])
                }
                else {
                    display.innerText = Number(vals[0]) - Number(vals[1])
                }
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
    
});

dec.addEventListener('click', () => {
    if(curstate == "init" && decstate == "nodec") {
        display.innerText = display.innerText + "."
        decstate = "dec1"
    }
    else if(curstate == "op1" && (decstate == "nodec" || decstate == "dec1")) {
        display.innerText = display.innerText + "."
        if(decstate == "nodec") {
            decstate = "dec2"
        }
        else if (decstate == "dec1") {
            decstate = "dec12"
        }
    }
});

neg.addEventListener('click', () => {
    if (negstate == false && curstate != "final") {
        display.innerText = "-" + display.innerText
        negstate = true
    }
});

back.addEventListener('click', () => {
    display.innerText = display.innerText.slice(0, -1)
});

clear.addEventListener('click', () => {
    display.innerText = ""
    curstate = "final"
    negstate = false
});