const genero1 = document.querySelector("#tipoGenero1")
const genero2 = document.querySelector("#tipoGenero2")
const genero3 = document.querySelector("#tipoGenero3")
const genero4 = document.querySelector("#tipoGenero4")
const genero5 = document.querySelector("#tipoGenero5")
const genero6 = document.querySelector("#tipoGenero6")
const genero7 = document.querySelector("#tipoGenero7")
const genero8 = document.querySelector("#tipoGenero8")
const genero9 = document.querySelector("#tipoGenero9")

const acaVaLaAPIKey = "3e70f944e54851d50cccbf55e9b26736"
const endpointUno = 
const endpointDos = 


fetch()
.then(function(response){
    return response.json()
})
.then(function(data){
    let arrayDetalleGenero = data.results;
    console.log(arrayDetalleGenero);

    let detalle = document.querySelector('#tipoGenero1');
    detalle.innerHTML=`<h2 class="ajustes">${nombre}</h2>`
    let dGenero = "";

    console.log(data);
    for (let i = 0; i < arrayDetalleGenero[0].length; i++) {
        dGenero += `<a  href="./detallePeliculas.html?id=${arrayDetalleGenero[i].id}">
                        <article class="card">
                        <img class="imagenes" src='https://image.tmdb.org/t/p/w500/${arrayDetalleGenero[i].poster_path}' alt="">
                        <p class="texto">${arrayDetalleGenero[i].title}</p>
                        </article>
                        </a> `
    }


detalle.innerHTML += dGenero;
})
.catch(function(e){
    console.log(e)
})