let listaDeNumerosSorteados =[];
let numeroLimite = 10
let numeroSecreto = gereNumeroAleatorio();
let tentativas = 1;

function exibirTexto(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function exibirMensagemInicial() {
  exibirTexto('h1', 'Número secreto');
  exibirTexto('p', `Escolha um numero entre 1 e ${numeroLimite}`);
}
exibirMensagemInicial()
function verificarChute() {
  let chute = document.querySelector('input').value;
  let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
  
  if (chute == numeroSecreto) {
    exibirTexto('h1','Acertou!');
    let mensagemTentativa = `Parabéns, você descobriu em ${tentativas} ${palavraTentativa}!`
    exibirTexto('p', mensagemTentativa);
    document.getElementById('reiniciar').removeAttribute('disabled');

  } else {
    if (chute > numeroSecreto) {
      exibirTexto('p','Você errou, o número secreto é menor!');
      tentativas++;
      limparCampo();
    } if (chute < numeroSecreto) {
      exibirTexto('p','Você errou, o número secreto é maior!');
      tentativas++;
      limparCampo();
    }
  }
}
function gereNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
  
  if(quantidadeDeElementosNaLista == numeroLimite ) {
    listaDeNumerosSorteados = []
  }
  if(listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gereNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido
  }
}
function limparCampo () {
  chute = document.querySelector('input');
  chute.value = '';
}
function reiniciarJogo() {
  numeroSecreto = gereNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled',true);
}