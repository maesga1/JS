let frase = prompt("Ingresa una frase:");

frase = frase.toLowerCase();

let contadorVocales = 0;

for (let i = 0; i < frase.length; i++) {
  let caracter = frase.charAt(i);

  if (
    caracter === "a" ||
    caracter === "e" ||
    caracter === "i" ||
    caracter === "o" ||
    caracter === "u"
  ) {
    contadorVocales++;
  }
}

document.write(" tiene " + contadorVocales + " vocales.");
