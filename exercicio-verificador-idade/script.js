function verificar() {
  let data = new Date()
  let ano = data.getFullYear()
  let respAno = document.getElementById("txtano")
  let resultado = document.getElementById("resultado")
  if (respAno.value.length == 0 || Number(respAno.value) > ano) {
    alert("[ERRO] Verifique os dados e tente novamente.")
  } else {
    let fSex = document.getElementsByName("radsex")
    let idade = ano - Number(respAno.value)
    let genero = ""
    let img = document.createElement("img")
    img.setAttribute("id", "foto")

    let baseUrlH = "./assets/homem-"
    let baseUrlM = "./assets/mulher-"

    if (fSex[0].checked) {
      genero = "Homem"
      if (idade >= 0 && idade < 12) {
        //criança
        img.setAttribute("src", `${baseUrlH}bebe.jpg`)
      } else if (idade < 22) {
        //jovem
        img.setAttribute("src", `${baseUrlH}jovem.jpg`)
      } else if (idade < 50) {
        //adulto
        img.setAttribute("src", `${baseUrlH}adulto.jpg`)
      } else {
        //idoso
        img.setAttribute("src", `${baseUrlH}idoso.jpg`)
      }
    } else if (fSex[1].checked) {
      genero = "Mulher"
      if (idade >= 0 && idade < 12) {
        //criança
        img.setAttribute("src", `${baseUrlM}bebe.jpg`)
      } else if (idade < 22) {
        //jovem
        img.setAttribute("src", `${baseUrlM}jovem.jpg`)
      } else if (idade < 50) {
        //adulto
        img.setAttribute("src", `${baseUrlM}adulta.jpg`)
      } else {
        //idoso
        img.setAttribute("src", `${baseUrlM}idosa.jpg`)
      }
    }
    resultado.style.textAlign = "center"
    resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    resultado.appendChild(img)
  }
}
