let n1 = prompt("Escribe un número");
let i = 2;
while (n1 % i !== 0 && i < n1 / 2 ) {
i++;
}
if (n1 % i !== 0) {
document.write("El número es primo");
} else {
document.write("El número no es primo");
}