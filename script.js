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
    // let answer = 0;
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

// function convertToDigit() {
//     if (!n1State && !opState) {
//         num1 = Number(n1.join(""));
//         document.getElementById("display").innerHTML = num1;
//     } else  if (!n2State){
//         num2 = Number(n2.join(""));
//         document.getElementById("display").innerHTML = num2;
//     } else {
//         document.getElementById("display").innerHTML = currentNum;
//     }
// }

function convertToDigit(number) {
    return Number(number.join(""));
}

function clear() {
    // n1 = ;
    n2 = [];
    num2 = 0;
    n1 = currentNum;


    n1State = false;
    n2State = false;
    opState = false;
    operate = null;
 }


 function getValue(event) {
    let val = event.target.className;

    if (val == "num" && n1State) {
        // document.getElementById("display").innerHTML = num1;
        n1.push(event.target.id);
        console.log(n1);
        num1 = convertToDigit(n1);
        document.getElementById("display").innerHTML = num1;
        // console.log(num1);
    } else if (val == "operator" && n1State && !n2State) {
        operator = event.target.id;
        n1State = false;
        n2State = opState = true;
        // console.log("n1State: " + n1State + ". n1State expected: true");
        // console.log("opState: " + opState + ". opState expected: true");
        console.log("This is the operator: " + event.target.id);

    } else if (val == "operator" && opState && n2.length == 0) {
        oldOp = operator;
        operator = event.target.id;

        console.log("old op: " + oldOp + " new op: " + operator);
    } else if (val == "num" && !n1State && n2State) {
        n2.push(event.target.id);
        console.log(n2);
        num2 = convertToDigit(n2);
        document.getElementById("display").innerHTML = num2;
    } else if (val == "operator" && /*event.target.id == "=" &&*/  !n1State && n2State && n2.length != 0) {
        console.log("Triggered option to display solution");
        // let dig1 = Number(n1.join(""));
        // let dig2 = Number(n2.join(""));

        // n2State = false;
        
        // console.log(event.target.id);
        // operate(operator,n1,n2);
        console.log("operator: " + operator + " dig1: " + num1 + " dig2: "+ num2);
        currentNum = operate(operator,num1,num2);
        console.log(currentNum);
        // clear();
        document.getElementById("display").innerHTML = currentNum;

        n2 = []
        num2 = 0;
        num1 = currentNum;
        n1State = true;
        n2State = false;
        opState = false;
    }
    console.log("num1: " + num1 + " num2: " + num2 + " operator:" + operator + " n1: " + n1 + " n2: " + n2);
    console.log("States - opState: " + opState + " n1State: " + n1State + " n2State: " + n2State);
 }
 
 document.getElementById("display").innerHTML = num1;
 let calcDiv = document.querySelectorAll(".calc-numbers > div");

 for (let i = 0; i < calcDiv.length; i++) {
    // console.log(calcDiv[i].attributes.alt.nodeValue);

    calcDiv[i].addEventListener('click', getValue);
    // calcDiv[i].addEventListener('click', convertToDigit);
 }