let quantityF = document.querySelector('#quantityF')
let quantityM = document.querySelector('#quantityM')
let totalPriceBnt = document.querySelector('#totalPriceBnt')
let totalF = document.querySelector('#totalF')
let totalM = document.querySelector('#totalM')
let totatOrder = document.querySelector('#totalOrder')
let totalPriceF
let totalPriceM
let totalValOrder

function calculatePriceF(){
    totalPriceF = (150.95 * quantityF.value).toFixed(2);
    totalF.innerHTML = "R " + totalPriceF
}

function calculatePriceM(){
    totalPriceM = (180.95 * quantityM.value).toFixed(2);
    totalM.innerHTML = "R " + totalPriceM;
}

function calculateTotal(){
    totalValOrder = eval(totalPriceF + "+" + totalPriceM).toFixed(2)
    totalOrder.innerHTML = "R " + totalValOrder;
}

calculatePriceF()
calculatePriceM()

quantityF.addEventListener('change', calculatePriceF)
quantityM.addEventListener('change',calculatePriceM)
totalPriceBnt.addEventListener('click',calculateTotal)