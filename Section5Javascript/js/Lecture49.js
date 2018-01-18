var firstNumber = document.getElementById("firstNumber");

var secondNumber = document.getElementById("secondNumber");

var result = document.getElementById("result");

var form = document.getElementById("xIsWhatPercentOfY");

form.addEventListener("submit", function(myEvent){
    
    if(!firstNumber.value || !secondNumber.value){
        alert("Enter values");
    }
    else{
        var x = parseFloat(firstNumber.value);
        var y = parseFloat(secondNumber.value);

        result.innerText = "Result: " + x / y * 100 + "%";
    }
    
    myEvent.preventDefault();
});