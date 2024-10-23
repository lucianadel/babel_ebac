const redesSociais = ['Facebook', 'Instagram', 'Twitter'];

for (let i = 0; i < redesSociais.length; i++) {
    console.log('Eu tenho perfil na rede social: ' + redesSociais[i]);
}

// forEach, uns dos metodos para arrays
redesSociais.forEach(function (nomeDaRedeSocial, indice) {
    console.log(`#${indice} Eu tenho perfil na rede social: ${nomeDaRedeSocial}`);
})

const alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner'];

const alunos2 = alunos.map(function (itemAtual) {
    itemAtual = {
        nome: itemAtual,
        curso: 'Frontend'
    }
    return itemAtual;
})

console.log(alunos2);