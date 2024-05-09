"use strict";

const display = document.getElementById("result");
let num1;
let num2;
let operator = "";

const numbers = document.querySelectorAll(".number");

// Adding EventListener to all the numbers
for (let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener("click", function (){
        selectNumber(numbers[i].innerText)
    });
}

// Taking the number an putting it in the result
function selectNumber(selectedNumber){
    
    const result = document.getElementById("result");
    if (result.innerText == "0"){
        result.innerText = selectedNumber;
    } else {
        result.innerText += selectedNumber;
    }
}


const operators = document.querySelectorAll(".operator");

// Adding EventListener to all the operators
for (let i = 0; i < operators.length; i++){
    operators[i]. addEventListener("click", function (){
        // Taking the operator and the first number, then resetting the result
        num1 = parseInt(display.innerText);
        display.innerText = "";
        selectOperator(operators[i].innerText);
    });
}

function selectOperator(selectedOperator){
    operator = selectedOperator;
}

const equal = document.getElementById("equal");

// Taking the second number
equal.addEventListener("click", function(){
    num2 = parseInt(display.innerText);
    display.innerText = operation();
})

// Calculating
function operation(){
    switch (operator){
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "x":
            return num1 * num2;
        case "/":
            return num1 / num2;
   }
}

const reset = document.getElementById("reset");

// Resetting all parameters
reset.addEventListener("click", resetElements)

function resetElements(){
    num1 = "";
    num2 = "";
    operator = "";
    display.innerText = 0;
}