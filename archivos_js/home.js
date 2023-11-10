let peliculas = document.querySelector(".grupo1")

console.log(peliculas)

let peliculas_menor = document.querySelector(".card")

let acaVaLaAPIKey = "0e2ea5762304016279ec676c08bd2b6d";

fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=0e2ea5762304016279ec676c08bd2b6d")
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
    return data
})
.catch(function(error){
    console.log(error) 
});