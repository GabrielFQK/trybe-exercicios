let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

console.log('Exercício 1')

for (let i = 0; i < numbers.length; i += 1) {
  console.log(numbers[i])
}

console.log('================')
console.log('Exercício 2')

let soma = 0

for (i = 0; i < numbers.length; i += 1) {
  soma += numbers[i]
}

console.log(soma)

console.log('================')
console.log('Exercício 3')

let soma2 = 0

for (let i = 0; i < numbers.length; i += 1) {
  soma2 += numbers[i]
}
let media = soma2 / numbers.length

console.log(media)

console.log('================')
console.log('Exercício 4')

if (media > 20) {
  console.log('valor maior que 20')
} else {
  console.log('valor menor ou igual a 20')
}

console.log('================')
console.log('Exercício 5')

let maior = numbers[0]

for (let i = 1; i < numbers.length; i += 1) {
  if (numbers[i] > maior) {
    maior = numbers[i]
  }
}
console.log(maior)

console.log('================')
console.log('Exercício 6')

numImpar = 0

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 2 == 1) {
    numImpar += 1
  }
}

if (numImpar > 0) {
  console.log(numImpar)
} else {
  console.log('nenhum valor ímpar encontrado')
}

console.log('================')
console.log('Exercício 7')

menor = numbers[0]

for (let i = 1; i < numbers.length; i += 1) {
  if (numbers[i] < menor) {
    menor = numbers[i]
  }
}

console.log(menor)

console.log('================')
console.log('Exercício 8')

let numbers2 = []

for (i = 1; i < 26; i += 1) {
  numbers2.push(i)
}

console.log(numbers2)

console.log('================')
console.log('Exercício 9')

for (let number of numbers2) {
  console.log(number / 2)
}

console.log('================')
console.log('Bônus 1')

for (let indice1 = 1; indice1 < numbers.length; indice1 += 1) {
  for (let indice2 = 0; indice2 < indice1; indice2 += 1) {
    if (numbers[indice2] > numbers[indice1]) {
      let position = numbers[indice2]
      numbers[indice2] = numbers[indice1]
      numbers[indice1] = position
    }
  }
}
console.log(numbers)

console.log('================')
console.log('Bônus 2')

for (let indice1 = 1; indice1 < numbers.length; indice1 += 1) {
  for (let indice2 = 0; indice2 < indice1; indice2 += 1) {
    if (numbers[indice2] < numbers[indice1]) {
      let position = numbers[indice2]
      numbers[indice2] = numbers[indice1]
      numbers[indice1] = position
    }
  }
}
console.log(numbers)

console.log('================')
console.log('Bônus 3')

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

console.log(numbersNew)
