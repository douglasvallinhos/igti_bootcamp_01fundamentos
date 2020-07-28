let form = null;
let ipNome = null;
let btnBuscar = null;
let tabUsuarios = null;
let tabEstatisticas = null;
let spanTotalUsuarios = null;
let spanEstatisticas = null;
let allUsuarios = [];
let allBuscar = [];
let countMale = 0;
let countFemale = 0;
let allIdades = 0;
let mediaIdades = 0;

function $(component) {
    return document.querySelector(component);
}
window.addEventListener('load' ,() =>{
    form = $('form');
    form.addEventListener('submit', (event)=> event.preventDefault());
    ipNome = $('#ipNome');
    ipNome.addEventListener('keyup', enterIp);
    ipNome.disabled = true;
    btnBuscar = $('#btnBuscar');
    btnBuscar.disabled = true;
    btnBuscar.addEventListener('click', filtroBuscar)
    tabUsuarios = $('#tabUsuarios');
    tabEstatisticas = $('#tabEstatisticas');
    spanTotalUsuarios = $('#spanTotalUsuarios');
    spanEstatisticas = $('#spanEstatisticas');
    loadApi();
    setTimeout(() => {
        $('#carregando').classList.add('hide');
        ipNome.disabled = false;
    }, 1000);


});

async function loadApi() {
 const res = await fetch('http://localhost:3001/results');
    const json = await res.json();

    allUsuarios = json.map(pessoa => {
        return {
            name: pessoa.name.first + ' ' + pessoa.name.last,
            avatar: pessoa.picture.thumbnail,
            age: pessoa.dob.age,
            gender: pessoa.gender
        }
    });
}
function enterIp(event) {
    if(event.target.value !== ''){
        btnBuscar.disabled = false;
    }else if(event.target.value === ''){
        btnBuscar.disabled = true;
    }
    if(event.key === 'Enter'){
        filtroBuscar();
    }
    console.log(event);
}

function filtroBuscar() {
    let usuarioBuscado = ipNome.value.toLowerCase();
    if(usuarioBuscado === ''){
        return;
    }
    allBuscar = allUsuarios.filter(pessoa => {
        return pessoa.name.toLowerCase().includes(usuarioBuscado);
    });

    render();
}

function render() {
    renderUsuarios();
    renderEstatisticas();
}

function renderUsuarios(){
    allBuscar.sort((a,b)=>{
        return a.name.localeCompare(b.name);
    });

    let usuariosHTML = '<div>';
    
    allBuscar.forEach(pessoa => {
        const userHTML = `
        <div class="user">
            <div><img src="${pessoa.avatar}"></div>
            <div>${pessoa.name}, ${pessoa.age} anos</div>
        </div>
        `;
        usuariosHTML += userHTML;
    });
    usuariosHTML += '</div>';
    spanTotalUsuarios.innerHTML = `<h5>${allBuscar.length} usuário(s) encontrado(s)</h5>`;
    tabUsuarios.innerHTML = usuariosHTML;

}
function renderEstatisticas(){
    countFemale = allBuscar.filter(pessoa => {
        return pessoa.gender === 'female';
    }).length;

    countMale = allBuscar.filter(pessoa => {
        return pessoa.gender === 'male';
    }).length;
    allIdades = allBuscar.reduce((accumulator, current)=>{
        return accumulator + current.age;
    },0);
    mediaIdades = allIdades / allBuscar.length;

    console.log(allIdades);

    spanEstatisticas.innerHTML = `
    <div><h5>Estatísticas</h5></div>
    <div>Sexo Masculino: ${countMale}</div>
    <div>Sexo Feminino: ${countFemale}</div>
    <div>Soma das Idades: ${allIdades}</div>
    <div>Média das Idades: ${mediaIdades.toFixed(2)}</div>
    `;

}
