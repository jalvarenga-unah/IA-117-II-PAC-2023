//como declarar una funcion?


function saludo() {
  alert("Hola mundo, desde una función"); // ``
}

//los parentesis son los que indican la "ejecución" de la función
// saludo()

function suma() {
  let num1 = 5;
  let num2 = 10;

  let resultado = num1 + num2;

  return resultado; // "return" finaliza la ejecución de la función

  alert("Holaaaaaaaa");
}

function mascota(nombre = "") {
  // if(nombre === undefined){
  if (nombre === "") {
    // if( !nombre ){
    return "Debe ingresar el nombre de su mascota";
  }

  return `Mi mascota se llama: ${nombre}`;
}

let resultado = suma();

console.log(resultado);

console.log(mascota("Polar"));
console.log(mascota());

const infoPersona = persona("Juan", "Alvarenga");

function persona(nombre, apellido) {
  //   let control = "";
  //   if (!nombre) {
  //     control = "sin nombre";
  //   } else {
  //     control = nombre;
  //   }

  //operador ternario
  let controlNombre = !nombre ? "sin nombre" : nombre;
  let controlApellido = !apellido ? "Sin apellido" : apellido;

  return `Hola, mi nombre es; ${controlNombre} y mi apellido es: ${controlApellido}`;
}

function persona2(nombre, apellido) {
  //   let controlNombre = nombre ?? "Sin nombre";
  let controlApellido = apellido ?? "Sin apellido";

  return `Hola, mi nombre es; ${
    nombre ?? "Sin nombre"
  } y mi apellido es: ${controlApellido}`;
}

console.log(infoPersona);
console.log(persona("Enrique", "Alvarenga"));
console.log(persona2("Pedro"));
console.log(persona2("Pedro3"));
console.log(persona2("Pedro2"));
console.log(persona2("Pedro4"));

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

function diaSemana(dia) {
  if (dia >= 1 && dia <= 7) {
    if (dia === 1) {
      return "Lunes";
    } else if (dia === 2) {
      return "Martes";
    } else if (dia === 3) {
      return "Miercoles";
    } else if (dia === 4) {
      return "Jueves";
    } else if (dia === 5) {
      return "Viernes";
    } else if (dia === 6) {
      return "sabado";
    } else if (dia === 7) {
      return "Domingo";
    }
  }

  return "El día no existe";
}

console.log(diaSemana(4));
diaSemana = 10;
// funciones anonimas

const miFuncion = () => {
  alert("Hola mundo desde una funcion anonimas");
};

miFuncion()


const numeros = [1,3,2,4,8,6,4,3,7,6]

function sumaAdyacente(numeros){

}


sumaAdyacente(numeros)
