// arreglo / listas
const numeros = [1, 2, 3, 4, 5, 3];

//hace referencia a la misma lista
// const copiaNumeros = numeros;

// console.log(numeros.indexOf(30, 3));

const copiaNumeros = numeros.map((numero) => {
  return numero * 2;
});

//elimina del arreglo "numeros" 2 elementos
numeros.splice(2, 2);

// console.log(numeros);
// console.log(copiaNumeros);

const numerosPares = numeros.filter((numero) => {
  return numero % 2 === 0;
});

// console.log(numerosPares);

//objetos

//JSON: JavaScript Object Notation
const persona = {
  nombre: "Juan",
  apellido: "Alvarenga",
  edad: 29,
  comidaFavorita: ["Sopa Marinera", "pizza"],
  esMayor: true,
  direccion: {
    calle: "Calle 1",
    numeroCasa: 123,
    barrio: "Barrio 1",
    colonia: "Colonia 1",
  },
};

const persona2 = {
  nombre: "Maria",
  apellido: "Alvarenga",
  edad: 29,
  comidaFavorita: ["Sopa Marinera", "pizza"],
  esMayor: true,
  direccion: {
    calle: "Calle 1",
    numeroCasa: 123,
    barrio: "Barrio 1",
    colonia: "Colonia 1",
  },
};

const listaPersonas = [persona, persona2];
console.log(listaPersonas);

console.log(Object.keys(persona));
console.log(persona2);
// console.log(persona.nombre);
// console.log(persona.apellido);
// console.log(persona.direccion.numeroCasa);

//desescturación de objetos
// ...persona //spread operator

// const nombre = persona.nombre
// const apellido = persona.apellido

const nombre = "Pedro";

const { nombre: nombrePersona, apellido, direccion } = persona;

const { numeroCasa } = direccion;

// const personaNombre = persona.nombre;
// const personaApellido = persona.apellido;

console.log(nombre);
console.log(personaNombre);
console.log(personaApellido);
console.log(numeroCasa);
