const fibonacci = [1, 1, 2, 3, 5, 8, 13, 21];

function ObtenerMenores (arreglos) {
    return arreglos.filter(num=>num<8);
}

function ObtenerMayoresIguales (arreglos) {
    return arreglos.filter(num=>num>=8);
}

function contarElementos (arreglos) {
    return arreglos.length;
}