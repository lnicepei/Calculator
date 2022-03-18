main();

function main() {
  let digitButtonsArray = [...document.querySelectorAll(".buttonDigit")];
  let operationButtonsArray = [...document.querySelectorAll(".button")];

  let equals = document.getElementById("equals");
  let dot = document.getElementById("dot");
  let deleteButton = document.getElementById("delete");
  let clearButton = document.getElementById("clear");
  let switcher = document.querySelector('.slider');

  let indexOfEmptyScreen = 0,
    currentOperation = "",
    previousOperation = "",
    currentNumber = 0,
    previousNumber = 0,
    indexAfterOperation = 0,
    indexOfTransmission = 0;

  currentScreen.textContent = 0;

  window.addEventListener("keydown", function (e) {
    if (e.key >= 0 && e.key <= 9 && e.key !== " ") {
      console.log(e.key);
      assignDigitButtons(e.key);
    }
    if (e.key == "+" || e.key == "-" || e.key == "*" || e.key == "/")
      assignOperationButtons(e.key);
    if (e.key == "=") assignOperationButtons(e.key);
    if (e.key == ".") placeDot();
    if (e.key == "Backspace") removeLastDigitOnCurrentScreen();
    if (e.key == "Delete") resetTheCalculator();
  });

  switcher.addEventListener("click", function () {
    document.body.classList.toggle("dark");
    let buttons = document.querySelector(".js-buttons");
    buttons.classList.toggle("dark");
    let buttonsBackground = document.querySelector('.buttonDigit')
    buttonsBackground.classList.toggle("background-dark");
  });
  equals.addEventListener("click", updateCurrentScreen);
  clearButton.addEventListener("click", resetTheCalculator);
  dot.addEventListener("click", placeDot);
  deleteButton.addEventListener("click", removeLastDigitOnCurrentScreen);

  operationButtonsArray.forEach((button) => {
    button.addEventListener("click", assignOperationButtons);
  });

  digitButtonsArray.forEach((button) => {
    button.addEventListener("click", assignDigitButtons);
  });

  function resetTheCalculator() {
    currentScreen.textContent = 0;
    previousScreen.textContent = "";
    (indexOfEmptyScreen = 0),
      (currentOperation = ""),
      (previousOperation = ""),
      (currentNumber = 0),
      (previousNumber = 0),
      (indexAfterOperation = 0),
      (indexOfTransmission = 0);
  }

  function placeDot() {
    let currentScreen = document.getElementById("currentScreen");

    if (
      currentScreen.textContent.includes(".") !== true &&
      currentScreen.textContent !== "" &&
      indexAfterOperation == 0
    ) {
      currentScreen.textContent += ".";
    } else if (currentScreen.textContent == "" || indexAfterOperation == 1) {
      currentScreen.textContent = "";
      currentScreen.textContent += "0.";
      indexAfterOperation = 0;
    }
  }

  function removeLastDigitOnCurrentScreen() {
    let currentScreen = document.getElementById("currentScreen");
    let previousScreen = document.getElementById("previousScreen");

    let deletedCurrentNumber =
      document.getElementById("currentScreen").textContent;

    if (
      deletedCurrentNumber !== "Infinity" &&
      deletedCurrentNumber !== undefined
    ) {
      deletedCurrentNumber = deletedCurrentNumber.toString().slice(0, -1);
      currentScreen.textContent = "";
      currentScreen.textContent = deletedCurrentNumber;
    } else if (deletedCurrentNumber == "Infinity") {
      previousScreen.textContent = "";
      currentScreen.textContent = "0";
    }

    if (deletedCurrentNumber == "") {
      currentScreen.textContent = "0";
      previousScreen.textContent = "";
    }
  }

  function assignDigitButtons(e) {
    let currentScreen = document.getElementById("currentScreen");
    let previousScreen = document.getElementById("previousScreen");

    if (
      currentScreen.textContent.length <= 10 &&
      currentScreen.textContent !== "Infinity"
    ) {
      if (currentScreen.textContent == "0") {
        currentScreen.textContent = "";
      }

      if (
        (previousScreen.textContent.charAt(
          previousScreen.textContent.toString().length - 1
        ) == "+" ||
          previousScreen.textContent.charAt(
            previousScreen.textContent.toString().length - 1
          ) == "-" ||
          previousScreen.textContent.charAt(
            previousScreen.textContent.toString().length - 1
          ) == "*" ||
          previousScreen.textContent.charAt(
            previousScreen.textContent.toString().length - 1
          ) == "/") &&
        indexOfEmptyScreen == 0 &&
        currentScreen.textContent !== undefined
      ) {
        currentScreen.textContent += "";
        indexOfEmptyScreen++;
      }

      if (indexAfterOperation == 1 && currentScreen.textContent !== undefined) {
        currentScreen.textContent = "";
        indexAfterOperation = 0; //allows to change the operation
      }
      if (e.target !== undefined) {
        currentScreen.textContent += e.target.textContent;
        indexOfTransmission++;
      } else {
        currentScreen.textContent += e;
        indexOfTransmission++;
      }
    } else {
      currentScreen.textContent = "Infinity";
    }
  }

  function assignOperationButtons(e) {
    let currentScreen = document.getElementById("currentScreen");
    let previousScreen = document.getElementById("previousScreen");

    if (currentScreen.textContent == "Infinity") {
      resetTheCalculator();
      return;
    }

    if (
      isNaN(
        previousScreen.textContent
          .toString()
          .slice(0, previousScreen.textContent.toString().length - 1)
      ) !== false
    ) {
      previousNumber = parseFloat(
        previousScreen.textContent
          .toString()
          .slice(0, previousScreen.textContent.toString().length - 1)
      );
    } else {
      previousNumber = parseFloat(previousScreen.textContent);
    }

    currentNumber = parseFloat(currentScreen.textContent);
    indexAfterOperation = 1;

    if (
      isNaN(
        previousScreen.textContent
          .toString()
          .slice(0, previousScreen.textContent.toString().length - 1)
      ) == true
    ) {
      previousOperation = previousScreen.textContent
        .toString()
        .slice(
          previousScreen.textContent.toString().length - 1,
          previousScreen.textContent.toString().length
        );
    } else {
      previousOperation = currentOperation;
    }
    if (e.target !== undefined) {
      currentOperation = e.target.innerText;
    } else {
      currentOperation = e;
    }

    if (currentScreen.textContent.toString().slice(-1) !== ".") {
      previousScreen.textContent = currentScreen.textContent;
    } else {
      currentScreen.textContent = parseFloat(currentScreen.textContent);
      previousScreen.textContent = currentScreen.textContent;
    }
    if (
      e.target !== "=" &&
      currentScreen.textContent !== "" &&
      currentOperation !== "="
    ) {
      previousScreen.textContent += currentOperation;
    } else if (e.target !== "=" && currentScreen.textContent == "") {
      previousScreen.textContent = previousScreen.textContent
        .toString()
        .slice(0, -1);
      previousScreen.textContent += e.target.textContent;
    }

    updateCurrentScreen(e);
    indexOfTransmission = 0;
  }

  function operate(a, b, operation) {
    if (operation == "+") {
      return a + b;
    } else if (operation == "-") {
      return b - a;
    } else if (operation == "*") {
      return a * b;
    } else if (operation == "/") {
      return b / a;
    }
  }

  function updateCurrentScreen(e) {
    let currentScreen = document.getElementById("currentScreen");
    let previousScreen = document.getElementById("previousScreen");

    console.log(e);

    if (
      indexAfterOperation == 1 &&
      indexOfTransmission !== 0 &&
      isNaN(previousNumber) == false &&
      isNaN(currentNumber) == false &&
      currentOperation !== "" &&
      previousOperation !== "" &&
      previousOperation !== "="
    ) {

      previousScreen.textContent =
        Math.round(
          operate(currentNumber, previousNumber, previousOperation) * 1000000
        ) / 1000000;
      if (e !== "=" || e !== undefined)
        previousScreen.textContent += e;
      currentScreen.textContent =
        Math.round(
          operate(currentNumber, previousNumber, previousOperation) * 1000000
        ) / 1000000;
    }
  }
}
