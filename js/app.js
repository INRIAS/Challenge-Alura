const tAreaEncriptar = document.getElementById("encriptar");
const tAreaResultado = document.getElementById("encriptado");
const $textRequired = document.querySelector(".text-required");
const $textAlert = document.querySelector(".text-alert");
const $imgEncriptado = document.querySelector(".img-encriptado");
const $solicitudEncriptado = document.querySelector(".solicitud-encriptado");
const $btnCopy = document.querySelector(".btn-copy");
let textoEncriptar = "";
let textoEncriptado = "";
let textoDesencriptado = "";
let textoDesencriptar = "";

/* ------------Encriptar--------- */

function encriptar(texto) {
  if (tAreaEncriptar.value == "") {
    $textAlert.classList.add("alert");
    $textRequired.classList.remove("alert");
    setTimeout(() => {
      $textAlert.classList.remove("alert");
      $textRequired.classList.add("alert");
    }, 3000);
  }

  if (tAreaEncriptar.value == "") {
    $textAlert.classList.add("alert");
    $textRequired.classList.remove("alert");
  }

  if (tAreaEncriptar.value !== "") {
    $imgEncriptado.classList.add("is-active");
    $solicitudEncriptado.classList.add("is-active");
    tAreaResultado.classList.remove("is-active");
    $btnCopy.classList.remove("is-active");
  }

  return texto.replace(/e|i|a|o|u/g, function (vocal) {
    switch (vocal) {
      case "e":
        return "enter";
      case "i":
        return "imes";
      case "a":
        return "ai";
      case "o":
        return "ober";
      case "u":
        return "ufat";
      default:
        return vocal;
    }
  });
}

// Función que se activa al presionar el botón "Encriptar"
function aEncriptado() {
  textoEncriptar = tAreaEncriptar.value.toLowerCase();
  textoEncriptado = encriptar(textoEncriptar);
  tAreaResultado.innerHTML = textoEncriptado;
  // limpiar();
}

//

/* ------------Desenncriptar--------- */
function desencriptar(texto) {
  if (tAreaEncriptar.value == "") {
    $textAlert.classList.add("alert");
    $textRequired.classList.remove("alert");
    setTimeout(() => {
      $textAlert.classList.remove("alert");
      $textRequired.classList.add("alert");
    }, 3000);
  }

  if (tAreaEncriptar.value !== "") {
    $imgEncriptado.classList.add("is-active");
    $solicitudEncriptado.classList.add("is-active");
    tAreaResultado.classList.remove("is-active");
    $btnCopy.classList.remove("is-active");
  }

  return texto.replace(/enter|imes|ai|ober|ufat/g, function (vocal) {
    switch (vocal) {
      case "enter":
        return "e";
      case "imes":
        return "i";
      case "ai":
        return "a";
      case "ober":
        return "o";
      case "ufat":
        return "u";
      default:
        return vocal;
    }
  });
}
// Función que se activa al presionar el botón "Desencriptar"
function aDesencritado() {
  textoDesencriptar = tAreaEncriptar.value;
  textoDesencriptado = desencriptar(textoDesencriptar);
  tAreaResultado.innerHTML = textoDesencriptado;
}

/*--------- Copiar Portapapeles ------------- */

function copiarTexto() {
  const texto = tAreaResultado.innerText;
  navigator.clipboard
    .writeText(texto)
    .then(() => {
      alert("Texto copiado al portapapeles");
    })
    .catch((err) => {
      console.error("Error al copiar el texto: ", err);
    });
}

/*--------- Pre-limpiar ------------- */

// function limpiar() {
//   tAreaEncriptar.value = "";
// }

function btnEraser() {
  tAreaEncriptar.value="";
  tAreaResultado.value="";
  $imgEncriptado.classList.remove("is-active");
  $solicitudEncriptado.classList.remove("is-active");
  tAreaResultado.classList.add("is-active");
  $btnCopy.classList.add("is-active");
}
