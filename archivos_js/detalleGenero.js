const ApiKey = "e076870216634aba329a155058ae5e08"
let qs = location.search;
let qsObj = new URLSearchParams(qs);
let idGenero = qsObj.get('id');
let nombre = qsObj.get('name');

let endpointPelicula = `https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&with_genres=${idGenero}`
let endpointSerie = `https://api.themoviedb.org/3/discover/tv?api_key=${ApiKey}&with_genres=${idGenero}`


fetch(endpointPelicula)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {

        let arrayDetalleGenero = data.results;
        console.log(arrayDetalleGenero);

        // Capturo el elemtento donde quiero hacer la modificación
        let detalle = document.querySelector('#menuGenero');
        detalle.innerHTML = `<h2 class="genero">${nombre}</h2>`
        let detalleGen = "";

        console.log(data);
        for (let i = 0; i < 11; i++) {
            if (arrayDetalleGenero[i].poster_path != "") {
                detalleGen += `<article class="card"?id=${arrayDetalleGenero[i].title}>
                <a>
                    <img src="https://image.tmdb.org/t/p/w500${arrayDetalleGenero[i].poster_path}"
                        class="imagenes">
                </a>
                <p class="id" id="oculto">${arrayDetalleGenero[i].id}</p>
                <p class="titulo">${arrayDetalleGenero[i].title}</p>
                <p class="texto" id="oculto">pelicula</p>
            </article>`
            }
        }


        detalle.innerHTML += detalleGen;

    }).catch(function (error) {
        return error
    })


fetch(endpointSerie)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {

        let arrayDetalleGenero = data.results;
        console.log(arrayDetalleGenero);

        // Capturo el elemtento donde quiero hacer la modificación
        let detalle = document.querySelector('#menuGenero');
        let detalleGen = "";

        console.log(data);
        for (let i = 0; i < 11; i++) {
            if (arrayDetalleGenero[i].poster_path != null) {
                detalleGen += `<a class="card" href="./detallepelicula.html?id=${arrayDetalleGenero[i].id}">
                                    <article class="card">
                                    <img class="imagen" src='https://image.tmdb.org/t/p/w500/${arrayDetalleGenero[i].poster_path}' alt="">
                                    <p class="titulo">${arrayDetalleGenero[i].original_name}</p>
                                    </article>
                                    </a> `;
            }
        }


        detalle.innerHTML += detalleGen;

    }).catch(function (error) {
        console.log(error);
    });