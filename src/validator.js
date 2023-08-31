
const validator = {
  isValid: function (cardNumber){ 
    const  numbersOfCard = cardNumber.split('');
    let sumOfNumbers = 0;

    for (let i = numbersOfCard.length - 1; i >= 0; i--){ 
      if (numbersOfCard.length % 2 === 0){
        if (i % 2 === 0){
          numbersOfCard[i] = numbersOfCard[i] * 2
          if (numbersOfCard[i] > 9){
            const currentNumberArr = numbersOfCard[i].toString().split('')
            numbersOfCard[i] = Number(currentNumberArr[0]) + Number(currentNumberArr[1])
          }
        }
      } else {
        if (i % 2 !== 0){
          numbersOfCard[i] = numbersOfCard[i] * 2
          if (numbersOfCard[i] > 9){
            const currentNumberArr = numbersOfCard[i].toString().split('')
            numbersOfCard[i] = Number(currentNumberArr[0]) + Number(currentNumberArr[1])
          }
        }
      }
      numbersOfCard[i] = Number(numbersOfCard[i])
      sumOfNumbers = sumOfNumbers + numbersOfCard[i] 
    } 
    if (sumOfNumbers % 10 === 0){ 
      return true
    } else {
      return false
    }
  }, 
  maskify: function(cardNumber){
    const maskNumberArr = cardNumber.split('')
    let maskNumber = ""
    for (let i=0; i < maskNumberArr.length; i++){
      if (i < maskNumberArr.length - 4 ){
        maskNumber = maskNumber + "#"
      } else {
        maskNumber = maskNumber + maskNumberArr[i]
      }
    }
    return maskNumber
  }
};

export default validator;
