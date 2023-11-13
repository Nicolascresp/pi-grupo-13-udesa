let generop = document.querySelector(".genero1")
let generos = document.querySelector(".genero2")

let acaVaLaAPIKey = "0e2ea5762304016279ec676c08bd2b6d"

.fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${acaVaLaAPIKey}`)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
    let codigo1 = ""
    let codigo2 = ""
    let arrayGeneros = data.genre

    ${arrayGeneros[i+1].poster_path
    for (let i = 0; i < 1 ; i++) {
        codigo1 +=` <section class="articuloGeneros">

        <h3 class="enunciadoPeliculas">Generos de peliculas </h3>

        <a href="./detallePeliculas.html">
        <p class="genero"> ${arrayGeneros[i].peliculas} </p>
        </a>
        <a href="./detallePeliculas.html">
        <p class="genero"> ${arrayGeneros[i+1].peliculas} </p>
        </a>
        <a href="./detallePeliculas.html">
        <p class="genero"> ${arrayGeneros[i+2].peliculas} </p>
        </a>
        <a href="./detallePeliculas.html">
        <p class="genero"> ${arrayGeneros[i+3].peliculas} </p>
        </a>
        <a href="./detallePeliculas.html">
        <p class="genero"> ${arrayGeneros[i+4].peliculas} </p>
        </a>

        </section> `;

        codigo2 += ` <section class="articuloGeneros">

        <h3 class="enunciadoSeries">Generos de series </h3>

        <a href="./detalleSeries.html">
        <p class="genero"> ${arrayGeneros[i].series} </p>
        </a>
        <a href="./detalleSeries.html">
        <p class="genero"> ${arrayGeneros[i+1].series} </p>
        </a>
        <a href="./detalleSeries.html">
        <p class="genero"> ${arrayGeneros[i+2].series} </p>
        </a>
        <a href="./detalleSeries.html">
        <p class="genero"> ${arrayGeneros[i+3].series} </p>
        </a>
        <a href="./detalleSeries.html">
        <p class="genero"> ${arrayGeneros[i+4].series} </p>
        </a>

        </section> `;
        
        
    }
    generop.innerHTML += codigo1;
    generos.innerHtml += codigo2;
    return data
})
.catch(function(e){
    console.log(e)
})