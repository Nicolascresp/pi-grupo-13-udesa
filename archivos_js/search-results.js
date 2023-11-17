const urlBusqueda = document.URL ;
const index = urlBusqueda.indexOf("busqueda=");
const searchText = urlBusqueda.slice(index + "busqueda=".length);
const apiKey = `3e70f944e54851d50cccbf55e9b26736`
const busqueda = searchText
const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${busqueda}`
const areaDeResultados = document.querySelector("#areaResultados")





fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        let buscadorPelicula = data.results;
        console.log(buscadorPelicula);
        if (buscadorPelicula.length == 0 ) {
            let menuBusqueda = document.querySelector("#menuBusqueda")
            menuBusqueda.innerText = `No se encontraron resultados para: ${busqueda}`

        }
        else  { let menuBusqueda = document.querySelector("#menuBusqueda")
        menuBusqueda.innerText = `Resultado de busqueda: ${busqueda}`}
        
    let contenido = "";



        for (let i = 0; i < 18 ; i++) {
            contenido += `
      <article class="card">
    <a href="./detallePeliculas.html?id=${buscadorPelicula[i].id}">
    <img src="https://image.tmdb.org/t/p/w500${buscadorPelicula[i].poster_path}" class="imagenes">
    </a>
    <p class="titulo">${buscadorPelicula[i].title}</p>
    <p class="texto">${buscadorPelicula[i].release_date}</p>
    </article>`;
        }
        areaDeResultados.innerHTML = contenido


    })
    .catch(function (error) {
        console.log("No hoy resultados: " + error);
    });



    



