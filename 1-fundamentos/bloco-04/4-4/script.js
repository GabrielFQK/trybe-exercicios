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
