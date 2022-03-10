let digitButtonsArray = [...document.querySelectorAll('.buttonDigit')];

digitButtonsArray.forEach(button => {
  button.addEventListener('click', function(){
    console.log("hui");
  })
});