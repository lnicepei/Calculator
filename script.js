let digitButtonsArray = [...document.querySelectorAll('.buttonDigit')];
let operationsButtonsArray = [...document.querySelectorAll('.button')];

let currentScreen = document.getElementById('currentScreen');
let previousScreen = document.getElementById('previousScreen');

let indexOfEmptyScreen = 0, operation = "", currentNumber = 0, previousNumber = 0;

digitButtonsArray.forEach(button => {

  button.addEventListener('click', function() {

    if (currentScreen.textContent.length <= 10 && currentScreen.textContent !== "Infinity"){

      if (currentScreen.textContent == "0"){

        currentScreen.textContent = "";

      }

      if ((previousScreen.textContent.charAt(previousScreen.textContent.toString().length - 1) == "+" ||
          previousScreen.textContent.charAt(previousScreen.textContent.toString().length - 1) == "-" ||
          previousScreen.textContent.charAt(previousScreen.textContent.toString().length - 1) == "*" || 
          previousScreen.textContent.charAt(previousScreen.textContent.toString().length - 1) == "/" )&&
          indexOfEmptyScreen == 0){
            currentScreen.textContent = "";
            indexOfEmptyScreen++;
      }
      
      currentScreen.textContent += button.textContent;

    } else{

      currentScreen.textContent = "Infinity";

    }

  })

});

operationsButtonsArray.forEach(button =>{

  button.addEventListener('click', function() { 

    previousNumber = parseFloat(previousScreen.textContent.toString().slice(0, previousScreen.textContent.toString().length - 1));
    previousScreen.textContent = currentScreen.textContent;
    previousScreen.textContent += button.textContent;
    operation = previousScreen.textContent.toString().slice(previousScreen.textContent.toString().length - 1, previousScreen.textContent.toString().length)
    currentNumber = parseFloat(currentScreen.textContent);
    // console.log(currentNumber);
    // console.log(previousNumber);
    console.log(operation);
    console.log(currentNumber);
    console.log(previousNumber);
    console.log(Number.isNaN(currentNumber));
    if(Number.isNaN(currentNumber) == false && Number.isNaN(previousNumber) == false && operation !== ""){
      currentScreen.textContent = operate(currentNumber, previousNumber, operation);
      previousScreen.textContent = operate(currentNumber, previousNumber, operation);
    }

  })

});

function operate (a, b, operation) {
  if (operation == "+"){
    return a + b;
  } else if (operation == "-"){
    return a - b;
  } else if(operation == "*"){
    return a * b;
  } else if(operation == "/"){
    return a / b;
  }
}