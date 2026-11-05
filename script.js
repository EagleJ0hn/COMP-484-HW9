// ==========================
// Part 1: Date Display
// ==========================

// 1. Create a Date object
let today = new Date();

// 2. Get the current month, day, and year
let month = today.getMonth() + 1;
let day = today.getDate()
let year = today.getFullYear();


// 3. Adjust month if needed (JavaScript months are 0-based)
// 4. Add leading zeros to month/day if needed
month = String(month).padStart(2,"0");
day = String(day).padStart(2,"0");


// 5. Create a string in the format: "Today is MM/DD/YYYY"
let formattedDate = "Today is " + month + "/" + day + "/" + year;
// 6. Display the result in the element with id="dateOutput"
document.getElementById("dateOutput").textContent = formattedDate;


// ==========================
// Part 2: Number Conversion
// ==========================

// 1. Create at least 4 separate variables:
//    - at least 2 numeric strings (example: "42")
//    - at least 1 decimal string (example: "19.75")
//    - at least 1 non-numeric string (example: "hello")
let firstValue = "42";
let secondValue = "19";
let thirdValue = "19.75";
let fourthValue = "hello"

// 2. For EACH variable:
//
//    a. Convert the value using Number()
//    b. Check if it is NaN using Number.isNaN()
//    c. Check if it is an integer using Number.isInteger()
let firstNumber = Number(firstValue);
let secondNumber = Number(secondValue);
let thirdNumber = Number(thirdValue);
let fourthNumber = Number(fourthValue);

// 3. For EACH value, create a sentence showing:
//    - original value
//    - converted value
//    - whether it is NaN
//    - whether it is an integer
//
// Example format (you must create your own variables):
// "Original: '42' -> Converted: 42 -> isNaN: false -> isInteger: true"
let firstIsNaN = Number.isNaN(firstNumber);
let secondIsNaN = Number.isNaN(secondNumber);
let thirdIsNaN = Number.isNaN(thirdNumber);
let fourthIsNaN = Number.isNaN(fourthNumber);

let firstIsInteger = Number.isInteger(firstNumber);
let secondIsInteger = Number.isInteger(secondNumber);
let thirdIsInteger = Number.isInteger(thirdNumber);
let fourthIsInteger = Number.isInteger(fourthNumber);

// 4. Combine all your results into ONE string
//    (you can use + to join multiple strings)
let conversionResults =
"Original: '" + firstValue + "' -> Converted: " + firstNumber +
" -> isNaN: " + firstIsNaN + " -> isInteger: " + firstIsInteger + "<br>" +

"Original: '" + secondValue + "' -> Converted: " + secondNumber +
" -> isNaN: " + secondIsNaN + " -> isInteger: " + secondIsInteger + "<br>" +

"Original: '" + thirdValue + "' -> Converted: " + thirdNumber +
" -> isNaN: " + thirdIsNaN + " -> isInteger: " + thirdIsInteger + "<br>" +

"Original: '" + fourthValue + "' -> Converted: " + fourthNumber +
" -> isNaN: " + fourthIsNaN + " -> isInteger: " + fourthIsInteger;

// 5. Display the final result inside the element:
//    id="numberConversionOutput"
document.getElementById("numberConversionOutput").innerHTML = conversionResults;


// ==========================
// Part 3: Math & Formatting
// ==========================

// TODO:
// 1. Create at least 2-3 numeric variables
let firstNumberValue = 50;
let secondNumberValue = 25;
let thirdNumberValue = 10;

// 2. Perform calculations:
//    - at least one addition
//    - at least one other operation (subtract, multiply, or divide)
let additionResult = firstNumberValue + secondNumberValue;
let multiplicationResult = firstNumberValue * thirdNumberValue;

// 3. Use at least ONE of the following:
//    - toFixed()
//    - toLocaleString()
//    - Number.parseInt()
//    - Number.parseFloat()
let formattedAddition = additionResult.toFixed(2);
let formattedMultiplication = multiplicationResult.toFixed(2);

// 4. Build a string showing your results
let mathResults = "Addition: " + firstNumberValue + " + " + secondNumberValue + " = " + formattedAddition + "<br>" +

"Multiplication: " + firstNumberValue + " * " + thirdNumberValue +
" = " + formattedMultiplication;

// 5. Display the results inside the element with id="mathOutput"
document.getElementById("mathOutput").innerHTML = mathResults;

// ==========================
// Part 4: Conditionals
// ==========================

// TODO:
// 1. Write at least TWO if/else statements
let firstMessage;
if (fourthIsNaN) {
firstMessage = "The value 'hello' is not a valid number.";
} else {
firstMessage = "The value 'hello' is a valid number.";
}

let secondMessage;
if (additionResult > 100) {
secondMessage = "The addition result is greater than 100.";
} else {
secondMessage = "The addition result is not greater than 100.";
}

// Ideas:
// - check if a value is NaN
// - check if a number is an integer
// - check if a result is greater than a certain value
//
// 2. Display a message on the page based on the condition
//    (append it to an existing section or create a new message)
document.getElementById("numberConversionOutput").innerHTML += "<br>" + firstMessage + "<br>" + secondMessage;