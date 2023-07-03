


//variables y contenedores
const numbers = [
    { number: ".", value: "." },
    { number: "0", value: 0 },
    { number: "=", value: "igual" },
    { number: "1", value: 1 },
    { number: "2", value: 2 },
    { number: "3", value: 3 },
    { number: "4", value: 4 },
    { number: "5", value: 5 },
    { number: "6", value: 6 },
    { number: "7", value: 7 },
    { number: "8", value: 8 },
    { number: "9", value: 9 }
]
const operations = [
    { operation: "/", value: "/" },
    { operation: "X", value: "x" },
    { operation: "-", value: "-" },
    { operation: "+", value: "+" }
]
const buttons = [
    { label: 'CLEAN', id: 'clear-button' },
    { label: 'DELETE', id: 'delete-button' }
]
let ArrayScriptNumber = []

let number1 = "";
let number2 = "";
let result = "";
let numerWrite = "";
let operationSign = "";



const gridContainer = document.querySelector(".numbers-conainer");
const gridOperationsContainer = document.querySelector(".operations-container");
const numberwriteContainer = document.querySelector(".number");
const resultContainer = document.querySelector(".result")
const buttonsContainer = document.querySelector(".buttons-container")
const deleteButton = document.getElementById("delete-button")
const cleanButton = document.getElementById("clear-button")

main()

//llamado a las funciones 

function main() {
    drawNumbers()
    drawOperations()
    drawButtons()
    resultContainer.innerHTML = result
    //cleanButton.addEventListener("click", () => { clean() })

}



function drawNumbers() {
    let numbers2 = numbers.reverse()

    for (let i = 0; i < numbers2.length; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.innerHTML = numbers2[i].number
        if (numbers2[i].number == "=") {
            gridItem.setAttribute('id', numbers2[i].value)
            gridItem.addEventListener('click', selectEquals)
        } else {
            gridItem.setAttribute('id', numbers2[i].value)
            gridItem.addEventListener('click', seleccionarNumero)
        }

        gridContainer.appendChild(gridItem);
    }

}
function drawOperations() {
    for (let i = 0; i < operations.length; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.innerHTML = operations[i].operation
        gridItem.setAttribute('id', operations[i].value)
        gridItem.addEventListener('click', seleccionarOperacion)
        gridOperationsContainer.appendChild(gridItem);
    }
}
function drawButtons() {
    for (let i = 0; i < buttons.length; i++) {
        const gridItem = document.createElement('button');

        gridItem.innerHTML = buttons[i].label
        gridItem.setAttribute('id', buttons[i].id)
        if (buttons[i].label == "CLEAN") {
            gridItem.classList.add('clear');
            gridItem.addEventListener('click', clean)
        } else {
            gridItem.classList.add('delete');

        }
        buttonsContainer.appendChild(gridItem);
    }
}
function seleccionarNumero(e)/*funciona ok no tocar*/ {
    numberwriteContainer.innerHTML = ""
    numerWrite += e.target.id
    printScreenResult()
}
function seleccionarOperacion(e)/*funcion ok no tocar */ {

    switch (e.target.id) {
        case "/":
            operationSign = "/"
            break;
        case "x":
            operationSign = "x"
            break;
        case "-":
            operationSign = "-"
            break;
        case "+":
            operationSign = "+"
            break;
        default: break;

    }
    agregarAlArray(numerWrite)
    agregarAlArray(operationSign)
    numerWrite = ""
    printScreenResult()

}
function printScreenResult()/*funcion ok no tocar */ {
    numberwriteContainer.innerHTML = ""
    const gridItem = document.createElement('h3');
    gridItem.classList.add('numbersInCalculator');
    numberwriteContainer.appendChild(gridItem);
    gridItem.innerHTML = ArrayScriptNumber.join('') + numerWrite
}
function agregarAlArray(element)/*funcion ok no tocar */ {
    ArrayScriptNumber.push(element)
}
function cleanVariables()/*funcion ok no tocar */ {
    ArrayScriptNumber = []
    numerWrite = ""
}
function clean()/*funcion ok no tocar */ {
    cleanVariables()
    numberwriteContainer.innerHTML = ""
    resultContainer.innerHTML = ""

}
function deleteNumber() {
    numerWrite.slice(0, -1);
}


function selectEquals() {
    debugger
    if (numerWrite != "" && isNaN(ArrayScriptNumber[ArrayScriptNumber.length - 1])) {
        ArrayScriptNumber.push(numerWrite)
    }


    let numberAux1 = "";
    let numberAux2 = "";
    let resultAux = 0;
    let operationSignAux = "";



    ArrayScriptNumber.forEach(x => {

        if (!isNaN(x)) {
            if (numberAux1 == "") {
                numberAux1 = x
            }
            else if (numberAux1 != "") {
                numberAux2 = x
            }
        } else {
            operationSignAux = x
        }
        if (operationSignAux != "" && numberAux1 != "" && numberAux2 != "") {
            resultAux = returnValueAndCalculare(numberAux1, operationSignAux, numberAux2)
            numberAux1 = resultAux;
            numberAux2 = "";
            operationSignAux = "";
        }
    })


    resultContainer.innerHTML = resultAux
    ArrayScriptNumber = []

}

function returnValueAndCalculare(numberone, operation, numbertwo) {
    let resultOfFunction
    switch (operation) {
        case "/":
            resultOfFunction = parseInt(numberone) / parseInt(numbertwo)
            break;
        case "x":
            resultOfFunction = parseInt(numberone) * parseInt(numbertwo)

            break;
        case "-":
            resultOfFunction = parseInt(numberone) - parseInt(numbertwo)

            break;
        case "+":
            resultOfFunction = parseInt(numberone) + parseInt(numbertwo)
            break;
        default:
            resultOfFunction = 0
            break;
    }

    return resultOfFunction
}


