console.log("Hola Mundo"); // Esto es un comentario

//declaracion de variables

//es una forma incorrecta de declarar una variable
//Scope global
// var nombre = "Juan"
// nombre = "Pedro"

// var nombre = 10

let nombre = "Juan";
nombre = "Pedro";

//Constante, no puede cambiar su valor
const apellido = "Alvarenga";
const edad = 29;

let texto = "El nombre es: " + nombre + " " + apellido;
let texto2 = `El nombre es: ${nombre} el apellido: ${apellido}`; //  "El nombre es: " + nombre + " " + apellido;

// console.log(texto2);
// alert(texto2);

// const mascota = prompt("Ingrese el nombre de su mascota");
// console.log(mascota);

let numero1 = Number(prompt("Ingrese el primer numero"));
let numero2 = Number(prompt("Ingrese el segundo numero"));

//hay que convertir los valores a numeros
let resultado = numero1 + numero2;

alert(`El resultado es: ${resultado}`);

var esMayor = true;

{
  var esMayor = false;
  // es un Scope diferente
  let nombre = "Maria";
  console.log(nombre); // Maria
  let direccion = "tt";
}

console.log(esMayor);

console.log(nombre); // Pedro
// console.log(direccion); // no existe en este Scope

let lista = [1, 2, 3, 4, 5, "Hola", true, 2.34, [1, 2, 3]];

// lista.pop(); //elimina el ultimo valor de una lista
// lista.push(6); //agrega un valor al final de la lista

console.log(lista.length, lista);
