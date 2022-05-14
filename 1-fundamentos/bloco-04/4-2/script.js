let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

console.log('================')
console.log('Exercício 1')
console.log('================')

console.log('Valores do array:')

for (let i = 0; i < numbers.length; i += 1) {
  console.log(numbers[i])
}

console.log('================')
console.log('Exercício 2')
console.log('================')

let soma = 0

for (i = 0; i < numbers.length; i += 1) {
  soma += numbers[i]
}

console.log(`A soma de todos os valores do array é: ${soma}`)

console.log('================')
console.log('Exercício 3')
console.log('================')

let media = soma / numbers.length

console.log(`A média aritimética de todos os valores do array é: ${media}`)

console.log('================')
console.log('Exercício 4')
console.log('================')

if (media > 20) {
  console.log('O valor da média é maior que 20')
} else {
  console.log('O valor da média é menor ou igual a 20')
}

console.log('================')
console.log('Exercício 5')
console.log('================')

let maior = numbers[0]

for (let i = 1; i < numbers.length; i += 1) {
  if (numbers[i] > maior) {
    maior = numbers[i]
  }
}
console.log(`O maior valor do array é: ${maior}`)

console.log('================')
console.log('Exercício 6')
console.log('================')

numImpar = 0

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 2 == 1) {
    numImpar += 1
  }
}

if (numImpar > 0) {
  console.log(`O array possui: ${numImpar} números ímpares`)
} else {
  console.log('Nenhum valor ímpar foi encontrado no array')
}

console.log('================')
console.log('Exercício 7')
console.log('================')

menor = numbers[0]

for (let i = 1; i < numbers.length; i += 1) {
  if (numbers[i] < menor) {
    menor = numbers[i]
  }
}

console.log(`O menor valor do array é: ${menor}`)

console.log('================')
console.log('Exercício 8')
console.log('================')

let numbers2 = []

for (i = 1; i < 26; i += 1) {
  numbers2.push(i)
}

console.log(`Números até 25: \n ${numbers2}`)

console.log('================')
console.log('Exercício 9')
console.log('================')

let numbersDivision = []
for (let number of numbers2) {
  numbersDivision.push(number / 2)
}

console.log(`Números divididos por 2: \n ${numbersDivision}`)

console.log('================')
console.log('Bônus 1')
console.log('================')

for (let indice1 = 1; indice1 < numbers.length; indice1 += 1) {
  for (let indice2 = 0; indice2 < indice1; indice2 += 1) {
    if (numbers[indice2] > numbers[indice1]) {
      let position = numbers[indice2]
      numbers[indice2] = numbers[indice1]
      numbers[indice1] = position
    }
  }
}
console.log(`Valores do array ordenados em ordem crescente: \n ${numbers}`)

console.log('================')
console.log('Bônus 2')
console.log('================')

for (let indice1 = 1; indice1 < numbers.length; indice1 += 1) {
  for (let indice2 = 0; indice2 < indice1; indice2 += 1) {
    if (numbers[indice2] < numbers[indice1]) {
      let position = numbers[indice2]
      numbers[indice2] = numbers[indice1]
      numbers[indice1] = position
    }
  }
}
console.log(`Valores do array ordenados em ordem decrescente: \n ${numbers}`)

console.log('================')
console.log('Bônus 3')
console.log('================')

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

let numbersNew = []

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i + 1] !== undefined) {
    let newNumber = numbers[i] * numbers[i + 1]
    numbersNew.push(newNumber)
  } else {
    numbersNew.push(numbers[i] * 2)
  }
}
console.log(`Valores: \n ${numbersNew}`)
