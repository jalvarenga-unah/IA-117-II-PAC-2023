const form = document.getElementById('formulario')



form.addEventListener('submit', (e) => {

    e.preventDefault() // cancela el envío del formulario

    //instancia del formulario
    const formData = new FormData(e.target) // "form" ó "e.target", representan lo mismo

    // [1,2,3,4] => ...[1,2,3,4] = 1,2,3,4 // spread operator
    const data = [...formData.entries()] //tengo una lista con los valores de el form

    //forma 1: Construir la URL con los parámetros del formulario
    const queryParameters = new URLSearchParams(formData.entries())

    //forma 2: Crear un objeto Json, con los parámetros del formulario
    //TODO: pendiente de hacer

    console.log(queryParameters.toString())

})