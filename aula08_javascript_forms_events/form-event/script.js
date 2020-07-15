window.addEventListener('load', start);

function start() {
  var span = document.querySelector('#caracteres');
  var input = document.querySelector('#nome');
  input.addEventListener('keyup', contadorCaractere);
  var form = document.querySelector('form');
  form.addEventListener('submit', enviarFormulario);
}
function contadorCaractere(event) {
  var count = event.target.value;
  var span = document.querySelector('#caracteres');
  span.textContent = count.length;
}

function enviarFormulario() {
  event.preventDefault();

  var input = document.querySelector('#nome');
  alert(input.value + ' Cadastrado com Sucesso!');
}
