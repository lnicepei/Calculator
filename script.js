let displayValue = document.createElement("div");
let digitCounter = 0;
let content;
let num1 = [],
  num2 = [],
  operation = "",
  screenArr = [];
let temporaryHolder = 0, result = 0, divideCounter = 0, newString ="";

function numberIncreaser() {
  num1++;
  displayValue.textContent = operate(num1, num2, operation);
}
let btns = document.getElementsByClassName("buttonDigit");
let btnsArray = [...btns];
main();
function main(){
  btnsArray.forEach((btn) => {
    btn.addEventListener(
      "click", buttonAssigner,
      false
    );
  });
  
}
function buttonAssigner (btn) {
  if (digitCounter < 11) {
    document.getElementById("screen").textContent +=
      btn.srcElement.textContent;
    console.log(parseInt(document.getElementById("screen").textContent));
  }
  ++digitCounter;
}
function buttonClarifier(){
  btnsArray.forEach((btn) => {
    btn.removeEventListener('click', buttonAssigner);
  })
}
document.getElementById("clear").addEventListener("click", clarifier);
// function operate(num1, num2, operation) {
//   if (operation === "+") {
//     return num1 + num2;
//   } else if (operation === "-") {
//     return num1 - num2;
//   } else if (operation === "*") {
//     return num1 * num2;
//   } else if (operation === "/") {
//     return num1 / num2;
//   }
//   return num1;
// }
function clarifier() {
  document.getElementById("screen").textContent = "";
  digitCounter = 0;
  divideCounter = 0;
  temporaryHolder = 0;
}
function screenUpdater(num) {
  // console.log(toString(num).length);
  // if (toString(num).length < 12) {
  //   document.getElementById("screen").textContent += num;
  if(num.toString().length >= 12){
    for(let i = 0; i < num.toString().length; i++){
      if(num.toString().length >= 12){
        newString = num.toString().slice(0, -7);
      }
    }
    document.getElementById("screen").textContent += newString; 
    // let numString = num.toString();
    // newString = num.toString().slice(0, -1);
    console.log(newString);
  }else{
    document.getElementById("screen").textContent += num;
  }
    // console.log(parseInt(document.getElementById("screen").textContent));
  // }else{
  //   for(let i = 0; i < toString(parseInt(document.getElementById("screen").textContent)).length; i++){
  //   }
  //  screenUpdater(toString(parseInt(document.getElementById("screen").textContent)));
  // }
  // document.getElementById("screen").appendChild(displayValue);
}

  let operations = document.getElementsByClassName("button");
  let btnsArray1 = [...operations];
  let divide = document.querySelector('#divide');

  divide.addEventListener('click', divideButtonAssigner, false);

function divideButtonAssigner(){
  temporaryHolder = parseInt(document.getElementById("screen").textContent); 
  // clarifier();
  // // let number2 = 2;
  // result = temporaryHolder / number2;
  // screenUpdater(result);
  operationDivide(temporaryHolder);
  // operationDivide(temporaryHolder);
console.log(result);
}

function operationDivide(numFromHolder){
  buttonClarifier();
  main();
  // let temporaryHolder2 = parseInt(document.getElementById("screen").textContent);
  // let temporaryHolder2 = 3;
  if(divideCounter == 0){
    result = numFromHolder;
    divideCounter++;
    document.getElementById("screen").textContent = "";
  }else{
    document.getElementById("screen").textContent = "";
    result /= numFromHolder;
    // console.log(toString(parseInt(document.getElementById("screen").textContent)).length); 

    screenUpdater(result);
    // clarifier();
  }
  
}