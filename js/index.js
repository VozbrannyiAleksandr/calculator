const result = document.querySelector('.calculator .result'),
memoryNewNumber = false;

document.querySelectorAll('.calculator .digits button, .calculator .opers button')
    .forEach( button => button.addEventListener('click', digitOperPressed));

function digitOperPressed(event) {
    const btnText = event.target.innerText;
    result.value += btnText;
}

document.querySelector('.calculator .equal')
    .addEventListener('click', eqPressed);

function eqPressed() {
    if(eval(result.value) === Infinity) {
        result.value = "Unavailable";
    }
    result.value = eval(result.value);
}

document.querySelector('.calculator .deleteAll')
    .addEventListener('click', deleteAllPressed);

function deleteAllPressed () {
    result.value = result.value = "";
}


document.querySelector('.calculator .deleteLast')
    .addEventListener('click', dltPressed);
function dltPressed() {
    const numbers = result.value;
    result.value = numbers.slice(0, -1);
}

document.querySelector('.calculator .opers button')
    .forEach( button => button.addEventListener('click', sameSymbol));

function sameSymbol(event) {
    const oper = event.target.innerText;
    const lastSymbol = result.value.length -1;
    if(lastSymbol === oper) {
        result.value = result.value.slice(0, -1) + sameSymbol;
    }
    result.value += oper;
}


// document.querySelectorAll('.calculator .opers button').innerText
//     .addEventListener('click', sameOper);
//     function sameOper() {
//         const sameSymbol = document.querySelectorAll('.calculator .opers button').innerText;
//         if(result.value === sameSymbol){fail;}
//     }
