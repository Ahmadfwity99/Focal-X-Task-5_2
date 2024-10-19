
// Unit Converter functionality

const firstUnit = document.querySelector(".from"); // Select the unit to convert from
const numberOne = document.querySelector(".number-one"); // Select the input number
const secondUnit = document.querySelector(".to"); // Select the unit to convert to
const result = document.querySelector(".result"); // Select the result display

// Function to convert units based on user input
function convertUnit() {
    const inputNumber = parseFloat(numberOne.value); // Convert the input to a float
    if (isNaN(inputNumber)) {
        alert("Wrong Input, Please Enter a Number!"); // Alert if the input is not a number
    } else {
        let answer; // Variable to store the conversion result
        // Check the 'from' unit and perform the appropriate conversion
        if (firstUnit.value === "km") {
            if (secondUnit.value === "m") {
                answer = inputNumber * 1000; // km to m
            } else {
                answer = inputNumber * 100000; // km to cm
            }
        } else if (firstUnit.value === "m") {
            if (secondUnit.value === "km") {
                answer = inputNumber / 1000; // m to km
            } else {
                answer = inputNumber * 100; // m to cm
            }
        } else if (firstUnit.value === "cm") {
            if (secondUnit.value === "km") {
                answer = inputNumber / 100000; // cm to km
            } else {
                answer = inputNumber / 100; // cm to m
            }
        }
        result.value = answer; // Display the conversion result
    }
}

// Function to clear the unit converter input and result fields
function clearResult() {
    firstUnit.selectedIndex = 0; // Reset the 'from' unit selection to the first option
    secondUnit.selectedIndex = 0; // Reset the 'to' unit selection to the first option
    numberOne.value = ""; // Clear the input number
    result.value = ""; // Clear the result display
}