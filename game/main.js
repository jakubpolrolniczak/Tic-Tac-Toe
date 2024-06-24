import {
    cleaning
} from './cleaning.js'

//always cleaning at start
cleaning();

//reset button
const btnOption = document.querySelector('.resetBtn');

btnOption.addEventListener('click', () => {
    console.log('Click on reset button');
    cleaning();
});



//buttons xo
const btnxo = document.querySelectorAll('.fieldxo');

btnxo.forEach((element, index) => element.addEventListener('click', () => gameButton(index)));

function gameButton(value) {
    console.log(`Click on game field no ${value}`)

    switch (value) {
        case 0:
            console.log(document.getElementById("filed1").innerHTML)
            if (document.getElementById("filed1").innerHTML !== '') {
                console.log('Field occupied')
                break
            } else {
                console.log('Input Value')
                document.getElementById("filed1").innerText = "X"
                break
            }
        case 1:
            console.log(document.getElementById("filed2").innerHTML)
            if (document.getElementById("filed2").innerHTML !== '') {
                console.log('Field occupied')
                break
            } else {
                console.log('Input Value')
                document.getElementById("filed2").innerText = "X"
                break
            }
        case 2:
            console.log(document.getElementById("filed3").innerHTML)
            if (document.getElementById("filed3").innerHTML !== '') {
                console.log('Field occupied')
                break
            } else {
                console.log('Input Value')
                document.getElementById("filed3").innerText = "X"
                break
            }
        case 3:
            console.log(document.getElementById("filed4").innerHTML)
            if (document.getElementById("filed4").innerHTML !== '') {
                console.log('Field occupied')
                break
            } else {
                console.log('Input Value')
                document.getElementById("filed4").innerText = "X"
                break
            }
        case 4:
            console.log(document.getElementById("filed5").innerHTML)
            if (document.getElementById("filed5").innerHTML !== '') {
                console.log('Field occupied')
                break
            } else {
                console.log('Input Value')
                document.getElementById("filed5").innerText = "X"
                break
            }
        case 5:
            console.log(document.getElementById("filed6").innerHTML)
            if (document.getElementById("filed6").innerHTML !== '') {
                console.log('Field occupied')
                break
            } else {
                console.log('Input Value')
                document.getElementById("filed6").innerText = "X"
                break
            }
        case 6:
            console.log(document.getElementById("filed7").innerHTML)
            if (document.getElementById("filed7").innerHTML !== '') {
                console.log('Field occupied')
                break
            } else {
                console.log('Input Value')
                document.getElementById("filed7").innerText = "X"
                break
            }
        case 7:
            console.log(document.getElementById("filed8").innerHTML)
            if (document.getElementById("filed8").innerHTML !== '') {
                console.log('Field occupied')
                break
            } else {
                console.log('Input Value')
                document.getElementById("filed8").innerText = "X"
                break
            }
        case 8:
            console.log(document.getElementById("filed9").innerHTML)
            if (document.getElementById("filed9").innerHTML !== '') {
                console.log('Field occupied')
                break
            } else {
                console.log('Input Value')
                document.getElementById("filed9").innerText = "X"
                break
            }
    }
}



//input values = if user clicked on field then input X or O alternately | always start X

//checking last move
const checkValues = btnxo.forEach((element) => console.log(element.innerHTML));
console.log(checkValues)







//check winner

