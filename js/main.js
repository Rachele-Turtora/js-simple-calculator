"use strict";

const numbers = document.querySelectorAll(".number");

for (let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener("click", selectNumber);
}

function selectNumber(){
    const numberValue = this.innerText;
    
    const result = document.getElementById("result");
    result.innerText = numberValue;
}