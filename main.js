const currecnyElementOne = document.querySelector('#currency-1');
const currecnyElementTwo = document.querySelector('#currency-2');
const amountOne = document.querySelector('#amount-1');
const amountTwo = document.querySelector('#amount-2');
const rateElement = document.querySelector('#rate');
const swapBtn = document.querySelector('#swap');

//fetch exchange rates and update the dom 
function calcualte() {
    const currencyOne = currecnyElementOne.value;
    const currencyTwo = currecnyElementTwo.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOne}`)
        .then(res => res.json())
        .then(data => {
            const rate = data.rates[currencyTwo];
            rateElement.innerText = `1 ${currencyOne} = ${rate} ${currencyTwo}`;
            amountTwo.value = (amountOne.value * rate).toFixed(2);
        });
}
//event listeners
currecnyElementOne.addEventListener('change', calcualte);
amountOne.addEventListener('input', calcualte);
currecnyElementTwo.addEventListener('change', calcualte);
amountTwo.addEventListener('input', calcualte);
swapBtn.addEventListener('click', () => {
    const temp = currecnyElementOne.value;
    currecnyElementOne.value = currecnyElementTwo.value;
    currecnyElementTwo.value = temp;
    calcualte();
});