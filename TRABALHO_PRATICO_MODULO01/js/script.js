window.addEventListener('load', start);

function $(seletor) {
  return document.querySelector(seletor);
}
function start() {
  $('#rangeR').addEventListener('input', changeColor);
  $('#rangeG').addEventListener('input', changeColor);
  $('#rangeB').addEventListener('input', changeColor);
  $('#txtR').value = 0;
  $('#txtG').value = 0;
  $('#txtB').value = 0;
}

function changeColor() {
  var currentR = $('#rangeR').value;
  var currentG = $('#rangeG').value;
  var currentB = $('#rangeB').value;
  $('#txtR').value = currentR;
  $('#txtG').value = currentG;
  $('#txtB').value = currentB;
  var color = 'rgb(' + currentR + ',' + currentG + ',' + currentB + ')';
  document.body.style.backgroundColor = color;
}
