let bill = 0
let tipPercentage = 0
let numberOfPeople = 0
let buttonSelected = null


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
    if(buttonSelected !== null) {
        buttonSelected.classList.remove("button-selected")
    }


    buttonSelected = document.querySelector(`#button-${value}`)
    buttonSelected.classList.add("button-selected")
    tipPercentage = value / 100

    let customTipInput = document.querySelector("#custom-tip")
    customTipInput.value = ""

    calculate()
}

function receiveCustomTipPercentage (){
    let customTipInput = documment.querySelector("#custom-tip")
    tipPercentage = customTipInput.valuAsNumber /100

    if (buttonSelected!== null){
        buttonSelected.classList.remove("button-selected")
    buttonSelected = null
    }

    calculate()
}

function calculate (){
    if (bill !== 0 && tipPercentage !== 0 && numberOfPeople !== 0) {
        let tiipAmountStrong = document.querySelector(".amount strong")

        let tipAmountperson = (bill * tipPercentage) / numberOfPeople

        tiipAmountStrong.innerText = `$ ${tipAmountperson.toFixed(2)}`

        let totalStrong = document.querySelector(".total strong")

        let total = (bill / numberOfPeople) + tipAmountperson

        totalStrong.innerText = `$ ${total.toFixed(2)}`
    } else {
        console.log ("ainda não é possível calcular")
    }
}

function reset () {
    
}