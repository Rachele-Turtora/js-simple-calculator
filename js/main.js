"use strict";

const display = document.getElementById("result");
let num1;
let num2;
let operator = "";


const buttons = document.querySelector(".buttons");

// Adding EventListener to all the buttons
buttons.addEventListener("click", function(event){
    const buttonValue = event.target;

    if (buttonValue.classList.contains("number")){
        selectNumber(buttonValue.innerText);
    } else if (buttonValue.classList.contains("operator")){
        selectOperator(buttonValue);
    } else if (buttonValue.id === "equal"){
        equal();
    } else {
        resetElements();
    }
})

// Taking the first number and showing it on the display
function selectNumber(selectedNumber){
    
    if (display.innerText == "0"){
        display.innerText = selectedNumber;
    } else {
        display.innerText += selectedNumber;
    }
}

// Taking the operator 
function selectOperator(selectedOperator){
    
    num1 = parseInt(display.innerText);
    display.innerText = "";
    operator = selectedOperator.dataset.operator;
}

// Taking the second number and showing the result on the display
function equal(){
    num2 = parseInt(display.innerText);
    display.innerText = operation();
}

// Calculating
function operation(){
    switch (operator){
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            if (num2 !== 0){
                return num1 / num2;
            } else {
                return "Errore"
            }
   }
}

// Resetting all parameters
function resetElements(){
    num1 = "";
    num2 = "";
    operator = "";
    display.innerText = 0;
}