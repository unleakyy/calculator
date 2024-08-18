const numberBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operator");
const topContainer = document.getElementById("top");
const bottomContainer = document.getElementById("bottom");
const equalBtn = document.getElementById("equal");
const clearBtn = document.getElementById("control");

let firstNumber = 0;
let secondNumber = 0;
let signOperator = "";
let finalResult = 0;

function result(firstValue, secondValue, operator) {
  firstValue = Number(firstValue);
  secondValue = Number(secondValue);

  switch (operator) {
    case "+":
      finalResult = firstValue + secondValue;
      break;
    case "-":
      finalResult = firstValue - secondValue;
      break;
    case "*":
      finalResult = firstValue * secondValue;
      break;
    case "/":
      finalResult = firstValue / secondValue;
  }

  return finalResult;
}

numberBtns.forEach((item) => {
  item.addEventListener("click", () => {
    if (bottomContainer.textContent.includes(".") && item.textContent == ".") {
      return;
    }
    if (secondNumber == "0") {
      secondNumber = item.textContent;
    } else {
      secondNumber += item.textContent;
    }
    bottomContainer.textContent = secondNumber;
  });
});

operatorBtns.forEach((item) => {
  item.addEventListener("click", () => {
    if (firstNumber != 0 && secondNumber != 0) {
      equalBtn.click();
    }
    signOperator = item.textContent;
    secondNumber = bottomContainer.textContent;
    firstNumber = secondNumber;
    topContainer.textContent = `${firstNumber} ${signOperator}`;
    secondNumber = 0;
    bottomContainer.textContent = secondNumber;
  });
});

equalBtn.addEventListener("click", () => {
  if (firstNumber == 0) {
    return;
  }
  topContainer.textContent = `${firstNumber} ${signOperator} ${secondNumber} =`;
  bottomContainer.textContent = result(firstNumber, secondNumber, signOperator);
});

clearBtn.addEventListener("click", reset);

function reset() {
  firstNumber = 0;
  secondNumber = 0;
  signOperator = "";
  finalResult = 0;
  topContainer.textContent = "";
  bottomContainer.textContent = secondNumber;
}
