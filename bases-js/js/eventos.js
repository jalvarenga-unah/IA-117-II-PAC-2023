//como asociar una etiqueta a una variable???

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");

console.log("Valor antes de el setter", num1.value);
num1.value = 100;
console.log("Valor despues de el setter", num1.value);

const suma = () => {
  return Number(num1.value) + Number(num2.value);
};
