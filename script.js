let displayValue = document.createElement("div");

let operation = "",
  result = 0,
  currentNumber = 0,
  previousNumber = 0,
  operationCounter = 0,
  index = 0,
  newString = "",
  operationsArray = [],
  operationIndex = 0; //counts number of elements in operationsArray

let btns = document.getElementsByClassName("buttonDigit");
let btnsArray = [...btns];

document.getElementById("clear").addEventListener("click", clarifier);
document.getElementById("delete").addEventListener("click", deleter);
document.getElementById("dot").addEventListener("click", dotter);

window.addEventListener("keydown", function (e) {
  if (e.key >= 0 && e.key <= 9) {
    digitButtonAssigner(e.key);
    buttonColorStart(e);
  }
  if (e.key == "+" || e.key == "-" || e.key == "*" || e.key == "/")
    operate(e.key);
  if (e.key == "=") equalizer();
  if (e.key == ".") dotter();
  if (e.key == "Backspace") deleter();
  if (e.key == "Delete") clarifier();
});

const buttons = document.querySelectorAll(".buttonDigit");
buttons.forEach((button) =>
  button.addEventListener("transitionend", buttonColorEnd)
);

function buttonColorEnd(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("tapping");
}

function buttonColorStart(e) {
  const key = document.querySelector(`.buttonDigit[data-key ="${e.keyCode}"]`);
  console.log(e.keyCode);
  key.classList.add("tapping");
}

main();

function main() {
  document.getElementById("screen").textContent = "0";
  btnsArray.forEach((btn) => {
    btn.addEventListener("click", digitButtonAssigner, false);
  });
  let operations = document.getElementsByClassName("button");
  let btnsArray1 = [...operations];

  for (let buttonOfArray of btnsArray1) {
    buttonOfArray.addEventListener("click", operate, false);
  }
}

function digitButtonAssigner(btn) {
  if (index == 0) {
    document.getElementById("screen").textContent = ""; //if() checks if there are digits on the screen after operations
  }
  if (document.getElementById("screen").textContent == "0") {
    document.getElementById("screen").textContent = ""; //forbids to add many 0s
  }
  if (
    parseFloat(document.getElementById("screen").textContent).toString()
      .length < 11
  ) {
    if (btn.srcElement !== undefined) {
      document.getElementById("screen").textContent +=
        btn.srcElement.textContent;
    } else if ((btn <= 9 && btn >= 0) || btn == ".") {
      document.getElementById("screen").textContent += btn;
      // btn.classList.add('button:hover')
      console.log(btn);
    }
  }
  index = 1;
}
function operationChoice(btn) {
  if (index != 0) {
    if (operationIndex > 4) {
      let temp = operationsArray[operationIndex - 1];
      console.log(operationsArray[operationIndex - 1]);
      operationIndex = 1;
      operationsArray = [];
      operationsArray.push(temp);
    }
    if (btn == "=" || btn.srcElement.textContent == "=") {
      document.getElementById("screen").textContent +=
        operationsArray[operationIndex - 1];
      return btn.srcElement.textContent;
    }
    if (btn == "+" || btn == "-" || btn == "*" || btn == "/" || btn == "=") {
      operationsArray.push(btn);
      document.getElementById("screen").textContent +=
        operationsArray[operationIndex - 1];
      console.log(operationsArray);
    } else if (
      btn.srcElement.textContent == "+" ||
      btn.srcElement.textContent == "-" ||
      btn.srcElement.textContent == "*" ||
      btn.srcElement.textContent == "/" ||
      btn.srcElement.textContent == "="
    ) {
      operationsArray.push(btn.srcElement.textContent);
      console.log(operationsArray);
      document.getElementById("upperScreen").textContent +=
        document.getElementById("screen").textContent;
      console.log(operationsArray[operationIndex - 1]);
    }
    document
      .getElementById("screen")
      .appendChild(operationsArray[operationIndex - 1]);
    return operationsArray[operationIndex - 1];
  }
  index++;
}

function operate(btn) {
  if (operationCounter != 0) {
    currentNumber = parseFloat(document.getElementById("screen").textContent);
  }
  if (operationCounter == 0) {
    previousNumber = parseFloat(document.getElementById("screen").textContent);
  }
  operation = operationChoice(btn);
  operationIndex++;
  if (operationCounter > 0) {
    if (operation === "+") {
      result = currentNumber + previousNumber;
      previousNumber = result;
      // screenUpdater(result);
      // document.getElementById("screen").textContent = result;
    } else if (operation === "-") {
      result = -currentNumber + previousNumber;
      previousNumber = result;
      // screenUpdater(result);
      // document.getElementById("screen").textContent = result;
    } else if (operation === "*") {
      result = currentNumber * previousNumber;
      previousNumber = result;
      // screenUpdater(result);
      // document.getElementById("screen").textContent = result;
    } else if (operation === "/") {
      result = previousNumber / currentNumber;
      previousNumber = result;
      // screenUpdater(result);
    } else if (operation === "=") {
      equalizer();
      previousNumber = result;
    }
    screenUpdater(result);
  }
  ++operationCounter;
  index = 0;
}

function equalizer() {
  screenUpdater(result);
  previousNumber = result;
}

function clarifier() {
  document.getElementById("screen").textContent = "0";
  operationCounter = 0;
  index = 0;
  operationIndex = 0;
  operationsArray = [];
}

function deleter() {
  let deletedNumber = document.getElementById("screen").textContent;
  if (deletedNumber !== "Infinity") {
    deletedNumber = deletedNumber.slice(0, -1);
    document.getElementById("screen").textContent = "";
    document.getElementById("screen").textContent += deletedNumber;
    if (deletedNumber == "")
      document.getElementById("screen").textContent = "0";
  } else {
    (currentNumber = 0),
      (previousNumber = 0),
      (document.getElementById("screen").textContent = "0");
  }
}

function dotter() {
  if (document.getElementById("screen").textContent.includes(".") !== true) {
    document.getElementById("screen").textContent += ".";
  }
  index++;
}

function screenUpdater(result) {
  result = Math.round(result * 10000) / 10000;
  document.getElementById("screen").textContent = result;
  if (result >= 99999999999) {
    // for (let i = 0; i < result.toString().length; i++) {
    //   newString = result.toString().slice(0, 10 - result.toString().length);
    // }
    document.getElementById("screen").textContent = "Infinity";
    console.log(newString);
  }
}
