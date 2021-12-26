const calcMedia = (numbers) => {
  //poderíamos desestruturar esse array usando restParams -> (...numbers) e na chamada da função dispensar os []
  const sum = numbers.reduce((acc, index) => acc + index, 0)
  const average = sum / numbers.length
  return average
}

console.log(calcMedia([1, 2, 3]))
console.log(calcMedia([7, 8, 9]))
console.log(calcMedia([1, -2, 3]))