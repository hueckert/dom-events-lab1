//console.log("santiy check")

/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const display = document.querySelector(".display")
const buttonOperator = document.querySelector(".button operator")

/*-------------------------------- Variables --------------------------------*/

let firstIput = null
let secondInput = null
let operator = null
let result = null

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

// calculator.addEventListener('click', (event) => {
//     // This log is for testing purposes to verify we're getting the correct value
//     // You have to click a button to see this log
//     console.log(event.target.innerText);
  
//     // Example
//     if (event.target.classList.contains('number')) {
//       // Do something with a number
//     }
  
//     // Example
//     if (event.target.innerText === '*') {
//       // Do something with this operator
//     }
//   });
  

calculator.addEventListener('click', (event)=>{

    if (event.target.className === "button number") {
        if(!operator) {
            if(display.innerText.length < 15) {
                display.innerText += event.target.innerText
                firstIput = +display.innerText
            }
        } else {
            if(display.innerText.length < 15) {
                display.innerText += event.target.innerText
                secondInput = +display.innerText
            }
        }
        console.log({firstIput, secondInput, operator})
    }
    if (event.target.className === "button operator") {
        operator = event.target.innerText
        display.innerText = ""
        console.log(operator)
    }

    if (event.target.innerText === "=" && (firstIput || firstIput === 0) && (secondInput || secondInput === 0) && operator) {
        if (operator === "/") {
            result = firstIput / secondInput
        }
        if (operator === "*") {
            result = firstIput * secondInput
        }
        if(operator === "-") {
            result = firstIput - secondInput
        }
        if (operator === "+") {
            result = firstIput + secondInput
        }

        firstIput = result
        if (result.toString().length < 15) {
            display.innerText = result
        } else {
            display.innerText = result.toPrecision(11)
        }
        console.log(result)
    }

    if (event.target.innerText === "C") {
        result = null
        firstIput = null
        secondInput = null
        operator = null
    }

})


