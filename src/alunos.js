// Criando um array de objetos representando alunos
const alunos = [
    { nome: 'João', nota: 7 },
    { nome: 'Maria', nota: 5 },
    { nome: 'Pedro', nota: 8 },
    { nome: 'Ana', nota: 6 }
];

// Função para filtrar alunos com nota maior ou igual a 6
function alunosAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

// Chamando a função e armazenando os alunos aprovados em um novo array
const aprovados = alunosAprovados(alunos);

// Imprimindo os alunos aprovados
console.log(aprovados);