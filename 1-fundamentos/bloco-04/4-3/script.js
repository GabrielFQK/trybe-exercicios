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
