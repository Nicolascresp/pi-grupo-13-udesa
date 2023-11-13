let generop = document.querySelector(".genero1")
let generos = document.querySelector(".genero2")

let acaVaLaAPIKey = "0e2ea5762304016279ec676c08bd2b6d"

.fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${acaVaLaAPIKey}`)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
    let codigoGeneros = ""
    let arrayGeneros = data.genre


    for (let i = 0; i <= 5 ; i++) {
        peliculas +=` <article class="articulopelicula">
        <a href="./detalleP.html">
        <img src="https://image.tmdb.org/t/p/w500/${arrayGeneros[i].poster_path}"
        class="img-p">
        </a>
        <h3 class="elem1">${arrayPeliculas[i].title}</h3>

        <p class="info">Fecha de estreno: ${arrayPeliculas[i].release_date}</p>

        </article> `;
        
        
    }
})
.catch()