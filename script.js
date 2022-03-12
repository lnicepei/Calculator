let digitButtonsArray = [...document.querySelectorAll('.buttonDigit')];
let operationsButtonsArray = [...document.querySelectorAll('.button')];

let currentScreen = document.getElementById('currentScreen');
let previousScreen = document.getElementById('previousScreen');
let equals = document.getElementById('equals');
let dot = document.getElementById('dot');
let deleteButton = document.getElementById('delete');

let indexOfEmptyScreen = 0, currentOperation = "", previousOperation = "", currentNumber = 0, previousNumber = 0, indexAfterOperation = 0;
currentScreen.textContent = 0;

equals.addEventListener('click', currentScreenUpdater);
dot.addEventListener('click', function(){
  if(currentScreen.textContent.includes(".") !== true){
    currentScreen.textContent += ".";
  }
});

deleteButton.addEventListener('click', deleter);

digitButtonsArray.forEach(button => {

  button.addEventListener('click', function() {

    if (currentScreen.textContent.length <= 10 && currentScreen.textContent !== "Infinity") {
      if (currentScreen.textContent == "0") {
        currentScreen.textContent = "";
      }

      if ((previousScreen.textContent.charAt(previousScreen.textContent.toString().length - 1) == "+" ||
          previousScreen.textContent.charAt(previousScreen.textContent.toString().length - 1) == "-" ||
          previousScreen.textContent.charAt(previousScreen.textContent.toString().length - 1) == "*" || 
          previousScreen.textContent.charAt(previousScreen.textContent.toString().length - 1) == "/") &&
          indexOfEmptyScreen == 0) {
            currentScreen.textContent = "";
            indexOfEmptyScreen++;
      }

      if (indexAfterOperation == 1) {
        currentScreen.textContent = "";
        indexAfterOperation = 0; //allows to change the operation
      }

      currentScreen.textContent += button.textContent;
    } else {

      currentScreen.textContent = "Infinity";
    }
  })
});

operationsButtonsArray.forEach(button => {

  button.addEventListener('click', function() { 
    if(isNaN(previousScreen.textContent.toString().slice(0, previousScreen.textContent.toString().length - 1)) !== false){
      previousNumber = parseFloat(previousScreen.textContent.toString().slice(0, previousScreen.textContent.toString().length - 1));
    } else{
      previousNumber = parseFloat(previousScreen.textContent);
    }

    currentNumber = parseFloat(currentScreen.textContent);
    indexAfterOperation = 1;
    
    if(isNaN(previousScreen.textContent.toString().slice(0, previousScreen.textContent.toString().length - 1)) == false){
      previousOperation = previousScreen.textContent.toString().slice(previousScreen.textContent.toString().length - 1, previousScreen.textContent.toString().length);
    } else{
      previousOperation = button.textContent;
    }
    currentOperation = button.textContent;
    
    previousScreen.textContent = currentScreen.textContent;
    if(button.textContent !== "=")
      previousScreen.textContent += button.textContent;

    currentScreenUpdater(button);
  })
});

function operate (a, b, operation) {
  if (operation == "+"){
    return a + b;
  } else if (operation == "-"){
    return b - a;
  } else if (operation == "*"){
    return a * b;
  } else if (operation == "/"){
    return b / a;
  }
}

function currentScreenUpdater(button) {
  if (previousNumber !== currentNumber && isNaN(previousNumber) == false && isNaN(currentNumber) == false && currentOperation !== "") {

    previousScreen.textContent = Math.round(operate(currentNumber, previousNumber, previousOperation) * 10000000) / 10000000; 
    if(button.textContent !== "=")
      previousScreen.textContent += button.textContent;
    currentScreen.textContent = Math.round(operate(currentNumber, previousNumber, previousOperation) * 10000000) / 10000000; 
  }
}

function deleter() {
  let deletedPreviousNumber = document.getElementById("previousScreen").textContent;
  let deletedCurrentNumber = document.getElementById('currentScreen').textContent;

    if (deletedCurrentNumber !== "Infinity" && deletedCurrentNumber !== undefined) {
      deletedCurrentNumber = deletedCurrentNumber.toString().slice(0, -1);
      document.getElementById('currentScreen').textContent = "";
      document.getElementById('currentScreen').textContent = deletedCurrentNumber
    } else if(deletedCurrentNumber == "Infinity"){
      document.getElementById("previousScreen").textContent = "";
      document.getElementById("currentScreen").textContent = "0";
    }
    
    if (deletedCurrentNumber == "")
      document.getElementById("currentScreen").textContent = "0";

}