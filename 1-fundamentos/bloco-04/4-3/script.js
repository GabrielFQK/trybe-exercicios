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

console.log('================')
console.log('Exercício 4')
console.log('================')

let maiorPrimo = 0

let numeroMaximo = 50
let contagemDeNumerosPrimos = 0
let contadorDeNumeros = 0

for (let numero = 2; numero <= numeroMaximo; numero += 1) {
  for (let primo = 1; primo <= numero; primo += 1) {
    if (numero % primo === 0) {
      contadorDeNumeros += 1
    }
  }

  if (contadorDeNumeros === 2) {
    contagemDeNumerosPrimos += 1
    maiorPrimo = numero
  }
  contadorDeNumeros = 0
}

console.log(`Há ${contagemDeNumerosPrimos} números primos entre 0 e ${numeroMaximo}, sendo o maior ${maiorPrimo}`)

console.log('================')
console.log('Bônus 1')
console.log('================')

let n = 5
let quadrado = ''

for (let colunas = 1; colunas <= n; colunas += 1) {
  for (let linhas = 0; linhas <= n; linhas += 1) {
    if (linhas < n) {
      quadrado += '*'
    } else {
      quadrado += '\n'
    }
  }
}

console.log(quadrado)

console.log('================')
console.log('Bônus 2')
console.log('================')

let triangulo = ''

for (let linhas = 1; linhas <= n; linhas += 1) {
  for (let asteriscos = 1; asteriscos <= linhas; asteriscos += 1) {
    triangulo += '*'
    if (asteriscos == linhas) {
      triangulo += '\n'
    }
  }
}

console.log(triangulo)

console.log('================')
console.log('Bônus 3')
console.log('================')

let trianguloInvertido = ''
for (let linhas = 1; linhas <= n; linhas += 1) {
  for (let espacos = n - linhas; espacos >= 0; espacos -= 1) {
    if (espacos === 0) {
      for (let asteriscos = 1; asteriscos <= linhas; asteriscos += 1) {
        trianguloInvertido += '*'
      }
    }
    trianguloInvertido += ' '
  }
  trianguloInvertido += '\n'
}

console.log(trianguloInvertido)
