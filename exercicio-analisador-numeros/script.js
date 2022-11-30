let numeroElemento = document.getElementById("txtadd")
let listaElemento = document.getElementById("lista")
let result = document.getElementById("result")
let valores = []

function adicionar() {
  if (numeroElemento.value == 0 || numeroElemento.value > 100) {
    alert("[ERRO] Digite um número entre 1 e 100.")
  } else {
    valores.push(Number(numeroElemento.value))
    let item = document.createElement("option")
    item.text = `Valor ${numeroElemento.value} adicionado.`
    listaElemento.appendChild(item)
    result.innerHTML = ""
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
    for (let pos in valores) {
      somaNumber += valores[pos]
      if (valores[pos] > maiorNumber) maiorNumber = valores[pos]
      if (valores[pos] < menorNumber) menorNumber = valores[pos]
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
