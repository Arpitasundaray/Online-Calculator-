// Get the input box element
let input = document.getElementById('inputBox');

// Get all button elements
let buttons = document.querySelectorAll('button');

// Initialize an empty string to store the current input
let string = "";

// Convert the NodeList of buttons to an array
let arr = Array.from(buttons);

// Function to evaluate the expression
function evaluateExpression(expression) {
    // Replace all instances of '^' with '**' for exponentiation
    expression = expression.replace(/\^/g, '**');
    // Replace all instances of 'sqrt' with 'Math.sqrt'
    expression = expression.replace(/sqrt/g, 'Math.sqrt');
    // Evaluate the expression and return the result
    return eval(expression).toString();
}

// Function to handle button click
function handleButtonClick(e) {
    let value = e.target.innerHTML;

    // Handle the '=' button to evaluate the expression
    if (value === '=') {
        try {
            string = evaluateExpression(string);
        } catch (error) {
            string = "Error";
        }
        input.value = string;
    // Handle the 'AC' button to clear the input
    } else if (value === 'AC') {
        string = "";
        input.value = string;
    // Handle the 'DEL' button to delete the last character
    } else if (value === 'DEL') {
        string = string.slice(0, -1);
        input.value = string;
    // Handle the '^2' button to square the current input
    } else if (value === '^2') {
        // If the string contains an error, clear it first
        if (string === "Error") string = "";
        string += '**2';
        input.value = string;
    // Handle other buttons to update the input string
    } else {
        // If the string contains an error, clear it first
        if (string === "Error") string = "";
        string += value;
        input.value = string;
    }
}

// Add a click event listener to each button using a loop
for (let i = 0; i < arr.length; i++) {
    arr[i].addEventListener('click', handleButtonClick);
}
