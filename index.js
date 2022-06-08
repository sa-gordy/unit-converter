// let value = 0
// document.getElementById("value-el").textContent = value
// console.log(value)
//a question still remains: why does the value variable work even when you comment out the value thing up top?

function yourNumber() {
  let inputNumber = document.getElementById("input-number").value
  console.log(inputNumber)
  value = inputNumber
  console.log(value)
}

function length() {
    let metersToFeet = value * 3.28084
    metersToFeet = metersToFeet.toFixed(3)
    console.log(metersToFeet)
    
    let feetToMeters = value / 3.28084
    feetToMeters = feetToMeters.toFixed(3)
    console.log(feetToMeters)

    let lengthEl = document.getElementById("length-el")
    
    lengthEl.textContent = value + " meters = " + metersToFeet + " feet" + " | " + value + " feet = " + feetToMeters + " meters"
}

function volume() {
    let litersToGallons = value / 3.785
    litersToGallons = litersToGallons.toFixed(3)
    console.log(litersToGallons)
    
    let gallonsToLiters = value * 3.785
    gallonsToLiters = gallonsToLiters.toFixed(3)
    console.log(gallonsToLiters)

    let volumeEl = document.getElementById("volume-el")
    
    volumeEl.textContent = value + " liters = " + litersToGallons + " gallons" + " | " + value + " gallons = " + gallonsToLiters + " liters"
}

function mass() {
    let kgsToPounds = value * 2.20462
    kgsToPounds = kgsToPounds.toFixed(3)
    console.log(kgsToPounds)
    
    let poundsToKgs = value / 2.20462
    poundsToKgs = poundsToKgs.toFixed(3)
    console.log(poundsToKgs)
    
    let massEl = document.getElementById("mass-el")
    
    massEl.textContent = value + " kilos = " + kgsToPounds + " pounds" + " | " + value + " pounds = " + poundsToKgs + " kilos"
}

// value = 0
// document.getElementById("input-number").value = value
// console.log(value)