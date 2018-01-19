var selector = document.getElementById("options");
//var output = selector.options[selector.selectedIndex].text;
//console.log(output);
var selectedOption;
selector.addEventListener("click", function(){
    selectedOption = selector.options[selector.selectedIndex].value;
    console.log(selectedOption);
});


var form = document.getElementById("inputfield");
var firstNumber = document.getElementById("firstNumber");
var secondNumber = document.getElementById("secondNumber");
var result = document.getElementById("result");

form.addEventListener("submit", function(myEvent){
    
    var num1 = parseFloat(firstNumber.value);
    var num2 = parseFloat(secondNumber.value);
    if(!firstNumber.value || !secondNumber.value){
        alert("Please input numbers");
    }
    else if(selectedOption == 1){
        result.innerText = "Result: " + (num1 * .01) / num2 + "%";
    }
    else if(selectedOption == 2){
        result.innerText = "Result: " + num1 / (num2 * .01) + "%";      
    }
    else if(selectedOption == 3){
        result.innerText = "Result: " + num1 / num2 * 100 + "%";
    }
    else if(selectedOption == 4){
        result.innerText = "Result: " + num2 / (num1 * .01) + "%";
    }
    else {
        result.innerText =  "Result: " + num1 * .01 * num2 + "%";
    }
    
    myEvent.preventDefault();
});