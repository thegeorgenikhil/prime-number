var date = document.getElementById("date");
var checkBtn = document.getElementById("btn");
var resultDiv = document.getElementById("result");

checkBtn.addEventListener("click", clickHandler);

function clickHandler() {
  if (date.value.length > 0) {
    var day = parseInt(date.value.slice(8,10));
    resultDiv.style.display = "block";
    if (day === 1){
      resultDiv.innerHTML = "1 is neither prime nor composite";
    }
    else if (day === 2 || day === 3){
      resultDiv.innerHTML = day +" is a prime number";
    }
    else{
      var isPrime = true;
      for (var i = 2;i < Math.floor(day/2); i++){
        if (day % i === 0){
          isPrime = false;
          break;
        }
      }
      if (isPrime === true){
        resultDiv.innerHTML = day + " is a prime number";
      }
      else{
        resultDiv.innerHTML = day + " is not a prime number";
      }
    }
  }
}
