let firstNumber, secondNumber, operator;
let displayValue;
const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');
const results = document.querySelector('.results');

buttons.forEach(button => button.addEventListener('click', () => {
    displayValue = button.className;
    results.textContent = displayValue;
    display.appendChild(results);
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
    return x / y;
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