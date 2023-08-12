

const miPrimerPromesa = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve('Promesa resuelta')
        }, 3000)

    })
}

//ejecutar la función

console.log('Ininciando la promesa')

//resolver de forma asincrona
miPrimerPromesa().then((response) => {
    console.log(response)
})


console.log('Promesa finalizada')
