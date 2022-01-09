//! receber um array e devolver um novo array com as posições invertidas - SEM UTILIZAR MÈTODOS ARRAYS

const gods = ['1-thor', '2-odin', '3-loki', '4-freya', '5-baldur']

// const reverseArray = (arr) => {
//   const reverseGods = []

//   let counter = arr.length

//   while (counter > 0) {
//     poppedGod = arr.pop()
//     reverseGods.push(poppedGod)
//     counter--
//   }

//   return reverseGods
// }

// console.log(reverseArray(gods))

const reverseArray = (arr) => {
  const reversedArray = []
  for (let i = 0; i < arr.length; i++) {
    reversedArray[i] = arr[arr.length - i - 1];
    /* array reverso na pos [i] recebe o array original na posição referente ao comprimento -i -1.
    ex: '5-baldur' => reverso na posição 0 recebe o original na posição [5-0-1] */
  }

  return reversedArray
}

console.log(reverseArray(gods))