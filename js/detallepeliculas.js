
document.addEventListener('DOMContentLoaded', function () {
 
    cargarDetallesPelicula();

   
    document.getElementById('verRecomendaciones').addEventListener('click', mostrarRecomendaciones);
});

function cargarDetallesPelicula() {
   
    fetch('https://api.example.com/movie/ID_DE_LA_PELICULA')
        .then(response => response.json())
        .then(data => {
            
            document.getElementById('portada').src = data.portadaURL;
            document.getElementById('titulo').textContent = data.titulo;
            document.getElementById('calificacion').textContent = 'Calificación: ' + data.calificacion;
            document.getElementById('fecha').textContent = 'Fecha de Estreno: ' + data.fechaEstreno;
            document.getElementById('duracion').textContent = 'Duración: ' + data.duracion;
            document.getElementById('sinopsis').textContent = data.sinopsis;

            
            const generosElement = document.getElementById('generos');
            generosElement.innerHTML = 'Géneros: ';
            data.generos.forEach(genero => {
                const generoLink = document.createElement('a');
                generoLink.href = './detalleGenero.html'; 
                generoLink.textContent = genero;
                generosElement.appendChild(generoLink);
                generosElement.appendChild(document.createTextNode(' '));
            });
        })
        .catch(error => console.error('Error al cargar detalles:', error));
}

function cargarRecomendaciones() {
    
}

function mostrarRecomendaciones() {
   
    cargarRecomendaciones();
    document.getElementById('recomendaciones').style.display = 'block';
}
