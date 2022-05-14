console.log('================')
console.log('Exercício 1')
console.log('================')

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
console.log('================')

const num1 = 4
const num2 = 7

if (num1 > num2) {
  console.log('O primeiro número é maior')
} else {
  console.log('O segundo número é maior')
}

console.log('================')
console.log('Exercício 3')
console.log('================')

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
console.log('================')

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
console.log('================')

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
console.log('================')

const pecaXadrez = 'Peão'
const pecaXadrezConvert = pecaXadrez.toLocaleLowerCase()

if (pecaXadrezConvert == 'peão') {
  console.log('O ' + pecaXadrez + ' se move uma casa a frente')
} else if (pecaXadrezConvert == 'bispo') {
  console.log('O ' + pecaXadrez + ' se move na diagonal')
} else if (pecaXadrezConvert == 'cavalo') {
  console.log('O ' + pecaXadrez + ' se move em formato de L')
} else if (pecaXadrezConvert == 'rainha') {
  console.log('A ' + pecaXadrez + ' se move em todas as direções')
} else if (pecaXadrezConvert == 'rei') {
  console.log('O ' + pecaXadrez + ' Se move uma casa para qualquer direção')
} else if (pecaXadrezConvert == 'torre') {
  console.log('A ' + pecaXadrez + ' Se move na horizontal ou vertical')
} else {
  console.log('Peça inválida')
}

console.log('================')
console.log('Exercício 7')
console.log('================')

const nota = 60

if (nota >= 90) {
  console.log('Nota A')
} else if (nota >= 80) {
  console.log('Nota B')
} else if (nota >= 70) {
  console.log('Nota C')
} else if (nota >= 60) {
  console.log('Nota D')
} else if (nota >= 50) {
  console.log('Nota E')
} else if (nota < 50) {
  console.log('Nota F')
} else if (nota < 0 || nota > 100) {
  console.log('Nota inválida')
}

console.log('================')
console.log('Exercício 8')
console.log('================')

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
console.log('================')

const number1a = 5
const number2a = 1
const number3a = 7

if (number1a % 2 == 1 && number2a % 2 == 1 && number3a % 2 == 1) {
  console.log('true')
} else {
  console.log('false')
}

console.log('================')
console.log('Exercício 10')
console.log('================')

const precoCusto = 20
const precoVenda = 50

const lucro = precoVenda - (precoCusto + precoCusto * 0.2)

if (precoCusto < 0 || precoVenda < 0) {
  console.log('Valores não podem ser menores que 0')
} else {
  console.log('Lucro ao vender 1000 peças: ' + lucro * 1000)
}

console.log('================')
console.log('Exercício 11')
console.log('================')

const salarioBruto = 3000
let inss

if (salarioBruto <= 1556.94) {
  inss = salarioBruto * 0.8
} else if (salarioBruto <= 2594.92) {
  inss = salarioBruto * 0.9
} else if (salarioBruto <= 5189.82) {
  inss = salarioBruto * 0.11
} else if (salarioBruto > 5189.82) {
  inss = 570.88
}

const salarioBase = salarioBruto - inss
let ir

if (salarioBase <= 1903.98) {
  ir = 0
} else if (salarioBase <= 2826.65) {
  ir = salarioBase * 0.075 - 142.8
} else if (salarioBase <= 3751.05) {
  ir = salarioBase * 0.015 - 354.8
} else if (salarioBase <= 4664.68) {
  ir = salarioBase * 0.225 - 636.13
} else if (salarioBase > 4664.68) {
  ir = salarioBase * 0.275 - 869.36
}

const salarioLiquido = salarioBase - ir

console.log('O salário Líquido é: ' + salarioLiquido)
