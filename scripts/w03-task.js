/* Function Definitions */

// Function to perform addition
function add(number1, number2) {
    return number1 + number2;
}

// Function to perform subtraction
function subtract(subtract1, subtract2) {
    return subtract1 - subtract2;
}

// Function to perform multiplication
function multiply(factor1, factor2) {
    return factor1 * factor2;
}

// Function to perform division
function divide(dividend, divisor) {
    return dividend / divisor;
}

// Function to update the current year
function updateCurrentYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById("year").value = currentYear;
}

/* Event Listeners for Button Clicks */

document.querySelector("#addNumbers").addEventListener("click", () => {
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);
    document.querySelector("#sum").value = add(addNumber1, addNumber2);
});

document.querySelector("#subtractNumbers").addEventListener("click", () => {
    let subtract1 = Number(document.querySelector("#subtract1").value);
    let subtract2 = Number(document.querySelector("#subtract2").value);
    document.querySelector("#difference").value = subtract(subtract1, subtract2);
});

document.querySelector("#multiplyNumbers").addEventListener("click", () => {
    let factor1 = Number(document.querySelector("#factor1").value);
    let factor2 = Number(document.querySelector("#factor2").value);
    document.querySelector("#product").value = multiply(factor1, factor2);
});

document.querySelector("#divideNumbers").addEventListener("click", () => {
    let dividend = Number(document.querySelector("#dividend").value);
    let divisor = Number(document.querySelector("#divisor").value);
    document.querySelector("#quotient").value = divide(dividend, divisor);
});

/* Initialize Current Year */
updateCurrentYear();

/* ARRAY METHODS - Functional Programming */

const thisIsAnArray = [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13];
const arrayOutput = document.getElementById("array");

// Output original array
arrayOutput.textContent = thisIsAnArray.join(', ');

// Filter odd and even numbers
const odds = thisIsAnArray.filter(oddNumber => oddNumber % 2 !== 0);
const evens = thisIsAnArray.filter(evenNumber => evenNumber % 2 === 0);

document.getElementById("odds").textContent = odds.join(', ');
document.getElementById("evens").textContent = evens.join(', ');

// Calculate the sum of the original array
const sumOfArray = thisIsAnArray.reduce((summingNumber, number) => summingNumber + number, 0);
document.getElementById("sumOfArray").textContent = sumOfArray;

// Multiply each element by 2 and calculate the sum
const multipliedNumbers = thisIsAnArray.map(number => number * 2);
const sumOfMultiplied = multipliedNumbers.reduce((summingNumber, number) => summingNumber + number, 0);

document.getElementById("multiplied").textContent = multipliedNumbers.join(', ');
document.getElementById("sumOfMultiplied").textContent = sumOfMultiplied;
