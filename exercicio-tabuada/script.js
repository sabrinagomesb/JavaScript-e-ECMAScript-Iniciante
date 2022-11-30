function calcular() {
  let numeroElemento = document.getElementById("txtnumber")
  let numero = Number(numeroElemento.value)
  let resultadoElemento = document.getElementById("resultado")

  if (numeroElemento.value == 0) {
    alert("[ERRO] Por favor, digite um numero válido.")
  } else {
    resultadoElemento.innerHTML = ""
    for (let i = 1; i <= 10; i++) {
      let newOption = document.createElement("option")
      resultadoElemento.appendChild(newOption)

      let res = i * numero
      newOption.innerHTML += `Tabuada de ${numero} x ${i} = ${res} <br>`
    }
  }
}
