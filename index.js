/*quero fazer o botão sim quando for precionado adicionar outro texto no tela. e quando o botao Não for precionado ele mudar de lugar constantemente para impedilo de ser aberto*/

function mostrarTexto() {
    var texto = document.getElementById("texto-escondido");
    texto.style.display = "block";
  }
  
  function moverBotaoNao() {
    var botaoNao = document.querySelector(".botaonao");
    var alturaTela = window.innerHeight;
    var larguraTela = window.innerWidth;
  
    var novaPosicaoX = Math.random() * (larguraTela - 100); // Subtrai 100 para não ultrapassar a largura da tela
    var novaPosicaoY = Math.random() * (alturaTela - 50); // Subtrai 50 para não ultrapassar a altura da tela
  
    botaoNao.style.left = novaPosicaoX + "px";
    botaoNao.style.top = novaPosicaoY + "px";
  }
  
  