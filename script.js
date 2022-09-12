let n1 = [];
let n2 = [];
let num1 = 0;
let num2 = 0;
let currentNum;
let operator = null;

//States
let n1State = true;
let n2State = false;
let opState = false;

function add (n1, n2) {
    return n1 + n2;
}

function sub(n1, n2) {
    return n1-n2;
}

 function div(n1, n2) {
    return n1 / n2;
 }

 function mul(n1, n2) {
    return n1 * n2;
 }

 function operate(operator, n1, n2) {
    switch(operator) {
        case "+":
            return add(n1,n2);
        case "/":
            return div(n1,n2);
        case "*":
            return mul(n1,n2);
        case "-":
            return sub(n1,n2);
        default:
            alert("Something has gone wrong");
    }
 }

function convertToDigit(number) {
    return Number(number.join(""));
}

function extraOpsEvent(event) {
    console.log(event.target.id);
    switch(event.target.id) {
        case "abs":
            if (n1 && n2.length == 0) {
                num1 = num1 * -1;
                n1 = Array.from(String(num1), Number);
                console.log(num1 + " num1 " + n1 + "    n1");
                document.getElementById("display").innerHTML = num1;
            } else {
                num2 = num2 * -1;
                n2 = Array.from(String(num2), Number);
                document.getElementById("display").innerHTML = num2;
            }
            break;
        case "clear":
            n1 = [];
            n2 = [];
            num1 = 0;
            num2 = 0;
            n1State = true;
            n2State = false;
            opState = false;
            document.getElementById("display").innerHTML = num1;
            break;
        case "pi":
            if (n1State) {
                num1 = Math.PI;
                n1 = Array.from(String(num1), Number);
                document.getElementById("display").innerHTML = num1;
            } else {
                num2 = Math.PI;
                n2 = Array.from(String(num2), Number);
                document.getElementById("display").innerHTML = num2;
            }
            break;
        case ".":
            let n = num1 % 1;
            let m = num2 % 1;
            if (n1State) {
                let n = num1 % 1;
                if (n != 0) {
                    console.log("Already a decimal");
                } else {
                    n1.push(".");
                    console.log(n1);
                }

            } else {
                let m = num2 % 1;
                if (m != 0) {
                    console.log("Already a decimal");
                } else {
                    n2.push(".");
                    console.log(n2);
                }
            }
            break;
        default:
            console.log("Issue arose");
    }
}


function getValue(event) {
    let val = event.target.className;

    if (val == "num" && n1State) {
        // document.getElementById("display").innerHTML = num1;
        n1.push(parseInt(event.target.id));
        console.log(n1);
        num1 = convertToDigit(n1);
        document.getElementById("display").innerHTML = num1;
    } else if (val == "operator" && n1State && !n2State) {
        operator = event.target.id;
        n1State = false;
        n2State = opState = true;
        console.log("This is the operator: " + event.target.id);
    } else if (val == "operator" && opState && n2.length == 0) {
        oldOp = operator;
        operator = event.target.id;
        console.log("old op: " + oldOp + " new op: " + operator);
    } else if (val == "num" && !n1State && n2State) {
        n2.push(parseInt(event.target.id));
        console.log(n2);
        num2 = convertToDigit(n2);
        document.getElementById("display").innerHTML = num2;
    } else if (val == "operator" && /*event.target.id == "=" &&*/  !n1State && n2State && n2.length != 0) {
        console.log("Triggered option to display solution");
        console.log("operator: " + operator + " dig1: " + num1 + " dig2: "+ num2);
        currentNum = operate(operator,num1,num2);
        console.log(currentNum);
        document.getElementById("display").innerHTML = currentNum;

        n2 = []
        num2 = 0;
        n1 = Array.from(String(currentNum), Number);
        // console.log(Math.abs(currentNum) + " abs" + "current: " + currentNum);
        num1 = currentNum;
        operator = event.target.id;

        n1State = false;
        n2State = true;
        opState = true;
    }
    console.log("num1: " + num1 + " num2: " + num2 + " operator:" + operator + " n1: " + n1 + " n2: " + n2);
    console.log("States - opState: " + opState + " n1State: " + n1State + " n2State: " + n2State);
 }
 
 document.getElementById("display").innerHTML = num1;
 let calcDiv = document.querySelectorAll(".calc-numbers > div");

 for (let i = 0; i < calcDiv.length; i++) {
    calcDiv[i].addEventListener('click', getValue);
 }

 let extraOps = document.querySelectorAll(".extra");
 for (let i = 0; i < extraOps.length; i++ ) {
    extraOps[i].addEventListener('click', extraOpsEvent);
 }

 console.log(extraOps);

