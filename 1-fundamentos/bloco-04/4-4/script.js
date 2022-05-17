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
  console.log(chave);
}
