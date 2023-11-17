
let urlpeliculaspopulares = `https://api.themoviedb.org/3/movie/popular?api_key=3e70f944e54851d50cccbf55e9b26736`;

function clickEnCard (event) {
 
  const id = event.currentTarget.children[1].innerText;
  const tipo = event.currentTarget.children[4].innerText;
  let nuevaURL = "#";
  if(tipo === "pelicula"){
    // Construir la URL con parámetros
    nuevaURL = `detallePeliculas.html?id=${id}`;
  }
  else{
    nuevaURL = `detalleSeries.html?id=${id}`;
  }

  window.location.href = nuevaURL;
}

fetch(urlpeliculaspopulares)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    let arrayPeliculas = data.results;
    console.log(arrayPeliculas);

    let contenido = "";
    //href="./detallePeliculas.html"
    for (let i = 0; i < 5; i++) {
      contenido += `
      <article class="card"?id=${arrayPeliculas[i].title}>
          <a>
              <img src="https://image.tmdb.org/t/p/w500${arrayPeliculas[i].poster_path}"
                  class="imagenes">
          </a>
          <p class="id" id="oculto">${arrayPeliculas[i].id}</p>
          <p class="titulo">${arrayPeliculas[i].title}</p>
          <p class="texto">${arrayPeliculas[i].release_date}</p>
          <p class="texto" id="oculto">pelicula</p>
      </article>`;
    }

    let peliculaspopulares = document.querySelector("#peliculasCalificadas");
    peliculaspopulares.innerHTML = contenido;

    for(let i = 0; i < peliculaspopulares.children.length; i++){
      peliculaspopulares.children[i].addEventListener("click", clickEnCard);
    }
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
      <article class="card">
          <a href="./detallePeliculas.html?id=${arraySeries[i].id}">
              <img src="https://image.tmdb.org/t/p/w500${arraySeries[i].poster_path}"
                  class="imagenes">
          </a>
          <p class="id" id="oculto">${arraySeries[i].id}</p>
          <p class="titulo">${arraySeries[i].original_name}</p>
          <p class="texto">${arraySeries[i].first_air_date}</p>
          <p class="texto" id="oculto">serie</p>
      </article>`;
    }

    let seriespopulares = document.querySelector("#seriesCalificadas");
    seriespopulares.innerHTML = contenido;

    for(let i = 0; i < seriespopulares.children.length; i++){
      seriespopulares.children[i].addEventListener("click", clickEnCard);
    }
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
      <article class="card">
          <a href="./detallePeliculas.html?id=${arrayclasificadas[i].id}">
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
