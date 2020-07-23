window.addEventListener('load', () => {
  inputNome = document.querySelector('#nome');
  prevenirFormularioSubmit();
  activateImput();
  render();
});
var globalNomes = ['Douglas Vallinhos', 'Francyellen Godoy'];
var inputNome = null;
var modoEditando = false;
var curentIndex = null;

function prevenirFormularioSubmit() {
  var form = document.querySelector('form');
  form.addEventListener('submit', handleFormularioSubmit);

  function handleFormularioSubmit(event) {
    event.preventDefault();
  }
}

function activateImput() {
  inputNome.focus();
  inputNome.addEventListener('keyup', lerDigitacao);

  function lerDigitacao(event) {
    var textoVazio = !!event.target.value && event.target.value.trim() !== '';
    if (!textoVazio) {
      inputNome.value = '';
      return;
    }
    if (event.key === 'Enter') {
      if (modoEditando) {
        updatenome(event.target.value);
      } else {
        //globalNomes.push(event.target.value);
        globalNomes = [...globalNomes, event.target.value];
      }
      modoEditando = false;
      render();
    }
  }
}
function updatenome(novoNome) {
  globalNomes[curentIndex] = novoNome;
}

function render() {
  var lista = document.querySelector('#nomesCadastrados');
  lista.innerHTML = '';
  var ul = document.createElement('ul');
  /*var li1 = document.createElement('li');
  var li2 = document.createElement('li');
  li1.textContent = 'Primeira';
  li2.textContent = 'Segunda';
  ul.appendChild(li1);
  ul.appendChild(li2);*/
  for (var i = 0; i < globalNomes.length; i++) {
    var li = document.createElement('li');
    var button = deleteButton(i);
    var span = createSpan(globalNomes[i], i);
    li.appendChild(button);
    li.appendChild(span);
    ul.appendChild(li);
  }
  lista.appendChild(ul);
  limparInput();

  function createSpan(name, index) {
    var span = document.createElement('span');
    span.classList.add('clickable');
    span.textContent = name;
    span.addEventListener('click', editarItem);
    function editarItem() {
      inputNome.value = name;
      inputNome.focus();
      modoEditando = true;
      curentIndex = index;
    }
    return span;
  }

  function deleteButton(index) {
    var button = document.createElement('button');
    button.classList.add('deleteButton');
    button.textContent = 'X';

    button.addEventListener('click', deleteName);
    function deleteName() {
      //globalNomes.splice(index, 1);
      globalNomes = globalNomes.filter((nome, index2) => {
        //return !(index2 === index);
        //return i !== index;
        if(index === index2){
          return false;
        }
        return true;

      });
      render();
    }
    return button;
  }
}

function limparInput() {
  inputNome.value = '';
  inputNome.focus();
}
