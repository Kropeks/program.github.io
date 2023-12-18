let result = document.getElementById('result');
let deletedValue = '';

function clearResult() {
  result.value = '';
}

function deleteLastCharacter() {
  if (result.value.length > 0) {
    deletedValue = result.value.slice(-1);
    result.value = result.value.slice(0, -1);
  }
}

function restoreDeleted() {
  result.value += deletedValue;
  deletedValue = '';
}

function calculate() {
  try {
    result.value = eval(result.value);
  } catch (error) {
    result.value = 'Error';
  }
}

function appendNumber(number) {
  result.value += number;
}

function appendOperator(operator) {
  result.value += operator;
}

function convertToBinary() {
  result.value = parseInt(result.value, 10).toString(2);
}

function convertToDecimal() {
  result.value = parseInt(result.value, 2).toString(10);
}

function convertToOctal() {
  result.value = parseInt(result.value, 10).toString(8);
}

function convertToHexadecimal() {
  result.value = parseInt(result.value, 10).toString(16).toUpperCase();
}

function calculateSquareRoot() {
  const inputValue = parseFloat(result.value);
  if (inputValue >= 0) {
    result.value = Math.sqrt(inputValue);
  } else {
    result.value = 'Error: Invalid input';
  }
}

function goBack() {
  window.location.href = "index.html";
}
