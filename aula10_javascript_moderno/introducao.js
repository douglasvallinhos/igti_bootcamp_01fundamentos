'use strict'; // JAVASCRIPT ACUSA MAIS ERROS




//----------------var let e const----------------

//VAR TEM ESCOPO ABRANGENTE
//LET TEM ESCOPO REDUZIDO
//CONST NAO PODE REATRIBUIR VALORES, ESCETO SE FOR UM OBJECT(ARRAY)


//EXEMPLO ESCOPO DE VAR:
testVar();
function testVar() {
    for(var i = 0; i < 5; i++ ){
        console.log(i)
    }
    i = 99;
    console.log(i);
    //obs: o escopo de VAR deixou fora do 'for' mudar a variavel 'i'
}

testLet();
function testLet() {
    for(let i = 0; i < 5; i++ ){
        console.log(i)
    }
    i = 99;
    console.log(i);
    //obs: aqui usando LET ocasionara um erro por a variavel 'i' só existe dentro do 'for'
}

testConst();
function testConst() {
    const numero = 0;
    numero = 2;
    //obs:  ocasiona um erro pois valores de const nao podem ser reatribuidos;

    const numero2 = [0];
    numero2.push(1);
    //obs: somente em objects arrays como no caso acima que const pode ser alterado.
}






//-------------ARROW FUNCTIONS---------------

//FUNCAO TRADICIONAL

function soma(a,b) {
    return a + b;
}

//FUNCAO ANONIMA
const anonima = function somaAnonima(a,b) {
return a + b;
}

//ARROW FUNCTION
const anonima2 = (a,b) =>{
    return a +b;
}
//ARROW FUNCTION EM UMA LINHA
const mini = (a,b) => a + b;


//-------------TEMPLATE LITERALS----------------

const nome = 'douglas';
const sobrenome = 'vallinhos';
const idade = 28;

console.log('Meu nome é ' + nome + ', meu sobrenome é ' + sobrenome + ',  e tenho ' + idade + ' anos.');

//usando template literals essa mesma frase ficaria assim:

console.log(`Meu nome é ${nome}, meu sobrenome é ${sobrenome},  e tenho ${idade} anos.`);

//------------------DEFAULT PARAMTERS-----------------

//funcoes usando default paramters

const soma2Numeros = (a = 10 , b = 10) => a + b;

soma2Numeros(5);
//obs: foi criado uma funçao de 2 parametros, mas foi cahamdo apenas com um parametro '5'
//como colocamos o valor '10' como default (b = 10),,, o javascript colocara 0 valor 10 para b
// e retorna o resultado = 15
