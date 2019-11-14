const rezult = document.querySelector('.calculator .rezult'),
memoryNewNumber = false;

document.querySelectorAll('.calculator .digits button, .calculator .opers button')
    .forEach( button => button.addEventListener('click', digitOperPressed));

function digitOperPressed(event) {
    const btnText = event.target.innerText;
    rezult.value += btnText;
}

document.querySelector('.calculator .equal')
    .addEventListener('click', eqPressed);

function eqPressed() {
    rezult.value = eval(rezult.value);
}

document.querySelector('.calculator .deleteAll')
    .addEventListener('click', deleteAllPressed);

function deleteAllPressed () {
    rezult.value = rezult.value = "";
}


document.querySelector('.calculator .deleteLast')
    .addEventListener('click', dltPressed);
function dltPressed() {
    const numbers = rezult.value;
    rezult.value = numbers.slice(0, -1);
} 

document.querySelectorAll('.calculator .opers button').innerText
    .addEventListener('click', sameOper);
    function sameOper() {
        const sameSymbol = document.querySelectorAll('.calculator .opers button').innerText;
        if(rezult.value === sameSymbol){fail;}
    }
