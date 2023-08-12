const form = document.getElementById('formulario')

//asignarle un evento
form.addEventListener('submit', (e) => {

    // e: representa el evento

    e.preventDefault() // cancela el envío del formulario

    //instancia del formulario
    const formData = new FormData(e.target) // "form" ó "e.target", representan lo mismo

    //forma 1: Construir la URL con los parámetros del formulario
    const queryParameters = new URLSearchParams(formData.entries())
    console.log(queryParameters.toString())


    //forma 2: Crear un objeto Json, con los parámetros del formulario
    // [1,2,3,4] => ...[1,2,3,4] = 1,2,3,4 // spread operator

    let json = {}
    const data = [...formData.entries()] //tengo una lista con los valores de el form

    data.forEach(([key, value]) => {
        json[key] = value
        // json[input[0]] = input[1]
    })

    //forma 3: Crear un objeto Json, con los parámetros del formulario
    const json2 = Object.fromEntries(formData.entries());

    //con la data obtenida, se puede enviar a un servidor

    console.log(json2)



})