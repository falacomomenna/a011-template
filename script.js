//AUKA DE OBJETOS

//CRIANDO UM OBJETO
const estudante = {
  nome: 'Daniel',
  sobrenome: 'Ribeiro Menna',
  labenumero: '4520539',
  notasDoSemestre: [8, 5.5, 10]
}

console.log(estudante)

//criação de nova propriedade do objeto
estudante.modulo = 'git e terminal'
console.log(estudante)

//acessando propriedades do objeto
console.log('NOME:', estudante.nome)
console.log('SEGUNDA NOTA: ' + estudante.notasDoSemestre[1])
//outra forma de notação para acessar as propriedades do objeto
console.log('MÓDULO: ' + estudante['modulo'])

//criando uma cópia do objeto
const estudanteCopia = { ...estudante }
console.log(estudanteCopia)

//alterar o nome da copia
estudanteCopia.nome = 'Astrodev'
console.log('NOME DO NOVO ESTUDANTE: ', estudanteCopia.nome)
//incluir uma nova nota
estudanteCopia.notasDoSemestre = [...estudanteCopia.notasDoSemestre, 9]
console.log(estudanteCopia.notasDoSemestre)
//alterar o módulo
estudanteCopia['modulo'] = 'Introdução a WEB'
console.log(estudanteCopia.modulo)

//criando um array com os dois objetos
const estudantesLabenu = []
estudantesLabenu.push(estudante, estudanteCopia)
console.log(estudantesLabenu)

//Exercício de Fixação
const carrinho = {
  nome: 'Daniel Menna',
  forma: 'Cartão de Crédito',
  endereco: 'Rua X, 1234',
  compras: [
    { Nome: 'Banana', Preço: 'R$ 2,00', Quantidade: '10' },
    { Nome: 'Maçã', Preço: 'R$ 1,50', Quantidade: '5' },
    { Nome: 'Abacaxi', Preço: 'R$ 1,00', Quantidade: '3' }
  ]
}

console.log('Quantidade de produtos: ', carrinho.compras.length)

const carrinhoPresente = { ...carrinho }
carrinhoPresente.nome = 'João Carlos'
carrinhoPresente.forma = 'Cartão Presente'
console.log(carrinhoPresente)
