let bill = 0
let tipPercentage = 0
let numberOfPeople = 0


let billInput = documment.querySelector("#bill")
billInput.addEventListner ("input", receiveBillValue)

function receiveBillValue (){
    bill = billInput.valuASNumber
    calculate()
}

let numberOfPeopleInput = documment.querySelector("#people")
numberOfPeopleInput.addEventListner("input", receiveNumberOfPeople)

function receiveNumberOfPeople() {
    numberOfPeople = numberOfPeopleInput.valuAsNumber
    calculate()
}

function receiveTipPercentage (value) {
    let buttonSelected = document.querySelector()
}

function calculate (){
    if (bill !== 0 && tipPercentage !== 0 && numberOfPeople !== 0) {
        console.log("calcular")
    } else {
        console.log ("ainda não é possível calcular")
    }
}