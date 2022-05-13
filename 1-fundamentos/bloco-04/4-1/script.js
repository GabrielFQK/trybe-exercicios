console.log('Exercício 1')

const a = 10
const b = 5

const adicao = a + b
const subtracao = a - b
const multiplicacao = a * b
const divisao = a / b
const modulo = a % b

console.log(adicao, subtracao, multiplicacao, divisao, modulo)

console.log('================')
console.log('Exercício 2')

const num1 = 4
const num2 = 7

if (num1 > num2) {
  console.log('O primeiro número é maior')
} else {
  console.log('O segundo número é maior')
}

console.log('================')
console.log('Exercício 3')

const numero1 = 6
const numero2 = 2
const numero3 = 7

if (numero1 > numero2 && numero1 > numero3) {
  console.log('O primeiro número é maior')
} else if (numero2 > numero1 && numero2 > numero3) {
  console.log('O segundo número é maior')
} else {
  console.log('O terceiro número é maior')
}
