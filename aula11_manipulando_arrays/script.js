window.addEventListener('load', () => {
    mapArray();
    filterArray();
    foreachArray();
    reduceArray();
    findArray();
    someArray();
    everyArray();
    sortArray();
});
function mapArray() {
    //MAP: CONSEGUIMOS LER A API E CRIAR UMA NOVA ARRAY APENAS COM OS PARAMETROS QUE QUEREMOS
    //OBS: NO EXEMPLO ABAIXO CAPTURAMOS O ARRAY PEOPLE, E CRIAMOS A CONST nomeEmailArray PARA RECEBER APENAS name e email
    const nomeEmailArray = people.results.map(pessoa =>{
        return {
            name: pessoa.name,
            email: pessoa.email
        };
    });
    console.log(nomeEmailArray);
    return nomeEmailArray;
}
function filterArray() {
    //FILTER: FILTRA PARA UMA CONDIÇÃO E SALVA TODOS QUE FOR TRUE (VERDADEIRO)
    //OBS: ABAIXO ESTAMOS FILTRANDO TODOS QUE TEM MAIS DE 60 ANOS
    const maiorDe60Anos = people.results.filter(pessoa => {
        return pessoa.dob.age > 60;
    });
    console.log(maiorDe60Anos);
}

function foreachArray() {
    //forEach: Atua dentro do array, modificando o original, e nao criando um novo como os vistos anteriores
    //então por esse motivo, no exemplo abaixo utilizamos o mapArray(); para nao modificar o people.js original
    //forEach atua em todos os dados gravados, abaixo adicionamos uma nova propriedade 'nameSize' que esta somando os caracteres do nome completo de cada pessoa
    const tamanhoNome = mapArray();
    tamanhoNome.forEach(pessoa => {
        pessoa.nameSize = pessoa.name.title.length + pessoa.name.first.length + pessoa.name.last.length;
    });
}

function reduceArray() {
    //Reduce: acumula uma soma de algo expecifico de cada pessoa
    // NO EXEMPLO ABAIXO ESTAMOS SOMANDO O TOTAL DA SOMA DAS IDADES DE TODAS AS PESSOAS
    const totalIdade = people.results.reduce((accumulator, current) => {
        return accumulator + current.dob.age;
    },0);
    console.log(totalIdade);
    //PARA EXEMPLIFICAR MAIS FAREMOS A MESMA SOMA USANDO O METODO ANTIGO FOR
    //  let soma = 0;
    //  for(let i = 0; i < people.results.length; i++){
    //      let currentIdade = people.results[i];
    //      soma += currentIdade.dob.age;
    //  }
    //  console.log(soma);
}

function findArray() {
    //Find: Busca no array por algo e retorna apenas o primeiro que encontrar
    // no exemplo abaixo buscamos pela primeira pessoa do estado de MG do array
    const buscarNoArray = people.results.find(pessoa =>{
        return pessoa.location.state === 'Minas Gerais';
    });
    console.log(buscarNoArray);
}

function someArray(){
    //Some: Busca no array e retorna True ou False
    //Exemplo abaixo estamos buscando alguem do estado de MG, ja sabemmos que tem e retornara TRUE
    const buscaTrueOrFalse = people.results.some(pessoa => {
        return pessoa.location.state === 'Minas Gerais';
    });
    console.log(buscaTrueOrFalse);
}

function everyArray() {
    //Every: semelhante ao some mas ele busca se "todos" do array tem TRUE o que foi buscado
    //No exemplo abaixo retornara TRUE pois todos os 100 pessoas do array sao naturalidade BR
    const buscaEmTodosTrueOrFalse = people.results.every(pessoa => {
        return pessoa.nat === 'BR';
    });
    console.log(buscaEmTodosTrueOrFalse);
}
function sortArray() {
    /*
    * Sort: para ordenar o array de varios modos
    * no exemplo abaixo fizemos algo bem complexo
    * 1. primeiro fizemos um map para criar um novo array apenas com a propriedade nome usando o first do array
    * 2. utilizamos o filter logo em seguida nesse novo array e filtramos apenas pessoas com nome iniciado por 'A'
    * 3.por fim implementamos o SORT em comparacoes de 2 argumentos A E B
    * OBS: TEMOS 3 returns comentados,
    * o primeiro coloca em ordem alfabetica
    * o segundo ele soma os caracteres e coloca em ordem o menor para o maior nome
    * o terceiro inverte colocando o maior nome para o menor
    */
    const somenteNomes = people.results.map(pessoa =>{
        //return pessoa.name.first
        return {
            name: pessoa.name.first
        };
    }).filter(pessoa => {
        return pessoa.name.startsWith('A');
    }).sort((a,b) => {
        //return a.name.localeCompare(b.name);
        //return a.name.length - b.name.length;
        //return b.name.length - a.name.length;
    });
    console.log(somenteNomes);

    /*
    OBS: USANDO apenas o sort() sem argumentos
    para isso ao utilizar o map deveriamos voltar um array, nao um objeto, trocando o return comentado: return pessoa.name.first
    assim o map criaria um arrayVETOR e poderiamos apenas usar .sort(); que o js iria automatico ordenar
     */
}
