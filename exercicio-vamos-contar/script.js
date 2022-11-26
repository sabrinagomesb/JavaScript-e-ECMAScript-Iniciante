function contar() {
  let inicioElemento = document.getElementById("txtinicio")
  let fimElemento = document.getElementById("txtfim")
  let passoElemento = document.getElementById("txtpasso")
  let resultado = document.getElementById("resultado")

  // resultado = <div id="resultado">Preparada pra contar...</div>

  function iniciaContador() {
    resultado.innerHTML = "<strong>Contando...</strong><br>"
    // resultado = <strong>Contando...</strong>

    let inicioNumero = Number(inicioElemento.value)
    let fimNumero = Number(fimElemento.value)
    let passoNumero = Number(passoElemento.value)

    if (inicioNumero < fimNumero) {
      for (let num = inicioNumero; num <= fimNumero; num += passoNumero) {
        resultado.innerHTML += ` &#128073 ${num}`
        // resultado = <strong>Contando...</strong> + emoji e nu
        // resultado = <strong>Contando...</strong> + emoji e nu + emoji e nu + emoji e nu + emoji e nu
      }
    } else if (inicioNumero > fimNumero) {
      for (let num = inicioNumero; num >= fimNumero; num -= passoNumero) {
        resultado.innerHTML += ` &#128073 ${num}`
        // resultado = <strong>Contando...</strong> + emoji e nu
        // resultado = <strong>Contando...</strong> + emoji e nu + emoji e nu + emoji e nu + emoji e nu
      }
    } else if (inicioNumero == fimNumero) {
      resultado.innerHTML += "Inicio igual ao fim, então não precisamos contar"
    }
    
    resultado.innerHTML += "<br> &#128721 FIM."
  }

  if (
    inicioElemento.value.length == 0 ||
    fimElemento.value.length == 0 ||
    passoElemento.value.length == 0
  ) {
    alert("[ERRO] Verifique os dados e tente novamente.")
  } else if (Number(fimElemento.value) == 0) {
    resultado.innerHTML =
      "<strong>Impossível contar! Valor de FIM não pode ser 0.</strong>"
    // resultado = "<strong>Impossível contar! Valor de FIM não pode ser 0.</strong>"
  } else if (Number(passoElemento.value) <= 0) {
    alert("Passo inválido! Considerando PASSO 01")
    passoElemento.value = 1
    iniciaContador()
  } else {
    iniciaContador()
  }
}
