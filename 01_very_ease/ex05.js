//! ESCREVER UM ALGORITMO QUE RETORNE, A PARTIR DE UMA STRING, A LETRA COM O VALOR MAIS ALTO SEGUNDO O ALFABETO

const higherLetter = (string) => {
  const letter = Array.from(string.toLowerCase()).sort()
  return letter[letter.length - 1]
}

console.log(higherLetter('Lorem ipsum dolore sec avanti'))
console.log(higherLetter('Hello'))
console.log(higherLetter('May the force be with you'))
console.log(higherLetter('Its over nine thousand'))
console.log(higherLetter('João roubou queijo na casa do Zeca'))