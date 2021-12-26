// PROCEDIMENTO RECURSIVO

// function(4) => chunk-chunk-chunk-chunk

const recursiveChunk = (num) => {

  //primeiro caso base para simplesmente parar a função quando ela encontrar o parâmentro = 0
  if (num === 0) { return '' }

  //segundo caso base para retornar o último elemento da string (quando o parâmetro recursivo = 1), sem o '-'
  // retorno recursivo para todos os valores acima de 1
  return num === 1 ? 'chunk' : `chunk-${recursiveChunk(num - 1)}`
}

console.log('res 5: ' + recursiveChunk(5))
console.log('res 0: ' + recursiveChunk(0))
console.log('res 1: ' + recursiveChunk(1))
console.log('res 2: ' + recursiveChunk(2))
console.log('res 9: ' + recursiveChunk(9))