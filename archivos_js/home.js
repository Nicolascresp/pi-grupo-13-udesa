let peliculas_menor = document.querySelector(".cajahija")

let acaVaLaAPIKey = "0e2ea5762304016279ec676c08bd2b6d";

fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${acaVaLaAPIKey}`)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data.results)
    let arrayPeliculas = data.results
    let peliculas = ""

    for (let i = 0; i <= 5 ; i++) {
        peliculas +=` <article class="articulo_pelicula">
        <a href="./detalleP.html">
        <img src="https://image.tmdb.org/t/p/w500/${arrayPeliculas[i].poster_path}"
        class="img-p">
        </a>
        <h3 class="elem1">${arrayPeliculas[i].title}</h3>

        <p class="info">Fecha de estreno: ${arrayPeliculas[i].release_date}</p>
        </article> `;
        
    }
    peliculas_menor.innerHtml += peliculas
    return data
})
.catch(function(error){
    console.log(error) 
})