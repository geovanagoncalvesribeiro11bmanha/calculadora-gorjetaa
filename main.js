let bill = 0
let tipPercentage = 0
let numberOfPeople = 0

let billInput = document.querySelector("#bill")
billInput.addEventListener("input", receiveBillValue)

function receiveBillValue (){
    bill = billInput.valueAsNumeber
}

let numberOfPeopleInput = document.querySelector("#people")
numberOfPeopleInput.addEventListener("input", receiveNumberOfPeople )

function receiveNumberOfPeople(){
    numberOfPeople = numberOfPeopleInput.valueAsNumeber
    calculate()
}

function receiveTipPercentage(value) {
    let buttonSelected = document.querySelector()
}

function calculate() {
    if (bill !== 0 && tipPercentage !== 0 && numberOfPeople !== 0) {
        console.log("calcular")
    } else {
        console.log("ainda não é possível calcular")
    }
}