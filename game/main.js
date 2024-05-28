console.log('Test JS')

//buttons
const btnxo = document.querySelectorAll('.fieldxo');
console.log(btnxo);

const btnOption = document.querySelectorAll('.resetBtn');
console.log(btnOption);



//buttons listeners
btnxo.addEvenListener('click', gameButton);
console.log(gameButton)
btnOption.addEvenListener('click', gameReset);


// functions
function gameButton() {
    if (btnxo === 'x' || 'o') {
        console.log('Click on occupied field');
    }





}

function gameReset() {

}

