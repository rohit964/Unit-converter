

function inputChange(){
    const value = document.getElementById('input').value
    const toChange = document.querySelectorAll('.toChange')
    toChange.forEach ((element) => {
        element.textContent = value
    })

    // Meter and Feet
    const feets = document.querySelector('.feets') 
    const meters = document.querySelector('.meters')
    feets.textContent = (3.281 * value).toFixed(3)
    meters.textContent = (0.305 * value).toFixed(3)

    // Liters and Gallons
    const gallons = document.querySelector('.gallons')
    const liters = document.querySelector('.liters')
    gallons.textContent = (0.264 * value).toFixed(3)
    liters.textContent = (3.785* value).toFixed(3)

    // Kilograms and Pounds
    const pounds = document.querySelector('.pounds')
    const kilos = document.querySelector('.kilos')
    pounds.textContent = (2.205 * value).toFixed(3)
    kilos.textContent = (0.453 * value).toFixed(3)

}