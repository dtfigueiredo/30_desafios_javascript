//! ESCREVER UM ALGORITMO QUE RECEBA UM ARRAY BIDIMENSIONAL DE NÚMEROS INTEIROS E RETORNE UM ÚNICO ARRAY COM TODOS OS NÚMEROS EM ORDEM CRESCENTE

const orderedArray = (arr) => {
  const inicialArray = arr
  let finalArray = []
  inicialArray.map(matrix => finalArray.push(...matrix))
  finalArray.sort((a, b) => a - b)
  return finalArray
}

console.log(orderedArray([[1, 5, 3], [6, 19, 11], [47, 128, 5], [1, 93, 57, 42, 103]]))
console.log(orderedArray([[1, 3], [4, 8], [7, 5], [2, 6]]))
console.log(orderedArray([[], [], [], []]))
console.log(orderedArray([[100, 50], [60, 100], [20, 100, 70], [10, 40, 80, 90]]))
