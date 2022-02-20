let displayValue = document.createElement("div");
let digitCounter = 0;
let content;
let num1 = [],
  num2 = [],
  operation = "",
  screenArr = [];
let temporaryHolder = 0, result = 0;

function numberIncreaser() {
  num1++;
  displayValue.textContent = operate(num1, num2, operation);
}
// screenUpdater();
let btns = document.getElementsByClassName("buttonDigit");
let btnsArray = [...btns];
// console.log(btns);
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
  // let number = document.querySelector('');
  // console.log(btnsArray[btn.id].id);
  if (digitCounter < 11) {
    document.getElementById("screen").textContent +=
      btn.srcElement.textContent;
    console.log(parseInt(document.getElementById("screen").textContent));
  }
  ++digitCounter;
  // console.log(btn.srcElement.textContent);
  // console.log(number);
}
function buttonClarifier(){
  btnsArray.forEach((btn) => {
    btn.removeEventListener('click', buttonAssigner);
  })
}
document.getElementById("clear").addEventListener("click", clarifier);
function operate(num1, num2, operation) {
  if (operation === "+") {
    return num1 + num2;
  } else if (operation === "-") {
    return num1 - num2;
  } else if (operation === "*") {
    return num1 * num2;
  } else if (operation === "/") {
    return num1 / num2;
  }
  return num1;
}
function clarifier() {
  document.getElementById("screen").textContent = "";
  digitCounter = 0;
}
function screenUpdater(num) {
  if (digitCounter < 12) {
    document.getElementById("screen").textContent += num;
    // console.log(parseInt(document.getElementById("screen").textContent));
  }
  // document.getElementById("screen").appendChild(displayValue);
}
// console.log(btnsArray);

  let operations = document.getElementsByClassName("button");
  let btnsArray1 = [...operations];
  // btnsArray1.forEach((btn) => {
  let divide = document.querySelector('#divide');
  divide.addEventListener('click', function(){
      temporaryHolder = parseInt(document.getElementById("screen").textContent); 
      clarifier();
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
  // setTimeout(operationDivide, 10000);
  await new Promise(resolve => setTimeout(resolve, 3000)); // 3 sec
  let temporaryHolder2 = parseInt(document.getElementById("screen").textContent);
  result = numFromHolder / temporaryHolder2;
  clarifier();
  screenUpdater(result);
}