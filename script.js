let displayValue = document.createElement("div");

let operation = "",
  result = 0,
  currentNumber = 0,
  previousNumber = 0,
  operationCounter = 0,
  index = 0,
  newString = "",
  operationsArray =[],
  operationIndex = 0;//counts number of elements in operationsArray

let btns = document.getElementsByClassName("buttonDigit");
let btnsArray = [...btns];

document.getElementById("clear").addEventListener("click", clarifier);
document.getElementById("delete").addEventListener("click", deleter);
document.getElementById("dot").addEventListener("click", dotter);

window.addEventListener('keydown', function(e){
  if(e.key >= 0 && e.key <= 9) digitButtonAssigner(e.key);
  if(e.key == "+" || e.key == "-" || e.key == "*" || e.key == "/") operate(e.key);
  if(e.key == '.') dotter();
  if(e.key == "Backspace") deleter();
  if(e.key == "Delete") clarifier();
  // console.log(e.key);
});

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
    document.getElementById("screen").textContent = "";
  }
  if (document.getElementById("screen").textContent == "0") {
    document.getElementById("screen").textContent = "";
  }
  if (parseFloat(document.getElementById("screen").textContent).toString().length < 11) {
    if(btn.srcElement !== undefined){
      document.getElementById("screen").textContent += btn.srcElement.textContent;
    }else if(btn <= 9 && btn >= 0 || btn == "."){
      document.getElementById("screen").textContent += btn;
    }
  }
  index = 1;
}
function operationChoice(btn) {
  // console.log(btn);
  if (index != 0) {
    // if(operationIndex > 4){
    //   let temp = operationsArray[operationIndex - 1];
    //   operationIndex = 0;
    //   operationsArray = [];
    //   operationsArray.push(temp);
    // }
    if(btn == "+" || btn == "-" || btn == "*" || btn == "/"){
      operationsArray.push(btn);
      console.log(operationsArray);
    }else if(btn.srcElement.textContent == "+" || btn.srcElement.textContent == "-" || btn.srcElement.textContent == "*" || btn.srcElement.textContent == "/"){
      operationsArray.push(btn.srcElement.textContent);
      console.log(operationsArray);
      console.log(operationsArray[operationIndex - 1]);
    }
    
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
      screenUpdater(result);
      // document.getElementById("screen").textContent = result;
    } else if (operation === "-") {
      result = -currentNumber + previousNumber;
      previousNumber = result;
      screenUpdater(result);
      // document.getElementById("screen").textContent = result;
    } else if (operation === "*") {
      result = currentNumber * previousNumber;
      previousNumber = result;
      screenUpdater(result);
      // document.getElementById("screen").textContent = result;
    } else if (operation === "/") {
      result = previousNumber / currentNumber;
      previousNumber = result;
      screenUpdater(result);
    } else if (operation === "=") {
      screenUpdater(result);
    }
    // screenUpdater(result);
  }
  ++operationCounter;
  index = 0;
}

function clarifier() {
  document.getElementById("screen").textContent = "0";
  operationCounter = 0;
  index = 0;
  operationIndex = 0;
  operationsArray =[];
}

function deleter() {
  let deletedNumber = document.getElementById("screen").textContent;
  deletedNumber = deletedNumber.slice(0, -1);
  document.getElementById("screen").textContent = "";
  document.getElementById("screen").textContent += deletedNumber;
}

function dotter() {
  let dummyString = document.getElementById("screen").textContent.toString();
  dummyString = dummyString.replace(/\./g, "");
  if (document.getElementById("screen").textContent.toString() == dummyString) {
    document.getElementById("screen").textContent += ".";
  }
  index++;
}

function screenUpdater(result) {
  if (result.toString().length >= 12) {
    for (let i = 0; i < result.toString().length; i++) {
      newString = result.toString().slice(0, 10 - result.toString().length);
    }
    document.getElementById("screen").textContent = newString;
    console.log(newString);
  } else {
    document.getElementById("screen").textContent = result;
    console.log(result);
  }
}
