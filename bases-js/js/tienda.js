const URL = 'https://fakestoreapi.com/products'

fetch(URL)
    .then(response => {
        return response.json() // es una promesa que resolvera un Json
    })
    .then(productos => {

        const listaProductos = document.getElementById('listaProductos')
        let listado = ''

        for (let a = 0; a < productos.length; a++) {
            listado += `
            <div class="col">
                <div class="card" style="width: 18rem;">
                    <img style='height:200px;width:200px;object-fit:scale-down' src="${productos[a].image}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${productos[a].title}</h5>
                      <p class="card-text">${productos[a].description}</p>
                      <a href="#" class="btn btn-primary">Ver mas</a>
                    </div>
                  </div>
            </div>`
        }

        // productos.forEach(producto => {
        //     listado += `<li>${producto.title}</li>`
        // })

        listaProductos.innerHTML = listado

    })
    .catch(error => {
        console.log(error)
    })
