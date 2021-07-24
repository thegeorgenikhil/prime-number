var date = document.getElementById("date");
var checkBtn = document.getElementById("btn");
var resultDiv = document.getElementById("result");

checkBtn.addEventListener("click", clickHandler);

function clickHandler() {
  if (date.value.length > 0) {
    var day = parseInt(date.value.slice(8,10));
    console.log(day)
    
  }
}