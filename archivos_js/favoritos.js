// Obtener parámetros de la URL
const urlParams = new URLSearchParams(window.location.search);

// Obtener el valor del parámetro1
const id = urlParams.get('id');

let storedJsonString;
let idCollection = [];

const contenedorFavoritos = document.querySelector("#contenedor-favoritos");

if (localStorage.getItem('miColeccion') != null) {
    storedJsonString = localStorage.getItem('miColeccion');
    idCollection = JSON.parse(storedJsonString);
}

if (id !== null && !idCollection.includes(id)) {
    idCollection.push(id);
}

let favoritos = "";

for (let i = 0; i < idCollection.length; i++) {
    fetch(`https://api.themoviedb.org/3/movie/${idCollection[i]}?api_key=2824d7c18fccbca72f06f7f29e7ebcd8`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            favoritos += `
            <article class="card"?id=${data.title}>
                <a href="./detallePeliculas.html?id=${data.id}">
                    <img src="https://image.tmdb.org/t/p/w500${data.poster_path}"
                        class="imagenes">
                </a>
                <p class="id" id="oculto">${data.id}</p>
                <p class="titulo">${data.title}</p>
                <button class="boton-eliminar" value="${data.id}">Eliminar</button>
                <p class="texto" id="oculto">pelicula</p>
            </article>`
            contenedorFavoritos.innerHTML = favoritos;
            const botones = document.getElementsByClassName("boton-eliminar");
            for (const boton of botones) {
                boton.addEventListener("click", () => {
                    let index = idCollection.indexOf(boton.value);
                    if (index !== -1) {
                        idCollection.splice(index, 1);
                    }
                    const jsonString = JSON.stringify(idCollection);
                    localStorage.setItem('miColeccion', jsonString);
                    location.reload();
                })
            }
        })
}




const jsonString = JSON.stringify(idCollection);
localStorage.setItem('miColeccion', jsonString);

console.log(idCollection);