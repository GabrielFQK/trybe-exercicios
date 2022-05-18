// Parte I

console.log('================')
console.log('Parte I')
console.log('================')
console.log('Exercício 1')
console.log('================')

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald'
}

console.log(`Bem-vinda, ${info.personagem}!`)

console.log('================')
console.log('Exercício 2')
console.log('================')

info['recorrente'] = 'Sim'

console.log(info)

console.log('================')
console.log('Exercício 3')
console.log('================')

for (let chave in info) {
  console.log(chave)
}

console.log('================')
console.log('Exercício 4')
console.log('================')

for (let chave in info) {
  console.log(info[chave])
}

console.log('================')
console.log('Exercício 5')
console.log('================')

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
}

console.log(`${info.personagem} e ${info2.personagem}`)
console.log(`${info.origem} e ${info2.origem}`)
console.log(`${info.nota} e ${info2.nota}`)
if (info.recorrente === 'Sim' && info2.recorrente === 'Sim') {
  console.log('Ambos recorrentes')
} else if (info.recorrente === 'Não' && info2.recorrente === 'Não') {
  console.log('Nenhum recorrente')
} else {
  console.log(`${info.recorrente} e ${info2.recorrente}`)
}

console.log('================')
console.log('Exercício 6')
console.log('================')

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas'
    }
  ]
}

console.log(`O livro favorito de ${leitor.nome} ${leitor.sobrenome} se chama '${leitor.livrosFavoritos[0].titulo}'`)

console.log('================')
console.log('Exercício 7')
console.log('================')

leitor.livrosFavoritos.push({
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco'
})

console.log(leitor)

console.log('================')
console.log('Exercício 8')
console.log('================')

console.log(`${leitor.nome} tem ${leitor.livrosFavoritos.length} livros favoritos`)

// Parte II

console.log('================')
console.log('Parte II')
console.log('================')
console.log('Exercício 1')
console.log('================')

let palavra = 'arara'

function verificarPalindromo(palavra) {
  let palavraInvertida = palavra.split('').reverse().join('')

  if (palavra === palavraInvertida) {
    return true
  } else {
    return false
  }
}

console.log(verificarPalindromo(palavra))

console.log('================')
console.log('Exercício 2')
console.log('================')

let arrayDeInteiros = [2, 3, 6, 7, 10, 1]

function indiceDoMaiorValor(arrayDeInteiros) {
  let maiorValor = arrayDeInteiros[0]

  for (let indice = 0; indice < arrayDeInteiros.length; indice += 1) {
    if (arrayDeInteiros[indice] >= maiorValor) {
      maiorValor = arrayDeInteiros[indice]
    }
  }
  return arrayDeInteiros.indexOf(maiorValor)
}
console.log(indiceDoMaiorValor(arrayDeInteiros))

console.log('================')
console.log('Exercício 3')
console.log('================')

let arrayDeInteiros2 = [2, 4, 6, 7, 10, 0, -3]

function indiceDoMenorValor(arrayDeInteiros) {
  let menorValor = arrayDeInteiros[arrayDeInteiros.length - 1]

  for (let indice = arrayDeInteiros.length; indice >= 0; indice -= 1) {
    if (arrayDeInteiros[indice] <= menorValor) {
      menorValor = arrayDeInteiros[indice]
    }
  }
  return arrayDeInteiros.indexOf(menorValor)
}

console.log(indiceDoMenorValor(arrayDeInteiros2))

console.log('================')
console.log('Exercício 4')
console.log('================')

let arrayDeNomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']

function nomeComMaisCaracteres(arrayDeNomes) {
  let contadorDeCaracteres = 0
  let maisCaracteresAtual = arrayDeNomes[0]

  for (let indice = 0; indice < arrayDeNomes.length; indice += 1) {
    contadorDeCaracteres = arrayDeNomes[indice].split('').length
    if (contadorDeCaracteres > maisCaracteresAtual.length) {
      maisCaracteresAtual = arrayDeNomes[indice]
    }
  }
  return maisCaracteresAtual
}

console.log(nomeComMaisCaracteres(arrayDeNomes))
