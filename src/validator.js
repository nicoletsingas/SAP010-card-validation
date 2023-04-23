
const validator = {
  isValid: function (cardNumber){ // cardNumber recebe o valor da variavel cardNumberToValidate
    const  numbersOfCard = cardNumber.split(''); // split ('') - cria e retorna o array separando a string em elementos individuais
    let sumOfNumbers = 0;

    for (let i = numbersOfCard.length - 1; i >= 0; i--){
      if(numbersOfCard.length % 2 === 0){
        if (i % 2 === 0){
          numbersOfCard[i] = numbersOfCard[i] * 2
          if (numbersOfCard[i] > 9){
            const currentNumberArr = numbersOfCard[i].toString().split('')
            numbersOfCard[i] = Number(currentNumberArr[0]) + Number(currentNumberArr[1])
          }
        }
      }else{
        if (i % 2 !== 0){
          numbersOfCard[i] = numbersOfCard[i] * 2
          if (numbersOfCard[i] > 9){
            const currentNumberArr = numbersOfCard[i].toString().split('')
            numbersOfCard[i] = Number(currentNumberArr[0]) + Number(currentNumberArr[1])
          }
        }
      }
      numbersOfCard[i] = Number(numbersOfCard[i])//transforma cada item do array em number
      sumOfNumbers = sumOfNumbers + numbersOfCard[i] //somar todos os valores
    }
    if (sumOfNumbers % 10 === 0){
      return true
    } else{
      return false 
    }
  }, 
  maskify: function(cardNumber){
    const maskNumberArr = cardNumber.split('')
    let maskNumber = ""
    for (let i=0; i < maskNumberArr.length; i++){
      if (i < maskNumberArr.length - 4 ){
        maskNumber = maskNumber + "*" // recebe o valor de *
      }else{
        maskNumber = maskNumber + maskNumberArr[i] //recebe o valor dela + o numero
      }
    }
    return maskNumber
  }
}; // fim do objeto

export default validator; // exporta o objeto


/* Numero de cartão válido para teste: 5506 4100 8437 0252*/
/* Numero de cartao não valido para teste: 1234 5678 9987 4563*/