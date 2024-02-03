/*
Crear una función que muestre "¡Hola, mundo!" en la consola.
Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
*/

function saludar () {
    console.log("Hola, mundo");
}

saludar();

//2
function saludo (nombre) {
    console.log(`hola, ${nombre}.`);
}

saludo("Jorge");

//3
function promedioNum (num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}

let calcularPromedio = parseInt(promedioNum(2, 5, 7));
console.log(calcularPromedio);

//4
Crear una función que reciba tres números como parámetros y devuelva su promedio.
