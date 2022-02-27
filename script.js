let displayValue = document.createElement("div");

let operation = "", result = 1, currentNumber = 0, previousNumber = 0, operationCounter = 0, index = 0, newString = "";

let btns = document.getElementsByClassName("buttonDigit");
let btnsArray = [...btns];

document.getElementById("clear").addEventListener("click", clarifier);
document.getElementById("delete").addEventListener("click", deleter);
document.getElementById("dot").addEventListener("click", dotter);

main();

function main() {
  document.getElementById("screen").textContent = "0";
  btnsArray.forEach((btn) => {
    btn.addEventListener("click", digitButtonAssigner, false);
  });
  let operations = document.getElementsByClassName("button");
  let btnsArray1 = [...operations];

  // divide.addEventListener("click", operate, false);
  for (let buttonOfArray of btnsArray1) {
    buttonOfArray.addEventListener("click", operate, false);
  }
}

function digitButtonAssigner(btn) {
  if(index == 0){
    document.getElementById("screen").textContent = "";
  }
  if(document.getElementById("screen").textContent == "0"){
    document.getElementById("screen").textContent = "";
  }
  if (parseFloat(document.getElementById("screen").textContent).toString().length < 11) {
    document.getElementById("screen").textContent += btn.srcElement.textContent;
    // console.log(parseInt(document.getElementById("screen")).toString().length);
  }
  index++;
}

function operationChoice(btn){
  if(index != 0){
    index++;
    return btn.srcElement.textContent;
  }
}

function operate(btn) {
  // if(parseFloat(document.getElementById("screen").textContent) % 10 != 0){
  //   let numberOnScreen = parseFloat(document.getElementById("screen").textContent)
  // }
  // if(operationCounter == 2){
  //   operationCounter = 1;
  // }
  if(operationCounter != 0){
    currentNumber = parseFloat(document.getElementById("screen").textContent);
  }
  if(operationCounter == 0){
    previousNumber = parseFloat(document.getElementById("screen").textContent);
    // operation = operationChoice(btn);
  }
  // if(operationCounter > 1){
  // }
  operation = operationChoice(btn);
  // document.getElementById("screen").textContent = "";
  if(operationCounter > 0){
    if (operation === "+") {
      result = currentNumber + previousNumber;
      previousNumber = result;
      document.getElementById("screen").textContent = result;
    } else if (operation === "-") {
      result = -currentNumber + previousNumber;
      previousNumber = result;
      document.getElementById("screen").textContent = result;
    } else if (operation === "*") {
      result = currentNumber * previousNumber;
      previousNumber = result;
      document.getElementById("screen").textContent = result;
    } else if (operation === "/") {
      // if(document.getElementById("screen").textContent != "0"){
      //   document.getElementById("screen").textContent = "";
      // }
      result = previousNumber / currentNumber;
      previousNumber = result;
      
    }
    screenUpdater(result);
  }
  ++operationCounter;
  index = 0;
}

function clarifier() {
  document.getElementById("screen").textContent = "0";
  operationCounter = 0;
  index = 0;
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
}

function screenUpdater(result){
  if(result.toString().length >= 15){
    for (let i = 0; i < result.toString().length; i++){
            newString = result.toString().slice(0, 10 - result.toString().length);
        }
        document.getElementById("screen").textContent = newString;
        console.log(newString);
  }else{
    document.getElementById("screen").textContent = result;
    console.log(result);
  }
}
























































// function buttonClarifier() {
//   btnsArray.forEach((btn) => {
//     btn.removeEventListener("click", buttonAssigner);
//   });
// }
// function screenUpdater(num) {
//   // console.log(toString(num).length);
//   // if (toString(num).length < 12) {
//   //   document.getElementById("screen").textContent += num;
//   if (num.toString().length >= 12){
//     for (let i = 0; i < num.toString().length; i++){
//       if (num.toString().length >= 12){
//         newString = num.toString().slice(0, -7);
//       }
//     }
//     document.getElementById("screen").textContent = "";
//     document.getElementById("screen").textContent += newString;
//     // let numString = num.toString();
//     // newString = num.toString().slice(0, -1);
//     console.log(newString);
//   } else {
//     document.getElementById("screen").textContent = "";
//     document.getElementById("screen").textContent += num;
//   }
//     // console.log(parseInt(document.getElementById("screen").textContent));
//   // }else{
//   //   for(let i = 0; i < toString(parseInt(document.getElementById("screen").textContent)).length; i++){
//   //   }
//   //  screenUpdater(toString(parseInt(document.getElementById("screen").textContent)));
//   // }
//   // document.getElementById("screen").appendChild(displayValue);
// }

// function divideButtonAssigner(){
//   temporaryHolder = parseInt(document.getElementById("screen").textContent);
//   // clarifier();
//   // // let number2 = 2;
//   // result = temporaryHolder / number2;
//   // screenUpdater(result);
//   operationDivide(temporaryHolder);
//   // operationDivide(temporaryHolder);
// console.log(result);
// }

// // function operationDivide(numFromHolder){
// //   buttonClarifier();
// //   main();
// //   let currentNumber = numFromHolder;
// //   // let temporaryHolder2 = 3;
// //   if (divideCounter == 0){
// //   result = numFromHolder;
// //   divideCounter++;
// //     clarifier();
// //     // document.getElementById("screen").textContent = "";
// //   } else {
// //   // document.getElementById("screen").textContent = "";
// //   clarifier();
// //   }
// //   // result = numFromHolder;
// //   // console.log(toString(parseInt(document.getElementById("screen").textContent)).length);

// //   screenUpdater(result / temporaryHolder2);
// //   // clarifier();

// // }
