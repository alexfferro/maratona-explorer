const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]

let elementoResposta = document.querySelector('#resposta')
let inputPergunta = document.querySelector('#inputPergunta')

function adivinharDestino(){
  let tamanhoRespostas = respostas.length
  let numeroAleatorio = Math.floor(Math.random()*tamanhoRespostas)
  let respostaAleatoria = respostas[numeroAleatorio]

  if (inputPergunta.value == ''){
    alert('Digite alguma coisa !!')
    return
  }

  buttonPergunta.setAttribute('disabled', true)

  elementoResposta.innerHTML = `
  <div>${inputPergunta.value}</div>
  ${respostaAleatoria}
  `
  elementoResposta.style.opacity = 1
  setTimeout(function(){
    elementoResposta.style.opacity = 0
    buttonPergunta.removeAttribute('disabled')
  }, 3000)
}