let detallesContainer = document.querySelector('.detalles');

fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=2824d7c18fccbca72f06f7f29e7ebcd8`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        detallesContainer.innerHTML = '';
        
        let article = document.createElement('article');
        article.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500/${data.poster_path}" />
            <h2>${data.title}</h2>
            <h3>${data.overview} </h3>
            <h3>${data.runtime} </h3>
            <h3>${data.release_date} </h3>
            <h3>${data.genres[0].name} </h3>
            <h3>${data.vote_average} </h3>`;
       
        detallesContainer.appendChild(article);
    })
    .catch(function(error){
        console.log('Error! Intente más tarde');
    });


