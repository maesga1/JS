let text = prompt("Escribe una frase");
let nText = text.length;
let i;
for (i = 0; i < nText; i++) {
if (String.substr(i,1) === "a")  {
document.write(String.substr(i,1))
}
}