import validator from './validator.js';
console.log(validator);

const cardNumberInput = document.querySelector('#card-number-input'); //salvando o elemento do input dentro da variavel
const cardNumber = document.querySelector('.card-number');

const cardNameInput = document.querySelector('#card-name-input');
const cardName = document.querySelector('#full-name-card');

const expMounthInput = document.querySelector('#mounths');
const expMounthCard = document.querySelector('#exp-mm');

const expYearInput = document.querySelector('#years');
const expYearCard = document.querySelector('#exp-yy');

cardNumberInput.oninput = function (event){
    cardNumber.innerText = event.target.value; //mostra o valor do input no campo do cartão
}

cardNameInput.oninput = function (event){
    cardName.innerText = event.target.value;
}

expMounthInput.oninput = function (event){
    expMounthCard.innerText = event.target.value;
}

expYearInput.oninput = function (e){
    expYearCard.innerText = event.target.value;
}
