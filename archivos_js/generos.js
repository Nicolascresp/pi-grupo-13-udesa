const generop = document.querySelector("#lista-generos1")
const generos = document.querySelector("#lista-generos2")
const acaVaLaAPIKey = "3e70f944e54851d50cccbf55e9b26736"
const endpointUno = `https://api.themoviedb.org/3/genre/movie/list?api_key=${acaVaLaAPIKey}`
const endpointDos = `https://api.themoviedb.org/3/genre/tv/list?api_key=${acaVaLaAPIKey}`



fetch(endpointUno)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        let codigo1 = ""

        let arrayGeneros = data.genres;
        console.log(arrayGeneros)


        for (let i = 0; i < arrayGeneros.length; i++) {
            codigo1 +=
                `<li class="separandoGeneros">
                    <a href="detallegenero.html?id=${arrayGeneros[i].id}&name=${arrayGeneros[i].name}">
                         ${arrayGeneros[i].name}
                    </a>
                </li>`;

        }
        generop.innerHTML = codigo1;

        return data
    })
    .catch(function (e) {
        console.log(e)
    })

fetch(endpointDos)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {

        let codigo2 = ""
        let arrayGenerosDos = data.genres
        console.log(arrayGenerosDos)


        for (let i = 0; i < arrayGenerosDos.length; i++) {


            codigo2 +=
                `<li class="separandoGeneros">
                <a href="detalleGenero.html?id=${arrayGenerosDos[i].id}&name=${arrayGenerosDos[i].name}">
                    ${arrayGenerosDos[i].name}
                </a>
                </li>`;


        }
        generos.innerHTML = codigo2;
        return data
    })
    .catch(function (e) {
        console.log(e)
    })