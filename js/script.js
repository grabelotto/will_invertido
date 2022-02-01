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
  window.location.href = '../17.html'
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
    if (numeroTentativas === 0) {
      alert('Mike se escondeu atrás de Eleven. Ataque o monstro!')
    } else if (numeroTentativas === 1) {
      alert('Eleven deu uma pancada telecinética! Mais uma vez!')
    } else if (numeroTentativas === 2) {
      alert('Will deu um golpe com seu cajado!!')
    }
    numeroTentativas++
  } while (numeroTentativas < 3)
  venceu()
}
