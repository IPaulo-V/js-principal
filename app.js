let numeroSecreto = gereNumeroAleatorio();
let tentativas = 1;

function exibirTexto(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

exibirTexto('h1', 'Número secreto');
exibirTexto('p', 'Escolha um numero entre 1 e 10');

function verificarChute() {
  let chute = document.querySelector('input').value;
  let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
  
  if (chute == numeroSecreto) {
    exibirTexto('h1','Acertou!');
    exibirTexto('p',`Parabéns, você descobriu em ${tentativas} ${palavraTentativa}!`);

  } else {
    if (chute > numeroSecreto) {
      exibirTexto('p','Você errou, o número secreto é menor!');
      tentativas++;
    } if (chute < numeroSecreto) {
      exibirTexto('p','Você errou, o número secreto é maior!');
      tentativas++;
    }
  }
}

function gereNumeroAleatorio() {
  return parseInt(Math.random() * 10 + 1);
}