let n1 = [];
let n2 = [];
let num1 = 0;
let operator = null;

//States
let n1State = false;
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
    let answer = 0;
    switch(operator) {
        case "add":
            answer = add(n1,n2);
            break;
        case "divide":
            answer = div(n1,n2);
            break;
        case "multiply":
            answer = mul(n1,n2);
            break;
        case "subtract":
            answer = sub(n1,n2);
            break;
        default:
            alert("Something has gone wrong");
    }
 }

function convertToDigit() {
    let ans;
    if (!n1State && !opState) {
        num1 = Number(n1.join(""));
        document.getElementById("display").innerHTML = num1;
    } else {
        num2 = Number(n2.join(""));
        document.getElementById("display").innerHTML = num2;
    }
    // num1 = Number(n1.join(""));
    // document.getElementById("display").innerHTML = num1;
}

function clear() {
    n1 = null;
    n2 = null;
    operate = null;
 }


 function getValue(event) {
    let val = event.target.className;

    if (val == "num" && !n1State) {
        // document.getElementById("display").innerHTML = num1;
        n1.push(event.target.id);
        console.log(n1);
        // console.log(num1);
    } else if (val == "operator" && !n1State && !n2State) {
        operator = event.target.id;
        n1State = true;
        opState = true;
        console.log("n1State: " + n1State + ". n1State expected: true");
        console.log("opState: " + opState + ". opState expected: true");
        console.log("This is the operator: " + event.target.id);

    } else if (val == "num" && n1State && !n2State) {
        n2.push(event.target.id);
        console.log(n2);
    }
 }
 
 document.getElementById("display").innerHTML = num1;
 let calcDiv = document.querySelectorAll(".calc-numbers > div");

 for (let i = 0; i < calcDiv.length; i++) {
    // console.log(calcDiv[i].attributes.alt.nodeValue);

    calcDiv[i].addEventListener('click', getValue);
    calcDiv[i].addEventListener('click', convertToDigit);
 }