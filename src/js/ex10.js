function contarVocales(frase) {
  frase = frase.toLowerCase();

  let conteoVocales = { a: 0, e: 0, i: 0, o: 0, u: 0 };

  for (let i = 0; i < frase.length; i++) {
    let caracter = frase.charAt(i);

    if (
      caracter === "a" ||
      caracter === "e" ||
      caracter === "i" ||
      caracter === "o" ||
      caracter === "u"
    ) {
      conteoVocales[caracter]++;
    }
  }

  return conteoVocales;
}

let fraseUsuario = prompt("Ingrese una frase:");

let resultado = contarVocales(fraseUsuario);

for (let vocal in resultado) {
  document.write( "La vocal " + vocal +" aparece " + resultado[vocal] + " veces en la frase."
  );
}
