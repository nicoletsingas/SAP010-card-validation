
const validator = {
  // cardNumber recebe o valor da variavel cardNumberToValidate
    validateCardNumber: function (cardNumber){ 
      const  numbersOfCard = cardNumber.split(''); // split ('') - cria e retorna o array separando a string em elementos individuais
      let sumOfNumbers = 0;
      
      // enquanto o valor de i for menor que o array roda o for
      for (let i=0; i<numbersOfCard.length; i++) { 
        if (i % 2 === 0){ //% modulo
          numbersOfCard[i] = numbersOfCard[i] * 2
          if (numbersOfCard[i] > 9){
           const currentNumberArr = numbersOfCard[i].toString().split('')
           numbersOfCard[i] = Number(currentNumberArr[0]) + Number(currentNumberArr[1])
          }
        } 
        numbersOfCard[i] = Number(numbersOfCard[i])//transforma cada item do array em number
        sumOfNumbers = sumOfNumbers + numbersOfCard[i] //somar todos os valores
      } 
      //console.log(sumOfNumbers)
      //console.log(sumOfNumbers %10)
      if (sumOfNumbers % 10 === 0){
        alert("Seu cartão de Crédito é Válido! Aproveite suas compras!!")
      } else{
        alert("Seu cartão de Crédito não é Válido! Verifique o número digitado ou entre em contato com seu banco!")
      }
    }
};

export default validator; // exporta o objeto
