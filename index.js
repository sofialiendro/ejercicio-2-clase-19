const opcionCorrecta = document.querySelector("#boton-correcto")
const opcionIncorrecta1 = document.querySelector("#boton-incorrecto1")
const opcionIncorrecta2 = document.querySelector("#boton-incorrecto2")
const resultado = document.querySelector("#respuesta-correcta")


opcionCorrecta.onclick = () => {
  resultado.textContent = "¡Correcto!"
  opcionCorrecta.classList.add("correcto")
}

opcionIncorrecta1.onclick = () => {
  resultado.textContent = "¡Incorrecto!"
  opcionIncorrecta1.classList.add("incorrecto")
}


opcionIncorrecta2.onclick = () => {
  resultado.textContent = "¡Incorrecto!"
  opcionIncorrecta2.classList.add("incorrecto")
}

opcionCorrecta.onmouseleave = () => {
    opcionCorrecta.classList.remove("correcto")
    resultado.textContent = ""
  }

opcionIncorrecta1.onmouseleave = () => {
    opcionIncorrecta1.classList.remove("incorrecto")
    resultado.textContent = ""
}

opcionIncorrecta2.onmouseleave = () => {
    opcionIncorrecta2.classList.remove("incorrecto")
    resultado.textContent = ""
}