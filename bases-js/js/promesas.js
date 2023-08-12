

const miPrimerPromesa = () => {
    return new Promise((resolve, reject) => {
        const random = Math.random()
        setTimeout(() => {
            if (random > 0.5) {
                resolve('Promesa resuelta')
            } else {
                reject(`Promesa rechazada, no fué completada con éxito ${random}`)
            }
        }, 1500)

    })
}

    //ejecutar la función



    //resolver de forma asincrona
    // miPrimerPromesa()
    //     .then((response) => {
    //         console.log(response)
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //     })
    //     .finally(() => {
    //         console.log('Promesa finalizada')
    //     })



    //llamado a una funcion autoejecutable
    ; (async () => {
        console.log('Ininciando la promesa')

        try {
            const response = await miPrimerPromesa()
            console.log(response)
        } catch (error) {
            console.log(error)
        }

        console.log('Fin de la promesa')
    })()

// async function ejecutarPromesa() {
//    await  miPrimerPromesa()
// }

// const ejecutarPromesa = async () => {
//     const response = await miPrimerPromesa()
//     console.log(response)
// }

