
let urlpeliculaspopulares = `https://api.themoviedb.org/3/movie/popular?api_key=3e70f944e54851d50cccbf55e9b26736`;

fetch(urlpeliculaspopulares)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    let arrayPeliculas = data.results;
    console.log(arrayPeliculas);

    let contenido = "";

    for (let i = 0; i < 5; i++) {
      contenido += `
      <article class="card"?id=${arrayPeliculas[i].title}>
          <a href="./detallePeliculas.html">
              <img src="https://image.tmdb.org/t/p/w500${arrayPeliculas[i].poster_path}"
                  class="imagenes">
          </a>
          <p class="titulo">${arrayPeliculas[i].title}</p>
          <p class="texto">${arrayPeliculas[i].release_date}</p>
      </article>`;
    }

    let peliculaspopulares = document.querySelector("#peliculasCalificadas");
    peliculaspopulares.innerHTML = contenido;
  })
  .catch(function(error) {
    console.log("Error: " + error);
  });
  let urlseries = `https://api.themoviedb.org/3/tv/popular?api_key=3e70f944e54851d50cccbf55e9b26736`;

  fetch(urlseries)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    let arraySeries = data.results;
    console.log(arraySeries);

    let contenido = "";
    console.log(arraySeries[0].title);
    console.log(arraySeries[0].release_date);
    console.log(arraySeries[0]);
    for (let i = 0; i < 5; i++) {
      
        contenido += `
      <article class="card"?id=${arraySeries[i].original_name}>
          <a href="./detallePeliculas.html">
              <img src="https://image.tmdb.org/t/p/w500${arraySeries[i].poster_path}"
                  class="imagenes">
          </a>
          <p class="titulo">${arraySeries[i].original_name}</p>
          <p class="texto">${arraySeries[i].first_air_date}</p>
      </article>`;
    }

    let seriespopulares = document.querySelector("#seriesCalificadas");
    seriespopulares.innerHTML = contenido;
  })
  .catch(function(error) {
    console.log("Error: " + error);
  });
  

  let urlpeliculasclasificadas = `https://api.themoviedb.org/3/movie/top_rated?api_key=3e70f944e54851d50cccbf55e9b26736`;

fetch(urlpeliculasclasificadas)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    let arrayclasificadas = data.results;
    console.log(arrayclasificadas);

    let contenido = "";

    for (let i = 0; i < 5; i++) {
      contenido += `
      <article class="card"?id=${arrayclasificadas[i].title}>
          <a href="./detallePeliculas.html">
              <img src="https://image.tmdb.org/t/p/w500${arrayclasificadas[i].poster_path}"
                  class="imagenes">
          </a>
          <p class="titulo">${arrayclasificadas[i].title}</p>
          <p class="texto">${arrayclasificadas[i].release_date}</p>
      </article>`;
    }

    let peliculasValor = document.querySelector("#peliculasValoradas");
    peliculasValor.innerHTML = contenido;
  })
  .catch(function(error) {
    console.log("Error: " + error);
  });
