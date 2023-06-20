
let frase = prompt("Ingresa una frase:");
frase = frase.toLowerCase();
let vocales = [];
for (let i = 0; i < frase.length; i++) {
  let caracter = frase[i];
  if (caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u') {
    if (!vocales.includes(caracter)) {
      vocales.push(caracter);
    }
  }
}

document.write("Las vocales que aparecen en la frase son: " + vocales.join(", "));

