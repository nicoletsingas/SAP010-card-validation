import validator from './validator.js';
console.log(validator);

/* Mostrar os dados dos inputs no cartão*/

const cardNumberInput = document.querySelector('#card-number-input'); //salvando o elemento do input dentro da variavel
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
    cardNumber.innerText = event.target.value //mostra o valor do input no campo do cartão
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
    cvvCard.innerText = e.target.value /* "e" de event*/
};

formSubmit.onsubmit = function (e){
    let cardNumberToValidate = cardNumberInput.value //pegando valor do input e armazenando em uma variavel
    validator.validateCardNumber(cardNumberToValidate) // chamar a função que esta na pagina validator.js e enviar o parametro
};

/* Animação rotação do cartão conforme passa o mouse em cima do input CVV*/
cvvInput.onmouseenter = function (){
	document.querySelector('.front-card').style.transform = 'perspective(1000px) rotateY(180deg)'
	document.querySelector('.back-card').style.transform = 'perspective(1000px) rotateY(0deg)'
};

// onmouseleave - quando o mouse "sair" do campo
cvvInput.onmouseleave = function (){ 
	document.querySelector('.front-card').style.transform = 'perspective(1000px) rotateY(0deg)'
	document.querySelector('.back-card').style.transform = 'perspective(1000px) rotateY(180deg)'
};

