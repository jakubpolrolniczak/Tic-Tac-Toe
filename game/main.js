console.log('Test JS')

//button reset
const btnOption = document.querySelector('.resetBtn');
btnOption.addEventListener('click', () => {
    console.log('reset Button click!');
});

//buttons xo
const btnxo = document.querySelectorAll('.fieldxo');
btnxo.forEach((element, index) => element.addEventListener('click', () => gameButton(index)));

//game

function gameButton(value) {
    console.log(`Click on game field ${value + 1}`)
}

fieldxo.addEventListener('click', play => {
    console.log('click on free field')
})
