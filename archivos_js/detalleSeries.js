// Obtener parámetros de la URL
const urlParams = new URLSearchParams(window.location.search);

// Obtener el valor del parámetro1
const id = urlParams.get('id');

let detallesContainer = document.querySelector('.toreto');

fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=2824d7c18fccbca72f06f7f29e7ebcd8`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        detallesContainer.innerHTML = '';

        let article = document.createElement('article');
        article.innerHTML = `
        <article class="toreto2">
        <img class="toreto3" src="https://image.tmdb.org/t/p/w500${data.poster_path}">
        <h2 class="toreto 4">${data.original_name}</h2>
    </article>

    <article class="hola">
        <ul class="parejo">
            <li class="coin">Coincidencia: 78%</li>
            <li>Calificacion: ${data.vote_average}</li>
            <li>Fecha de estreno: ${data.first_air_date}</li>
        </ul>
    </article>
    <article class="ho">
        <ul class="parejo">
            <li class="ten">N°7 en Tendencias</li>
            <li>Duracion: ${data.runtime} minutos</li>
        </ul>
    </article>
    <article class="arrab">
        <div class="des">
            <button class="botones">Descargar</button>
        </div>
        <div class="rep">
            <button class="botones">Reproducir</button>
        </div>
        <div class="recom">
            
            <a href="./recomendaciones.html" target="_blank"> 
                <button id="verRecomendaciones" class="botones">Ver Recomendaciones</button>
            </a>
        </div>
        
        <div class="detalles"></div>

    </article>
    <article class="sinopsisPadre">
        <p class="sinop">Sinopsis: ${data.overview}</p>
    </article>

    <a class="apa" href="./detalleGenero.html" target=""> <button class="agregara">${data.genres[0]}</button></a>
    <a class="apa" href="./detalleGenero.html" target=""> <button class="agregara">${data.genres[1]}</button></a>
    <a class="apa" href="./detalleGenero.html" target=""> <button class="agregara">${data.genres[2]}</button></a>


    <a class="apa" href="./favoritos.html" target=""> <button class="agregarb" type="checkbox">Agregar a
            favoritos</button></a>`;

        detallesContainer.appendChild(article);
    })
    .catch(function (error) {
        console.log('Error! Intente más tarde');
    });





