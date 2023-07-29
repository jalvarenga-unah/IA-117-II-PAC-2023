function saludo({ edad, nombre, altura, apellido, peso }) {
  console.log(
    `Hola, soy ${nombre} ${apellido} tengo ${edad} años mido ${altura} cm`
  );
}

function saludo2(objetoJson) {
  //   const { edad, nombre, altura, apellido } = objetoJson;

  const nombre = objetoJson.nombre;
  const apellido = objetoJson.apellido;
  const edad = objetoJson.edad;
  const altura = objetoJson.altura;

  console.log(
    `Hola, soy ${nombre} ${apellido} tengo ${edad} años mido ${altura} cm`
  );
}

function division({ numerador, denominador }) {
  return numerador / denominador;
}

// const info = { altura: 180, apellido: "Perez", edad: 20, nombre: "Juan" };
// saludo(info);

console.log(division({ denominador: 2, numerador: 68 }));

function suma(valores) {
  return valores.n1 + valores.n2;
}

console.log(suma({ n1: 2, n2: 3 })); // no se puede

const mascota = (nombre, { raza, edad }) => {
  console.log(`Hola, soy ${nombre} y tengo ${edad} años, soy de raza ${raza}`);
};

mascota("Apolo", { raza: "Terrier", edad: 2 });
