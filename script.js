let displayValue = document.createElement("div");

let num1 = 8,
num2 = 4,
operation = "",
screenArr = [];

let btns = document.getElementsByClassName("buttonDigit");
let btnsArray = [...btns];

document.getElementById("clear").addEventListener("click", clarifier);
document.getElementById("delete").addEventListener("click", deleter);
document.getElementById("dot").addEventListener("click", dotter);

main();

function main() {
  btnsArray.forEach((btn) => {
    btn.addEventListener("click", digitButtonAssigner, false);
  });
  let operations = document.getElementsByClassName("button");
  let btnsArray1 = [...operations];
  let divide = document.querySelector("#divide");

  // divide.addEventListener("click", operate, false);
  for (let buttonOfArray of btnsArray1) {
    buttonOfArray.addEventListener("click", operate, false);
  }
}
function digitButtonAssigner(btn) {
  if(parseInt(document.getElementById("screen").textContent).toString().length < 11){
    document.getElementById("screen").textContent += btn.srcElement.textContent;
    console.log(parseInt(document.getElementById("screen")).toString().length);
  }
}
function operate(num1, num2, operation) {
  if (operation === "+") {
    return num1 + num2;
  } else if (operation === "-") {
    return num1 - num2;
  } else if (operation === "*") {
    return num1 * num2;
  } else if (operation === "/") {
    result = num1 / num2;
    alert(result);
    return result;
  }
  return num1;
}

function clarifier() {
  document.getElementById("screen").textContent = "";
}
function deleter(){
  let deletedNumber = (document.getElementById("screen").textContent);
  deletedNumber = deletedNumber.slice(0, -1);
  document.getElementById("screen").textContent = "";
  document.getElementById("screen").textContent += deletedNumber;
}
function dotter(){
  let dummyString = document.getElementById("screen").textContent.toString();
  dummyString = dummyString.replace(/\./g,'');
  if(document.getElementById("screen").textContent.toString() == dummyString){
    document.getElementById("screen").textContent += ".";
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
