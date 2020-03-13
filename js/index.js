let result = 0;
let hist = [];

function addTohist(c) {
  hist.push(c);
}

function cleanInput() {
  input.value = "";
}

function cleanResult() {
  resultElem.value = "";
}

function cleanLog() {
  log.value = "";
}

function resetCalculator() {
  cleanInput();
  cleanResult();
  cleanLog();
  hist = [];
  result = 0;
}

function calculateResult() {
  let prev = Number(hist[0]);
  let i = 1;
  let operator;
  while (i < hist.length) {
    operator = hist[i];
    i++;
    switch (operator) {
      case "+":
        result = prev + Number(hist[i]);
        i++;
        prev = result;
        break;
      case "-":
        result = prev - Number(hist[i]);
        i++;
        prev = result;
        break;
      case "*":
        result = prev * Number(hist[i]);
        i++;
        prev = result;
        break;
      case "/":
        result = prev / Number(hist[i]);
        i++;
        prev = result;
        break;
    }
  }
}

function displayResult() {
  resultElem.value = result;
}

function displayHistory() {
  log.value = hist.join(" ") + " = " + result;
}

var resetBtn = document.getElementsByClassName("resetButton")[0];
var equalBtn = document.getElementsByClassName("equalButton")[0];
var addBtn = document.getElementById("addButton");
var subsBtn = document.getElementById("substractButton");
var multBtn = document.getElementById("multiplicationButton");
var divBtn = document.getElementById("divisionButton");
var input = document.getElementsByClassName("inputNumber")[0];
var resultElem = document.getElementById("resultValue");
var log = document.getElementById("logInformation");

resetBtn.addEventListener("click", function() {
  resetCalculator();
});

equalBtn.addEventListener("click", function() {
  addTohist(input.value);
  calculateResult();
  cleanInput();
  displayResult();
  displayHistory();
});

addBtn.addEventListener("click", function() {
  addTohist(input.value);
  addTohist("+");
  cleanInput();
});
subsBtn.addEventListener("click", function() {
  addTohist(input.value);
  addTohist("-");
  cleanInput();
});
multBtn.addEventListener("click", function() {
  addTohist(input.value);
  addTohist("*");
  cleanInput();
});
divBtn.addEventListener("click", function() {
  addTohist(input.value);
  addTohist("/");
  cleanInput();
});
