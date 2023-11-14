const apyKey = "0e2ea5762304016279ec676c08bd2b6d"

const peliculasPopulares = `https://api.themoviedb.org/3/movie/popular?api_key=${apyKey}`
const seriesPopulares = `https://api.themoviedb.org/3/tv/popular?api_key=${apyKey}`
const peliculasMasValoradas = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apyKey}`

const buscador = `https://api.themoviedb.org/3/search/movie?api_key=${apyKey}&query=${busqueda}`


let peliculas = document.querySelector(".hijo1") 



fetch(peliculasPopulares)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data.results)
    let arrayPeliculas = data.results
    let peliculas = ""

    for (let i = 0; i <= 5 ; i++) {
        peliculas +=` <article class="card">
        <a href="./detallePeliculas.html">
        <img src="https://image.tmdb.org/t/p/w92/bvYjhsbxOBwpm8xLE5BhdA3a8CZ.jpg${arrayPeliculas[i].poster_path}"
        class="imagenes">
        </a>
        <h3 class="elem1">${arrayPeliculas[i].title}</h3>

        <p class="texto">Fecha de estreno: ${arrayPeliculas[i].release_date}</p>
        </article> `;
        
    }
    peliculas.innerHtml += peliculas
    return data
})
.catch(function(error){
    console.log(error) 
})
