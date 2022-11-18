function carregar() {
  let mensagem = document.getElementById("mensagem")
  let img = document.getElementById("img")
  let data = new Date()
  let hora = data.getHours()
  let minuto = data.getMinutes()
  mensagem.innerHTML = `Agora são ${hora}:${minuto} horas.`

  if (hora >= 0 && hora < 12) {
    img.src = "./assets/manha.jpg"
    document.body.style.background = "#e2cd9f"
    mensagem.innerHTML += "<br><strong>BOM DIA!</strong>"
  } else if (hora >= 12 && hora < 18) {
    img.src = "./assets/tarde.jpg"
    document.body.style.background = "#FA7801d9"
    mensagem.innerHTML += "<br><strong>BOA TARDE!</strong>"
  } else {
    img.src = "./assets/noite.jpg"
    document.body.style.background = "#041623"
    mensagem.innerHTML += "<br><strong>BOA NOITE!</strong>"
  }
}
