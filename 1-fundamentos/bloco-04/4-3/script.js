console.log('================')
console.log('Exercício 1')
console.log('================')

let fat = 10
let resultado = fat
let contador = ''
for (let i = fat; i > 0; i -= 1) {
  if (i > 1) {
    resultado *= i - 1
    contador += i + ' x '
  } else {
    contador += '1 = ' + resultado
  }
}

console.log(`Fatorial: \n${fat}! = ${contador}`)

console.log('================')
console.log('Exercício 2')
console.log('================')

let palavra = 'paçoquinha'
let palavraInvertida = ''

for (let i = palavra.length - 1; i >= 0; i -= 1) {
  palavraInvertida += palavra[i]
}

console.log(`A palavra "${palavra}" ao contrário ficaria: "${palavraInvertida}"`)

console.log('================')
console.log('Exercício 3')
console.log('================')

let array = ['java', 'javascript', 'python', 'html', 'css']

let menorPalavraDoArray
let maiorPalavraDoArray
let contadorMenorPalavra = array[0].length
let contadorMaiorPalavra = array[0].length

for (let i = 0; i < array.length; i += 1) {
  let caracteres = array[i].length

  if (caracteres <= contadorMenorPalavra) {
    menorPalavraDoArray = array[i]
    contadorMenorPalavra = caracteres
  }

  if (caracteres >= contadorMaiorPalavra) {
    maiorPalavraDoArray = array[i]
    contadorMaiorPalavra = caracteres
  }
}

console.log(`A maior palavra do array é: ${maiorPalavraDoArray}`)
console.log(`A menor palavra do array é: ${menorPalavraDoArray}`)
