
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

 function clear() {
    n1 = null;
    n2 = null;
    operate = null;
 }


 function getValue(event) {
    let val = event.target.className;
    console.log(val);
    if (val == "num")
        document.getElementById("display").innerHTML = event.target.id;
 }

 let num1, num2;
 let operator;

 let calcDiv = document.querySelectorAll(".calc-numbers > div");

 for (let i = 0; i < calcDiv.length; i++) {
    // console.log(calcDiv[i].attributes.alt.nodeValue);

    calcDiv[i].addEventListener('click', getValue);
    // calcDiv[i].addEventListener('click', event => {
        
    //     let val = event.target.title;
    //     console.log(val);
    //     if (!val)
    //         console.log("Value does not exist");
    //     // console.log(val);
        
    // });
 }

//  console.log(calcDiv);