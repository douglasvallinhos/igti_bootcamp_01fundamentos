window.addEventListener('load', function () {

    fetchRequisicaoHTTP();
    asyncAwaitRequisicaoHTTP();
});
// REQUISIÇAO HTTP USANDO METODO PADRAO
function fetchRequisicaoHTTP(){
    fetch('https://api.github.com/users/douglasvallinhos').then((res)=> {
        res.json().then((dados)=> {
            mostrarDados(dados);
        });
    }).catch((error)=>{
        console.log('ERRO NA REQUISIÇÃO HTTP!');
    });
}

// A MESMA REQUISIÇAO USANDO ASYNC AWAIT (MODERNO)
async function asyncAwaitRequisicaoHTTP() {
    const res = await fetch('https://api.github.com/users/douglasvallinhos');
    const json = await res.json();
    console.log(json);
}

//MOSTRANDO DADOS DA API NA DIV DO HTML
function mostrarDados(dados) {
const divUser = document.querySelector('#user');
divUser.textContent = `Nome: ${dados.name} Login: ${dados.login}`;
}

//CHAMANDO A PROMISSE METODO PADRAO
divisaoPromisse(12,2).then((res)=>{
    console.log(res);
}).catch((error)=>{
    console.log('Falha na divisão, ' + error);
});

// A MESMA CHAMADA USANDO ASYNC AWAIT
asyncAwaitdivisaoPromisse();
async function asyncAwaitdivisaoPromisse() {
    const divisao = await divisaoPromisse(12, 2);
    console.log(divisao);
}




// A DIVISAO PROMISSE
function divisaoPromisse(a, b) {
    return new Promise((resolve, reject)=>{
        if (b === 0){
            reject('Não é possivel dividir por 0');
        }
        resolve(a / b);
    });
}