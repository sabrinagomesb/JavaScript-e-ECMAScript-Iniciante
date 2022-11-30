let numeroElemento = document.getElementById("txtadd")
let listaElemento = document.getElementById("lista")
let result = document.getElementById("result")
let valores = []

function numeroValido(numero) {
  if (Number(numero) >= 1 && Number(numero) <= 100) {
    return true
  } else {
    return false
  }
}

function numeroRepetido(numero, lista) {
  if (lista.indexOf(Number(numero)) != -1) {
    return true
  } else {
    return false
  }
}

function adicionar() {
  if (
    numeroValido(numeroElemento.value) &&
    !numeroRepetido(numeroElemento.value, valores)
  ) {
    valores.push(Number(numeroElemento.value))
    let item = document.createElement("option")
    item.text = `Valor ${numeroElemento.value} adicionado.`
    listaElemento.appendChild(item)
    result.innerHTML = ""
  } else {
    alert("[ERRO] Digite um número único entre 1 e 100.")
  }
  numeroElemento.value = ""
  numeroElemento.focus()
}

function finalizar() {
  if (valores.length == 0) {
    alert("Adicione valores antes de finalizar")
  } else {
    let quantNumber = valores.length
    let maiorNumber = valores[0]
    let menorNumber = valores[0]
    let somaNumber = 0
    let mediaNumber = 0

    for (let posicaoAtual in valores) {
      somaNumber += valores[posicaoAtual]
      if (valores[posicaoAtual] > maiorNumber)
        maiorNumber = valores[posicaoAtual]
      if (valores[posicaoAtual] < menorNumber)
        menorNumber = valores[posicaoAtual]
    }

    mediaNumber = somaNumber / quantNumber

    result.innerHTML = ""
    result.innerHTML += `<p>Foram inseridos ${quantNumber} números.</p>`
    result.innerHTML += `<p>O maior valor informado foi ${maiorNumber}.</p>`
    result.innerHTML += `<p>O menor valor informado foi ${menorNumber}.</p>`
    result.innerHTML += `<p>A soma dos valores inseridos é: ${somaNumber}.</p>`
    result.innerHTML += `<p>A média dos valores inseridos é: ${mediaNumber}.</p>`
  }
}
