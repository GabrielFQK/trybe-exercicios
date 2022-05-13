let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

console.log('Exercício 1')

for (let i = 0; i < numbers.length; i += 1) {
  console.log(numbers[i])
}

console.log('================')
console.log('Exercício 2')

let soma = 0;

for (i = 0; i < numbers.length; i += 1) {
  soma += numbers[i] 
}

console.log(soma);