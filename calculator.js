let firstNumber = undefined;
let secondNumber = undefined;
let operator = undefined;
let input;
let dot = false;

const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');
const results = document.querySelector('.results');

buttons.forEach(button => button.addEventListener('click', () => {
    input = button.className;
    evaluateInput(input);
}));

function add(x,y) {
    return x + y;
};

function subtract(x,y) {
    return x - y;
};

function multiply(x,y) {
    return x * y;
};

function divide(x,y) {
    if (y !== 0) {
        return x / y;
    } else {
        return "FORBIDDEN!"
    }
};

function operate(operator, x, y) {
    if (operator == 'add') {
        return add(x,y);
    } else if (operator == 'subtract') {
        return subtract(x,y);
    } else if (operator == 'multiply') {
        return multiply(x,y);
    } else if (operator == 'divide') {
        return divide(x,y);
    } else {
        return 'ERROR';
    };
};

function evaluateInput(input) {
    if (input === 'add' || input === 'subtract' || input === 'multiply' || 
        input === 'divide') {
        operator = input;

        if (firstNumber !== undefined && secondNumber !== undefined) {
            firstNumber = operate(operator, firstNumber, secondNumber);
            secondNumber = undefined;
            results.textContent = firstNumber;
        } else {
            return;
        };
    } else if (input === "clear") {
        firstNumber = undefined;
        secondNumber = undefined;
        operator = undefined;
        dot1 = false;
        dot2 = false;
        results.textContent = "HELLO";
    } else if (input === "equals") {
        if (firstNumber === undefined || secondNumber === undefined || operator === undefined) {
            return; // do nothing
        } else { 
            firstNumber = operate(operator, firstNumber, secondNumber);
            if (firstNumber%1 !== 0) {
                firstNumber = Number((firstNumber).toFixed(5));
            }
            secondNumber = undefined;
            operator = undefined;
            results.textContent = firstNumber;
        };
    } 
    else if (firstNumber !== undefined && !operator && input === "dot") {
        dot = true;
        firstNumber += ".";
        results.textContent = firstNumber;
    } else if (secondNumber !== undefined && operator && input === "dot") {
        dot = true;
        secondNumber += ".";
        results.textContent = secondNumber;
    } else if (dot) { // handling floats
        if (firstNumber === undefined) {
            input = parseFloat(input);
            firstNumber = input;
        } else if (operator === undefined) { // selecting numbers greater than 9
            firstNumber = String(firstNumber);
            firstNumber = firstNumber + input;
            firstNumber = parseFloat(firstNumber);
            input = firstNumber;
        } else if (secondNumber !== undefined) {
            secondNumber = String(secondNumber);
            secondNumber = secondNumber + input;
            secondNumber = parseFloat(secondNumber);
            input = secondNumber;
        } else {
            input = parseFloat(input);
            secondNumber = input;
        };
        results.textContent = input;
    } else { // handling integers
        if (firstNumber === undefined) {
            input = parseInt(input);
            firstNumber = input;
        } else if (operator === undefined) { // selecting numbers greater than 9
            firstNumber = String(firstNumber);
            firstNumber = firstNumber + input;
            firstNumber = parseInt(firstNumber);
            input = firstNumber;
        } else if (secondNumber !== undefined) {
            secondNumber = String(secondNumber);
            secondNumber = secondNumber + input;
            secondNumber = parseInt(secondNumber);
            input = secondNumber;
        } else {
            input = parseInt(input);
            secondNumber = input;
        };
        results.textContent = input;
    } 

    display.appendChild(results);
}