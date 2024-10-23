"use strict";

// Criando um array de objetos representando alunos
var alunos = [{
  nome: 'João',
  nota: 7
}, {
  nome: 'Maria',
  nota: 5
}, {
  nome: 'Pedro',
  nota: 8
}, {
  nome: 'Ana',
  nota: 6
}];

// Função para filtrar alunos com nota maior ou igual a 6
function alunosAprovados(alunos) {
  return alunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}

// Chamando a função e armazenando os alunos aprovados em um novo array
var aprovados = alunosAprovados(alunos);

// Imprimindo os alunos aprovados
console.log(aprovados);