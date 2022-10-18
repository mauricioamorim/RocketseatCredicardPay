import "./css/index.css"

//Selecionando os elementos para mudar a cor de fundo do "cc" (cartão de credito)
const ccBgColor01 = document.querySelector(".cc-bg svg > g g:nth-child(1) path")
const ccBgColor02 = document.querySelector(".cc-bg svg > g g:nth-child(2) path")

//Selecionando a imahem do logo do "cc" (cartão de creditp)
const ccImg = document.querySelector(".cc-logo span:nth-child(2) img")

function setCardType(type) {
  const colors = {
    visa: ["#436D99", "#2D57F2"],
    mastercard: ["#DF6D29", "#C69347"],
    default: ["black", "gray"],
  }
  ccBgColor01.setAttribute("fill", colors[type][0])
  ccBgColor02.setAttribute("fill", colors[type][1])

  ccImg.setAttribute("src", `/cc-${type}.svg`)
}

//executa a função
setCardType("default")

//Torna a função global
globalThis.setCardType = setCardType
