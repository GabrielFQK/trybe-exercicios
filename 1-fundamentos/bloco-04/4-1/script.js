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

console.log('================')
console.log('Exercício 4')

const value = 5

if (value > 0) {
  console.log('positive')
} else if (value < 0) {
  console.log('negative')
} else {
  console.log('zero')
}

console.log('================')
console.log('Exercício 5')

const angulo1 = 20
const angulo2 = 40
const angulo3 = 120

const somaAngulos = angulo1 + angulo2 + angulo3

if (somaAngulos != 180) {
  console.log('Não é um triângulo')
} else if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0) {
  console.log('Ângulo não pode ser menor que 0')
} else {
  console.log('É um triângulo')
}
