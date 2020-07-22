window.addEventListener('load', () => {
    spread();
    rest();
    destructuring();
});

function spread() {
    const homensCasados = people.results.filter(pessoa => pessoa.name.title === 'Mr');
    const mulheresCasadas = people.results.filter(pessoa => pessoa.name.title === 'Ms');
    //SPREAD: (...) junta 2 arrays em um único array
    //OBS nesse exemplo juntamos arrays de homens e Mulheres casados em um único 'todosCasados'
    const todosCasados = [...homensCasados, ...mulheresCasadas];
    console.log(todosCasados);
}

function rest() {
    console.log(somaInfinita(1,2));
    console.log(somaInfinita(1,2,3,4,5));
    console.log(somaInfinita(1,2,5,8,90,45,34,67));
    //Rest: (...) Outro uso seria nesse caso que criamos uma função que aceita infinitos parametros
    //Obs, ao colocar ...numbers como parametro fizemos a function somaInfinita, juntar todos parametros criando um array

}
function somaInfinita(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}




function destructuring() {
    const primeiroDoArray = people.results[0];

    //OBS: METODO ANTIGO
    //const username = primeiroDoArray.login.username;
    //const password = primeiroDoArray.login.password;

    //usando Destructuring
    const {username, password} = primeiroDoArray.login;
    console.log(username + password);
}