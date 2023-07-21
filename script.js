
let currentDisplayValue = "0";
let firstNumber = null;
let operator = null;

function updateDisplay() {
  const displayElement = document.querySelector(".display");
  displayElement.textContent = currentDisplayValue;
}

// Function to handle number button clicks
function handleNumberClick(number) {
  if (currentDisplayValue === "0" || currentDisplayValue === "Error") {
    currentDisplayValue = number;
  } else {
    currentDisplayValue += number;
  }
  updateDisplay();
}

// Function to handle operator button clicks
function handleOperatorClick(selectedOperator) {
  if (operator === null) {
    firstNumber = parseFloat(currentDisplayValue);
    operator = selectedOperator;
    currentDisplayValue = "0";
  } else {
    operate();
    operator = selectedOperator;
  }
}

// Function to perform the operation based on the operator
function operate() {
  const secondNumber = parseFloat(currentDisplayValue);
  switch (operator) {
    case "+":
      currentDisplayValue = (firstNumber + secondNumber).toString();
      break;
    case "-":
      currentDisplayValue = (firstNumber - secondNumber).toString();
      break;
    case "*":
      currentDisplayValue = (firstNumber * secondNumber).toString();
      break;
    case "/":
      if (secondNumber === 0) {
        currentDisplayValue = "Error";
      } else {
        currentDisplayValue = (firstNumber / secondNumber).toString();
      }
      break;
    default:
      break;
  }
  firstNumber = parseFloat(currentDisplayValue);
  operator = null;
  updateDisplay();
}

// Function to handle equals button click
function handleEqualsClick() {
  if (operator !== null) {
    operate();
    operator = null;
  }
}

// Function to handle clear button click
function handleClearClick() {
  currentDisplayValue = "0";
  firstNumber = null;
  operator = null;
  updateDisplay();
}

// Function to handle decimal button click
function handleDecimalClick() {
  if (!currentDisplayValue.includes(".")) {
    currentDisplayValue += ".";
    updateDisplay();
  }
}

// Event listeners for button clicks
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equals");
const clearButton = document.querySelector(".clear");
const decimalButton = document.querySelector(".decimal");

numberButtons.forEach(button => {
  button.addEventListener("click", () => handleNumberClick(button.textContent));
});

operatorButtons.forEach(button => {
  button.addEventListener("click", () => handleOperatorClick(button.textContent));
});

equalsButton.addEventListener("click", handleEqualsClick);
clearButton.addEventListener("click", handleClearClick);
decimalButton.addEventListener("click", handleDecimalClick);

// Initial display update
updateDisplay();