const equalBtn = document.querySelector('.equal-btn');
const numberBtns = document.querySelectorAll('.numbers-row button');
const numberBtnsArray = Array.from(numberBtns);
const operatorBtns = document.querySelectorAll('.operators-container button');
const operatorBtnsArray = Array.from(operatorBtns);
const calculatorScreen = document.querySelector('.screen-calculator');
const clearBtn = document.querySelector('.clear-button');
const deleteBtn = document.querySelector('.delete-button');
const dotBtn = document.querySelector('.dot-button');

let numberOne;
let operator;
let numberTwo;

equalBtn.addEventListener('click', () => operate(numberOne, operator, numberTwo));

numberBtns.forEach(numberBtn => {
    numberBtn.addEventListener('click', () => {
        const enteredNum = parseInt(numberBtn.textContent)
        if (operator === undefined) {
            if (numberOne === undefined) {
                numberOne = enteredNum;
                calculatorScreen.textContent = numberOne;
            }
            else {
                numberOne = updateNumber(numberOne, enteredNum);
                calculatorScreen.textContent += "" + enteredNum;
            }
        }
        else {
            if (numberTwo === undefined) {
                numberTwo = enteredNum;
                calculatorScreen.textContent += numberTwo;
            }
            else {
                numberTwo = updateNumber(numberTwo, enteredNum);
                calculatorScreen.textContent += "" + enteredNum;
            }
        }
    })
});
clearBtn.addEventListener('click', clearCalculatorScreen);
deleteBtn.addEventListener('click', deleteOne)

operatorBtnsArray.forEach(operatorBtn => {
    operatorBtn.addEventListener('click', () => {
        const operatorType = operatorBtn.textContent;
        if (operatorType != '=' && operatorType != 'clear' && operatorType != 'X') {
            operator = operatorType;
            calculatorScreen.textContent += operatorType;
        }
    });
});
function clearCalculatorScreen() {
    numberOne = undefined;
    numberTwo = undefined;
    operator = undefined;
    calculatorScreen.textContent = "";
}
function deleteOne() {
    const calculatorScreenText = calculatorScreen.textContent;
    if (calculatorScreenText != '') {
        if (numberTwo != undefined) {
            if (numberTwo < 10) {
                numberTwo = undefined;
                calculatorScreen.textContent = calculatorScreenText.slice(0, calculatorScreenText.length - 1);
            }
            else {
                const digit = parseInt((numberTwo + "").slice((numberTwo + "").length - 1, (numberTwo + "").length));
                numberTwo = parseInt(numberTwo / 10);
                calculatorScreen.textContent = calculatorScreenText.slice(0, calculatorScreenText.length - 1);

            }
        }
        else if (operator!=undefined){
            operator = undefined;
            calculatorScreen.textContent = calculatorScreenText.slice(0, calculatorScreenText.length - 1);
        }
        else {
            if (numberOne < 10) {
                numberOne = undefined;
                calculatorScreen.textContent = calculatorScreenText.slice(0, calculatorScreenText.length - 1);
            }
            else {
                const digit = parseInt((numberOne + "").slice((numberOne + "").length - 1, (numberOne + "").length));
                numberOne = parseInt(numberOne / 10);
                calculatorScreen.textContent = calculatorScreenText.slice(0, calculatorScreenText.length - 1);
            }
        }
    }

}

function updateNumber(number, digit) {
    number = number * 10 + digit;
    return number;
}
function operate(a, op, b) {

    if (a === undefined || b === undefined || op === undefined) {
        calculatorScreen.textContent = "Syntax Error";
        return "Syntax Error";
    }

    let result;
    if (op == '+') result = add(a, b);
    if (op == '-') result = subtract(a, b);
    if (op == '*') result = multiply(a, b);
    if (op == '/') result = divide(a, b);
    if (op == '^') result = power(a, b);
    calculatorScreen.textContent = result;
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