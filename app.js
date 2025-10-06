//array vazio que irá receber os números corretos anteriores
let listaDeNumerosSorteados =[];
//definição de número limite
let numeroLimite = 10;
//liga a variavel à função que gera o numero aleatório e o envia para o array
let numeroSecreto = gereNumeroAleatorio();
// variavel do numero de tentativas
let tentativas = 1;

//função que cria a mensagem principal e ativa voz do narrador
function exibirTexto(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
 if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.6; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}
//função que define a mensagem principal para a mensagen neutra
function exibirMensagemInicial() {
  exibirTexto('h1', 'Número secreto');
  exibirTexto('p', `Escolha um número entre 1 e ${numeroLimite}`);
}
exibirMensagemInicial()
//função que verifica o valor escolhido pelo usuario e aplicação de operador ternário para a palavra tentativa
function verificarChute() {
  let chute = document.querySelector('input').value;
  let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
  
  //verifica se o chute escolhido é igual ao numero gerado e habilita o botão de novo jogo
  if (chute == numeroSecreto) {
    exibirTexto('h1','Acertou!');
    let mensagemTentativa = `Parabéns, você descobriu em ${tentativas} ${palavraTentativa}!`
    exibirTexto('p', mensagemTentativa);
    document.getElementById('reiniciar').removeAttribute('disabled');
  //verifica se o chute é menor ou maior que o numero secreto, mostrando suas respectivas mensagens, aumentando o numero de tentativas e limpando o campo para nova tentativa 
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
//função que gera o numero aleatório, o envia para o array caso já tenha sido escolhido, impossibilita o numero de ser escolhino novamente, e limpa o array quando todos forem escolhidos
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
//função que limpa o campo
function limparCampo () {
  chute = document.querySelector('input');
  chute.value = '';
}
//função que reinicia o jogo e desabilita o botão de novo jogo
function reiniciarJogo() {
  numeroSecreto = gereNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled',true);
}