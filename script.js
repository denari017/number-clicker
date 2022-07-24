var buttonPlus = document.getElementById("buttonPlus");
var buttonMinus = document.getElementById("buttonMinus");
var reset = document.getElementById("reset");
var cislo = document.getElementById("cislo");

var num = 0

buttonPlus.addEventListener("click", function(){
  num += 1;
  cislo.innerHTML = num;
})

buttonMinus.addEventListener("click", function(){
  num -= 1;
  cislo.innerHTML = num;
})

reset.addEventListener("click", function(){
  num = 0;
  cislo.innerHTML = num;
})