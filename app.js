let numeroSecreto = gereNumeroAleatorio();

function exibirTexto(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

exibirTexto('h1', 'Número secreto');
exibirTexto('p', 'Escolha um numero de 1 à 10');

function verificarChute() {
  let chute = document.querySelector('input').value;
  console.log(chute == numeroSecreto);  
}

function gereNumeroAleatorio() {
  return parseInt(Math.random() * 10 + 1);
}