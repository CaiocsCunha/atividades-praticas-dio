let jogador = null
let vencedor = null
let jogadorSelecionado = document.getElementById('jogador-selecionado')
let vencedorSelecionado = document.getElementById('vencedor-selecionado')
let todosQuadrados = document.getElementsByClassName('quadrado')

mudarJogadorNaTela('X') //seta o jogador X como o primeiro a jogar

function escolherQuadrado(id) {
  //checa se já tem algum vencedor
  if (vencedor !== null) {
    return
  }

  let quadrado = document.getElementById(id)

  //evita que ao clicar em um quadrado ja preenchido ele mude
  if (quadrado.innerHTML !== '-') {
    return
  }

  quadrado.innerHTML = jogador
  quadrado.style.color = '#000'

  //muda o jogador da vez
  if (jogador === 'X') {
    jogador = 'O'
  } else {
    jogador = 'X'
  }

  //apenas muda o display do jogador do turno na tela
  mudarJogadorNaTela(jogador)
  checaVencedor()
}

function mudarJogadorNaTela(valor) {
  jogador = valor
  jogadorSelecionado.innerHTML = jogador
}

//checa todas as possibilidade de vitória no jogo
function checaVencedor() {
  let quadrado1 = document.getElementById('1')
  let quadrado2 = document.getElementById('2')
  let quadrado3 = document.getElementById('3')
  let quadrado4 = document.getElementById('4')
  let quadrado5 = document.getElementById('5')
  let quadrado6 = document.getElementById('6')
  let quadrado7 = document.getElementById('7')
  let quadrado8 = document.getElementById('8')
  let quadrado9 = document.getElementById('9')

  if (checaSequencia(quadrado1, quadrado2, quadrado3)) {
    mudarCorQuadrado(quadrado1, quadrado2, quadrado3)
    mudarVencedor(quadrado1)
    return
  }
  if (checaSequencia(quadrado4, quadrado5, quadrado6)) {
    mudarCorQuadrado(quadrado4, quadrado5, quadrado6)
    mudarVencedor(quadrado4)
    return
  }
  if (checaSequencia(quadrado7, quadrado8, quadrado9)) {
    mudarCorQuadrado(quadrado7, quadrado8, quadrado9)
    mudarVencedor(quadrado7)
    return
  }
  if (checaSequencia(quadrado1, quadrado4, quadrado7)) {
    mudarCorQuadrado(quadrado1, quadrado4, quadrado7)
    mudarVencedor(quadrado1)
    return
  }
  if (checaSequencia(quadrado2, quadrado5, quadrado8)) {
    mudarCorQuadrado(quadrado2, quadrado5, quadrado8)
    mudarVencedor(quadrado8)
    return
  }
  if (checaSequencia(quadrado3, quadrado6, quadrado9)) {
    mudarCorQuadrado(quadrado3, quadrado6, quadrado9)
    mudarVencedor(quadrado3)
    return
  }
  if (checaSequencia(quadrado1, quadrado5, quadrado9)) {
    mudarCorQuadrado(quadrado1, quadrado5, quadrado9)
    mudarVencedor(quadrado1)
    return
  }
  if (checaSequencia(quadrado3, quadrado5, quadrado7)) {
    mudarCorQuadrado(quadrado3, quadrado5, quadrado7)
    mudarVencedor(quadrado3)
    return
  }
}

function mudarCorQuadrado(quadrado1, quadrado2, quadrado3) {
  quadrado1.style.background = '#0f0'
  quadrado2.style.background = '#0f0'
  quadrado3.style.background = '#0f0'
}

//atribui o vencedor à variável vencedor
function mudarVencedor(quadrado) {
  vencedor = quadrado.innerHTML
  vencedorSelecionado.innerHTML = vencedor
}

//checa se a sequencia em questão tem conteudo igual ou não
function checaSequencia(quadrado1, quadrado2, quadrado3) {
  let eIgual = false

  if (
    quadrado1.innerHTML !== '-' &&
    quadrado1.innerHTML === quadrado2.innerHTML &&
    quadrado2.innerHTML === quadrado3.innerHTML
  ) {
    eIgual = true
  }

  return eIgual
}

//reseta todas as caracteristicas iniciais do jogo
function reiniciar() {
  vencedor = null
  vencedorSelecionado.innerHTML = ''

  for (let i = 1; i <= 9; i++) {
    let quadrado = document.getElementById(i)
    quadrado.style.background = '#eee'
    quadrado.style.color = '#eee'
    quadrado.innerHTML = '-'
  }

  mudarJogadorNaTela('X')
}
