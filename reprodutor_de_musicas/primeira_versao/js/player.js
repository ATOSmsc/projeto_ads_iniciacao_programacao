let play = document.getElementById("myAudio");

let faixas = play.getElementsByTagName("source");

let vol = document.querySelector("#volume").value;

let faixaAtual = 0;

function playAudio() {
  play.play();
}

async function pauseAudio() {
  play.pause();
}

function reproduzirProximaFaixa() {
  faixaAtual++;
  if (faixaAtual >= faixas.length) {
    faixaAtual = 0;
  }
  play.src = faixas[faixaAtual].src;
  playAudio();
}
function reproduzirFaixaAnterior() {
  faixaAtual--;
  if (faixaAtual >= faixas.length) {
    faixaAtual = 0;
  }
  play.src = faixas[faixaAtual].src;
  playAudio();
}

function reproduzirAleatorio() {
  console.log(Math.random(faixaAtual));
  play.src = faixas[Math.floor(Math.random() * faixas.length)].src;
  playAudio();
}
