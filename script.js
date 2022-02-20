let displayValue = document.createElement("div");
let digitCounter = 0;
let content;
let num1 = [],
  num2 = [],
  operation = "",
  screenArr = [];
let temporaryHolder = 0, result = 0, divideCounter = 0;

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
}
function screenUpdater(num) {
  if (digitCounter < 12) {
    document.getElementById("screen").textContent += num;
    // console.log(parseInt(document.getElementById("screen").textContent));
  }
  // document.getElementById("screen").appendChild(displayValue);
}

  let operations = document.getElementsByClassName("button");
  let btnsArray1 = [...operations];
  let divide = document.querySelector('#divide');
  divide.addEventListener('click', function(){
      temporaryHolder = parseInt(document.getElementById("screen").textContent); 
      // clarifier();
      // // let number2 = 2;
      // result = temporaryHolder / number2;
      // screenUpdater(result);
      setTimeout(operationDivide(temporaryHolder), 10000);
      // operationDivide(temporaryHolder);
    console.log(result);
  },false);
// });

function operationDivide(numFromHolder){
  buttonClarifier();
  main();
  // let temporaryHolder2 = parseInt(document.getElementById("screen").textContent);
  // let temporaryHolder2 = 3;
  if(divideCounter == 0){
    result = numFromHolder;
    divideCounter++;
  }else{
    document.getElementById("screen").textContent = "";
    screenUpdater(result / numFromHolder);
    // clarifier();
  }
  // screenUpdater(result + 2);

}
// function getSecondNumber(){
//   buttonClarifier();
//   main();
//   let temporaryHolder2
// }