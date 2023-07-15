const numeros = [10, 20];

let a = 0;
let b = 1;
let c = 2;

a = 4;
a = 5;
a = 2;
a = 28;
a = 298;
a = 2912423528;

// console.log(numeros[a]);
// console.log(numeros[b]);
// console.log(numeros[c]);

console.log(numeros);

for (let i = 0; i < numeros.length; i++) {
    console.log(`valor de i: ${i}, valor en el arreglo ${numeros[i]}`);
}

for (let i = numeros.length -1; i >= 0; i--) {
    console.log(`valor de i: ${i}, valor en el arreglo ${numeros[i]}`);
}


for(let i = 1; i <= 10; i = i +1) {
    console.log( `2x${i}=`, 2 * i);
}



