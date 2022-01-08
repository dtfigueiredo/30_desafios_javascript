//! ESCREVER UM ALGORITMO QUE RECEBA UMA STRING E RETORNE CADA PALAVRA DESSA STRING EM ORDEM REVERSA, PORÉM A STRING DEVE SER MANTIDA NA ORDEM ORIGINAL

const reversedWords = (str) => {
  const reversedStr = str
    .toLowerCase() //transforma qualquer input em caracteres minusculos
    .split(' ') //divide a frase em palavras a cada 'espaço'
    .map(word => word.split('').reverse().join('')) //método para percorrer o array de palavras e inverter a ordem de cada uma delas
    .join(' ') //reorganiza o array em um string

  return reversedStr
}

console.log('res: ' + reversedWords('Testando o programa'))
console.log('res: ' + reversedWords('Lorem ipsum dolore sec avanti'))
console.log('res: ' + reversedWords('This is an apple'))
console.log('res: ' + reversedWords('May the force be with you'))
console.log('res: ' + reversedWords("It's over nine thousand"))