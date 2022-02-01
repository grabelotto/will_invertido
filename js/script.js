var faseAtual = 0
var escolhaCerta = 0
var escolhaErrada = 0

function inicializaFase(ifaseAtual, iescolhaCerta, iescolhaErrada) {
  faseAtual = ifaseAtual
  escolhaCerta = iescolhaCerta
  escolhaErrada = iescolhaErrada
}

function willVivo() {
  window.location.href = '../fases/' + escolhaCerta + '.html'
}

function willMorto() {
  window.location.href = '../fases/' + escolhaErrada + '.html'
}

function ponte() {
  window.location.href = '../fases/7.html'
}

function venceu() {
  window.location.href = '../index.html'
}

function decisao() {
  var escolhaUsuario = parseInt(prompt('Digite o número da sua escolha'))

  if (escolhaUsuario == 1) {
    willVivo()
  } else if (escolhaUsuario == 2) {
    willMorto()
  } else if (faseAtual == 3 && escolhaUsuario == 3) {
    ponte()
  }
}

function atacar() {
  var numeroTentativas = 0
  do {
    var escolhaUsuario = alert('Ataque o monstro!')
    numeroTentativas += 1
  } while (numeroTentativas < 3)
  venceu()
}
