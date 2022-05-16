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
