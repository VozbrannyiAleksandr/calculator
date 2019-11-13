const display = document.querySelector('.calc .display');
document.querySelectorAll('.calc .digits button, .calc .opers button')
    .forEach( button => button.addEventListener('click', digitOperPressed));

function digitOperPressed(event) {
    const btnText = event.target.innerText;
    display.value += btnText;
}

document.querySelector('.calc .eq')
    .addEventListener('click', eqPressed);

function eqPressed() {
    display.value = eval(display.value);
}

