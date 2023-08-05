//como asociar una etiqueta a una variable???

//inputs
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");

//botones
const botonParaRestar = document.getElementById("btnResta")
const botonParaDividir = document.getElementById("btnDividir")
const botonParaMultiplicar = document.getElementById("btnMultiplicar")

console.log("Valor antes de el setter", num1.value);
num1.value = 100;
console.log("Valor despues de el setter", num1.value);

//sección de funciones

const suma = () => {
  return Number(num1.value) + Number(num2.value);
};

const resta = () => {
  return Number(num1.value) - Number(num2.value);
}
const multi = () => {
  return Number(num1.value) * Number(num2.value)
}

const dividir = () => {
  return Number(num1.value) / Number(num2.value)
}

const sumar2 = ({ numero1, numero2 }) => {
  return numero1 + numero2
}

const restar2 = ({ numero1, numero2 }) => {
  return numero1 - numero2
}

const multi2 = ({ numero1, numero2 }) => {
  return numero1 * numero2
}


const dividir2 = ({ numero1, numero2 }) => {

  if (numero2 == 0) {
    alert('No se puede dividir por 0')
    return //termina la ejecución de la función
  }

  return numero1 / numero2
}



// !! asignar un eventos programaticamente !!

//metodo alternativo para definir la función anonima
// botonParaRestar.addEventListener('click', function(){ } )

//realizar la resta
botonParaRestar.addEventListener('click', () => {
  console.log('función resta con envento asiganado programaticamente')
  alert(`La resta es: ${resta()}`)//llamando a la función resta
})

//realizar la multiplicación
botonParaMultiplicar.addEventListener('click', () => {
  alert(`La multiplicación es: ${multi()}`)
})


// botonParaDividir.addEventListener('click', () => {

//   if (num2.value == 0) {
//     alert('No se puede dividir por 0')
//     return //termina la ejecución de la función
//   }

//   alert(`La división es: ${dividir()}`)
// })


botonParaDividir.addEventListener('click', () => {
  const datos = {
    numero1: Number(num1.value),
    numero2: Number(num2.value)
  }

  console.log(dividir2(datos))
})


