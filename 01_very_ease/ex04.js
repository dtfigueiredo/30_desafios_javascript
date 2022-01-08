//! ESCREVER UM ALGORITMO QUE RESCEBE UM NÚMERO QUALQUER E SEPARE SEUS DÍGITOS, ELEVE ESSES DÍGITOS AO QUADRADO E CONCATE O RESULTADO EM UM NOVO NÚMERO 

const spaceTripCalc = (num) => {
  const squaredNums = Array.from(num.toString()).map(number => Math.pow(number, 2)).join('')
  return Number(squaredNums)
}

console.log(spaceTripCalc(3514))
console.log(spaceTripCalc(994571))
console.log(spaceTripCalc(24))
console.log(spaceTripCalc(745821698))