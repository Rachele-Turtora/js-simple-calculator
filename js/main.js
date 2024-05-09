"use strict";

const numbers = document.querySelectorAll(".number");

// Adding EventListener to all the numbers
for (let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener("click", selectNumber);
}

// Taking the number an putting it in the result
function selectNumber(){
    const numberValue = this.innerText;
    
    const result = document.getElementById("result");
    result.innerText = numberValue;
}


const operators = document.querySelectorAll(".operator")

// Adding EventListener to all the operators
for (let i = 0; i < operators.length; i++){
    operators[i]. addEventListener("click", selectOperator);
}

// Taking the operator and the first number, then resetting the result
function selectOperator(){
    const operatorValue = this.innerText;
    let result = document.getElementById("result");
    console.log(operatorValue);
    console.log(result.innerText);
    result.innerHTML = "";
}