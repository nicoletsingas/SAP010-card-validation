import validator from './validator.js';

const cardNumberInput = document.querySelector('#card-number-input'); 
const cardNumber = document.querySelector('.card-number');

const cardNameInput = document.querySelector('#card-name-input');
const cardName = document.querySelector('#full-name-card');

const expMounthInput = document.querySelector('#mounths');
const expMounthCard = document.querySelector('#exp-mm');

const expYearInput = document.querySelector('#years');
const expYearCard = document.querySelector('#exp-yy');

const cvvInput = document.querySelector('#cvv-card-input');
const cvvCard = document.querySelector('.cvv-field');

const formSubmit = document.querySelector('#form');

cardNumberInput.oninput = function (event){
  cardNumber.innerText = event.target.value
};

cardNameInput.oninput = function (event){
  cardName.innerText = event.target.value
};

expMounthInput.oninput = function (event){
  expMounthCard.innerText = event.target.value
};

expYearInput.oninput = function (event){
  expYearCard.innerText = event.target.value
};

cvvInput.oninput = function (e){
  cvvCard.innerText = e.target.value
};

formSubmit.onsubmit = function (e){
  e.preventDefault(); 
  const cardNumberToValidate = cardNumberInput.value 
  const validNumber = validator.isValid(cardNumberToValidate) 
  if (validNumber === true){
    alert("Seu cartão de Crédito é Válido! Aproveite suas compras!!")
  } else {
    alert("Seu cartão de Crédito não é Válido! Verifique o número digitado ou entre em contato com seu banco!") 
  }
  const finalMaskedNumber = validator.maskify(cardNumberToValidate)
  cardNumber.innerText = finalMaskedNumber
};

cvvInput.onmouseenter = function (){
  document.querySelector('.front-card').style.transform = 'rotateY(180deg)'
  document.querySelector('.back-card').style.transform = 'rotateY(0deg)'
};

cvvInput.onmouseleave = function (){ 
  document.querySelector('.front-card').style.transform = 'rotateY(0deg)'
  document.querySelector('.back-card').style.transform = 'rotateY(180deg)'
};

