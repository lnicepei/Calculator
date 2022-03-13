let digitButtonsArray = [...document.querySelectorAll('.buttonDigit')];
let operationsButtonsArray = [...document.querySelectorAll('.button')];

let currentScreen = document.getElementById('currentScreen');
let previousScreen = document.getElementById('previousScreen');
let equals = document.getElementById('equals');
let dot = document.getElementById('dot');
let deleteButton = document.getElementById('delete');
let clearButton = document.getElementById('clear');

let indexOfEmptyScreen = 0,
 currentOperation = "", 
 previousOperation = "", 
 currentNumber = 0, 
 previousNumber = 0, 
 indexAfterOperation = 0;

currentScreen.textContent = 0;

equals.addEventListener('click', currentScreenUpdater);
dot.addEventListener('click', function(){

  if (currentScreen.textContent.includes(".") !== true && currentScreen.textContent !== "" && indexAfterOperation == 0){

    currentScreen.textContent += ".";
  }else if(currentScreen.textContent == "" || indexAfterOperation == 1){

    currentScreen.textContent = "";
    currentScreen.textContent += "0."
    indexAfterOperation = 0;
  }
});

clearButton.addEventListener('click', function(){
  currentScreen.textContent = 0;
  previousScreen.textContent = "";
  indexOfEmptyScreen = 0,
  currentOperation = "", 
  previousOperation = "", 
  currentNumber = 0, 
  previousNumber = 0, 
  indexAfterOperation = 0
});

deleteButton.addEventListener('click', function(){

  let deletedCurrentNumber = document.getElementById('currentScreen').textContent;

    if (deletedCurrentNumber !== "Infinity" && deletedCurrentNumber !== undefined) {
      deletedCurrentNumber = deletedCurrentNumber.toString().slice(0, -1);
      currentScreen.textContent = "";
      currentScreen.textContent = deletedCurrentNumber
    } else if (deletedCurrentNumber == "Infinity"){
      previousScreen.textContent = "";
      currentScreen.textContent = "0";
    }
    
    if (deletedCurrentNumber == ""){
      currentScreen.textContent = "0";
      previousScreen.textContent = "";
    }
});

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
          indexOfEmptyScreen == 0 &&
          currentScreen.textContent !== undefined) {
            currentScreen.textContent += "";
            indexOfEmptyScreen++;
      }

      if (indexAfterOperation == 1 && currentScreen.textContent !== undefined) {

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

    if (isNaN(previousScreen.textContent.toString().slice(0, previousScreen.textContent.toString().length - 1)) !== false){

      previousNumber = parseFloat(previousScreen.textContent.toString().slice(0, previousScreen.textContent.toString().length - 1));
    } else {

      previousNumber = parseFloat(previousScreen.textContent);
    }

    currentNumber = parseFloat(currentScreen.textContent);
    indexAfterOperation = 1;
    
    if (isNaN(previousScreen.textContent.toString().slice(0, previousScreen.textContent.toString().length - 1)) == true){

      previousOperation = previousScreen.textContent.toString().slice(previousScreen.textContent.toString().length - 1, previousScreen.textContent.toString().length);
    } else {
      
      previousOperation = currentOperation;
    }
    currentOperation = button.textContent;

    if (currentScreen.textContent.toString().slice(-1) !== "."){
      previousScreen.textContent = currentScreen.textContent;
    }else{
      currentScreen.textContent = parseFloat(currentScreen.textContent); 
      previousScreen.textContent = currentScreen.textContent;
    }
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

  if (previousNumber !== currentNumber &&
      isNaN(previousNumber) == false &&
      isNaN(currentNumber) == false &&
      currentOperation !== "" &&
      previousOperation !== "" &&
      previousOperation !== "=") {

    previousScreen.textContent = Math.round(operate(currentNumber, previousNumber, previousOperation) * 10000000) / 10000000; 
    if (button.textContent !== "=")
      previousScreen.textContent += button.textContent;
    currentScreen.textContent = Math.round(operate(currentNumber, previousNumber, previousOperation) * 10000000) / 10000000; 
  }
}