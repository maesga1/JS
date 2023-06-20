let na = prompt("Escribe un número");
let nb = prompt("Escribe otro número");
let nc = prompt("Escribe otro número");
if (na > nb && na > nc) {
document.write(na);
} else if (nb > nc) {
document.write(nb);
} else {
document.write(nc);
}