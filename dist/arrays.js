"use strict";

var redesSociais = ['Facebook', 'Instagram', 'Twitter'];
for (var i = 0; i < redesSociais.length; i++) {
  console.log('Eu tenho perfil na rede social: ' + redesSociais[i]);
}

// forEach, uns dos metodos para arrays
redesSociais.forEach(function (nomeDaRedeSocial, indice) {
  console.log("#".concat(indice, " Eu tenho perfil na rede social: ").concat(nomeDaRedeSocial));
});
var alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner'];
var alunos2 = alunos.map(function (itemAtual) {
  itemAtual = {
    nome: itemAtual,
    curso: 'Frontend'
  };
  return itemAtual;
});
console.log(alunos2);