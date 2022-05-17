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
