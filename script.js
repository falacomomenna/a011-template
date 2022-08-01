//AUKA DE OBJETOS

//CRIANDO UM OBJETO
const estudante = {
  nome: 'Daniel',
  sobrenome: 'Ribeiro Menna',
  labenumero: '4520539',
  notasDoSemestre: [8, 5.5, 10]
}

console.log(estudante)

estudante.modulo = 'git e terminal'
console.log(estudante)

console.log(estudante.nome, estudante.notasDoSemestre[1], estudante.modulo)

console.log('NOME:', estudante.nome)
console.log('SEGUNDA NOTA: ' + estudante.notasDoSemestre[1])
console.log('MÓDULO: ' + estudante['modulo'])
