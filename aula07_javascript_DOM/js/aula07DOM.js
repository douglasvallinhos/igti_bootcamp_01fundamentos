var titulo = document.querySelector('h1');
titulo.textContent = 'Vallinhos';

var itemsLista = document.querySelectorAll('.items');
itemsLista = Array.from(itemsLista);

for (var i = 0; i < itemsLista.length; i++) {
  var elementoAtual = itemsLista[i];
  elementoAtual.classList.add('verde');
}
