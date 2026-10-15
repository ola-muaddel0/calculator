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
let numberOne;
let operand;
let numberTwo;

function operate(a, operator, b) {
    let result;
    if (operator === '+') result = add(a, b);
    if (operator === '-') result = subtract(a, b);
    if (operator === '*') result = multiply(a, b);
    if (operator === '/') result = divide(a, b);
    if (operator === '^') result = power(a, b);
}