
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