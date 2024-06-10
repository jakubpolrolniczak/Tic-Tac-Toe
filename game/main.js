console.log('Test JS')

//button reset
const btnOption = document.querySelector('.resetBtn');

btnOption.addEventListener('click', () => {
    console.log('reset Button click!');

    function cleaning() {
        document.getElementById("filed1").innerText = ""
        document.getElementById("filed2").innerText = ""
        document.getElementById("filed3").innerText = ""
        document.getElementById("filed4").innerText = ""
        document.getElementById("filed5").innerText = ""
        document.getElementById("filed6").innerText = ""
        document.getElementById("filed7").innerText = ""
        document.getElementById("filed8").innerText = ""
        document.getElementById("filed9").innerText = ""
    };

    cleaning()
});

//buttons xo
const btnxo = document.querySelectorAll('.fieldxo');

btnxo.forEach((element, index) => element.addEventListener('click', () => gameButton(index)));

function gameButton(value) {
    console.log(`Click on game field no ${value}`)

    switch (value) {
        case 0:
            console.log()
            document.getElementById("filed1").innerText = "X"
            console.log("Input ")
            break
        case 1:
            document.getElementById("filed2").innerText = "X"
            break
        case 2:
            document.getElementById("filed3").innerText = "X"
            break
        case 3:
            document.getElementById("filed4").innerText = "X"
            break
        case 4:
            document.getElementById("filed5").innerText = "X"
            break
        case 5:
            document.getElementById("filed6").innerText = "X"
            break
        case 6:
            document.getElementById("filed7").innerText = "X"
            break
        case 7:
            document.getElementById("filed8").innerText = "X"
            break
        case 8:
            document.getElementById("filed9").innerText = "X"
            break

    }

}






//check if field is busy




//input values = if user clicked on field then  input in this filed X or O
