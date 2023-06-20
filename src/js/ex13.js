let n1 = prompt("Escribe un número");
let i;
for (i=2;i < n1/2; i++) {
if (n1 % i === 0) {
document.write(i,", ");
}
}