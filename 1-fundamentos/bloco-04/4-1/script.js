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

console.log('================')
console.log('Exercício 6')

const pecaXadrez = 'Peão'
const pecaXadrezConvert = pecaXadrez.toLocaleLowerCase()

if (pecaXadrezConvert == 'peão') {
  console.log('o ' + pecaXadrez + ' anda uma casa a frente')
} else if (pecaXadrezConvert == 'bispo') {
  console.log('o ' + pecaXadrez + ' anda na diagonal')
} else if (pecaXadrezConvert == 'cavalo') {
  console.log('o ' + pecaXadrez + ' anda em L')
} else if (pecaXadrezConvert == 'rainha') {
  console.log('a ' + pecaXadrez + ' anda em todas as direções')
} else if (pecaXadrezConvert == 'rei') {
  console.log('o ' + pecaXadrez + ' anda uma casa para qualquer direção')
} else if (pecaXadrezConvert == 'torre') {
  console.log('a ' + pecaXadrez + ' anda na horizontal ou vertical')
} else {
  console.log('peça inválida')
}

console.log('================')
console.log('Exercício 7')

const nota = 60

if (nota >= 90) {
  console.log('A')
} else if (nota >= 80) {
  console.log('B')
} else if (nota >= 70) {
  console.log('C')
} else if (nota >= 60) {
  console.log('D')
} else if (nota >= 50) {
  console.log('E')
} else if (nota < 50) {
  console.log('F')
} else if (nota < 0 || nota > 100) {
  console.log('nota inválida')
}

console.log('================')
console.log('Exercício 8')

const number1 = 2
const number2 = 6
const number3 = 0

if (number1 % 2 == 0 && number2 % 2 == 0 && number3 % 2 == 0) {
  console.log('true')
} else {
  console.log('false')
}

console.log('================')
console.log('Exercício 9')

const number1a = 5
const number2a = 1
const number3a = 7

if (number1a % 2 == 1 && number2a % 2 == 1 && number3a % 2 == 1) {
  console.log('true')
} else {
  console.log('false')
}

