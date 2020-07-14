/* ------------------CONTEUDO DO SCRIPT-----------------------
PROPOSIÇÃO LÓGICA:  QUE PODE SER VERDADEIRA OU FALSA
ESTRUTURA DE DECISÃO: IF/ELSE, SWITCH E OPERADOR TERNARIO
FUNÇOES: BLOCO DE CÓDIGO REUTILIZAVEL QUE IMPLEMENTAM ALGORITMOS
*/

// ----------CONDIÇAO IF ELSE-----------
var a = 5;
var b = 6;
if (a > b) {
  console.log(a + ' é maior que ' + b);
} else if (a < b) {
  console.log(a + ' é menor que ' + b);
} else {
  console.log(a + ' é igual a ' + b);
}
// ----------OPERADOR TERNARIO-----------
var operadorTernario = a > b ? 'Maior' : a < b ? 'Menor' : 'Igual';
console.log(operadorTernario);

// ----------SWITCH-----------
var dia = 2;
// prettier-ignore
switch (dia) {
  case 1:console.log('Domingo');break;
  case 2:console.log('Segunda');break;
  case 3:console.log('Terça');break;
  case 4:console.log('Quarta');break;
  case 5:console.log('Quinta');break;
  case 6:console.log('Sexta');break;
  case 7:console.log('Sábado');break;
  default:console.log('Dia Inválido');
}
// ----------REPETIÇÃO WHILE-----------
var i = 1;
var somatorio = 0;
while (i <= 10) {
  somatorio += i;
  i++;
}
console.log(somatorio);
// ----------REPETIÇÃO DO-WHILE-----------
var i = 1;
var somatorio = 0;
do {
  somatorio += i;
  i++;
} while (i <= 10);
console.log(somatorio);

// ----------REPETIÇÃO FOR-----------

var somatorio = 0;
for (var i = 1; i <= 10; i++) {
  somatorio += i;
}
console.log(somatorio);

// ----------FUNÇÕES-----------
function soma(a, b) {
  return a + b;
}
console.log(soma(1, 2));

function compararNumeros(a, b) {
  //return a > b ? 'Maior' : a < b ? 'Menor' : 'Igual';
  if (a > b) {
    return 'Maior';
  } else if (a < b) {
    return 'Menor';
  } else {
    return 'Igual';
  }
}
console.log(compararNumeros(5, 4));
console.log(compararNumeros(3, 4));
console.log(compararNumeros(2, 2));

function superSoma(inicio, fim) {
  var somatorio = 0;
  for (var i = inicio; i <= fim; i++) {
    somatorio += i;
  }
  return somatorio;
}

console.log(superSoma(1, 10));
