const equalBtn = document.querySelector('.equal-btn');
const numberBtns = document.querySelectorAll('.numbers-row button');
const numberBtnsArray = Array.from(numberBtns);
const operatorBtns = document.querySelectorAll('.operators-container button');
const operatorBtnsArray = Array.from(operatorBtns);

let numberOne;
let operator;
let numberTwo;

equalBtn.addEventListener('click', () => operate(numberOne, operator, numberTwo));

function operate(a, op, b) {

    if (a === undefined || b === undefined || op === undefined) {
        console.log("Syntax Error");
        return "Syntax Error";
    }

    let result;
    if (op == '+') result = add(a, b);
    if (op == '-') result = subtract(a, b);
    if (op == '*') result = multiply(a, b);
    if (op == '/') result = divide(a, b);
    if (op == '^') result = power(a, b);

    numberOne = result;
    operator = undefined;
    numberTwo = undefined;
}
// Mathematical functions
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b == 0) return "Math Error";
    return a / b;
}
function power(a, b) {
    return a ** b;
}
