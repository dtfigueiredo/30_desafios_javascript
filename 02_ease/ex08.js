//! ESCREVER UM ALGORITMO QUE RECEBA UMA STRING CONTENDO O NOME COMPLETO E RETORNA UMA STRING COM TODOS OS NOMES, EXCETO O ÚLTIMO, ABREVIADOS E O ÚLTIMO NOME EM LETRAS MAIÚSCULAS ANTES DAS ABREVIAÇÕES SEPARADOS POR VÍRGULA.

//* entrada -> ('Isaac Larrubia Ferreira Pontes') => saída -> 'PONTES, I. L. F.'

const shortedName = (str) => {
  const originalString = str.toUpperCase()
  let inicialLetters = []
  inicialLetters = originalString.split(' ').map(name => name.split('').shift() + '.') //`name.split('').shift().`
  inicialLetters.pop()
  //retirando o utimo nome e transformando em letra maiuscula
  const lastName = originalString.split(' ').pop()
  //concatenando a string final
  const finalString = `${lastName}, ${inicialLetters.join(' ')}`
  console.log(finalString)
}

shortedName('Isaac Larrubia Ferreira Pontes')
shortedName('John Ronald Reuel Tolkien')
shortedName('christopher james paolini')
shortedName('Suzanne Marie Collins')
